import {
  AbsoluteFill,
  Sequence,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import Credits from "./HacktoberedVideo/Credits";
import Repo from "./HacktoberedVideo/Repo";
import { Repository } from "../types/OwnedRepoResults";
import { Series } from "remotion";
import { UserDetails } from "../types/UserDetails";
import UserIntro from "./HacktoberedVideo/UserIntro";
import UserSummary from "./HacktoberedVideo/UserSummary";
import { spring } from "remotion";

type VideoParams = {
  reposData: Repository[] | undefined;
  userDetails: UserDetails | undefined;
  pr: number;
};

export const HacktoberedVideo = (props: VideoParams) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  const { userDetails: user, reposData, pr } = props;
  // Animate from 0 to 1 after 25 frames
  const logoTranslationProgress = spring({
    frame: frame - 25,
    fps,
    config: {
      damping: 100,
    },
  });

  // Move the logo up by 150 pixels once the transition starts
  const logoTranslation = interpolate(
    logoTranslationProgress,
    [0, 1],
    [0, -150]
  );

  // Fade out the animation at the end
  const opacity = interpolate(
    frame,
    [durationInFrames - 25, durationInFrames - 15],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // A <AbsoluteFill> is just a absolutely positioned <div>!
  return (
    <AbsoluteFill style={{ backgroundColor: "yellow" }}>
      <AbsoluteFill style={{ opacity }}>
        <Series>
          <Series.Sequence durationInFrames={90}>
            <AbsoluteFill
              style={{ transform: `translateY(${logoTranslation}px)` }}
            >
              {user && <UserIntro {...user} />}
            </AbsoluteFill>
          </Series.Sequence>
          <Series.Sequence durationInFrames={90}>
            {user && (
              <UserSummary
                repos={reposData ? reposData.length : 0}
                pr={pr}
                user={user}
              />
            )}
          </Series.Sequence>
          {reposData &&
            reposData.map((repo) => (
              <Series.Sequence durationInFrames={90} key={repo.name}>
                <Repo {...repo} />
              </Series.Sequence>
            ))}
          <Series.Sequence durationInFrames={90}>
            <Credits />
          </Series.Sequence>
        </Series>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
