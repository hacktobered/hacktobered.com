import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_FAMILY } from "./constants";
import React from "react";

const title: React.CSSProperties = {
  fontFamily: FONT_FAMILY,
  textAlign: "center",
};

const word: React.CSSProperties = {
  marginLeft: 10,
  marginRight: 10,
  display: "inline-block",
};

type TransformedTextProp = {
  titleText: string;
  titleColor: string;
  fontSize: number;
  fontWeight: string;
};

export const TransformedText = (props: TransformedTextProp) => {
  const { titleText, titleColor, fontSize, fontWeight } = props;
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  const words = titleText.split(" ");

  return (
    <h1 style={{ fontSize: fontSize, fontWeight: fontWeight, ...title }}>
      {words.map((t, i) => {
        const delay = i * 5;

        const scale = spring({
          fps: videoConfig.fps,
          frame: frame - delay,
          config: {
            damping: 200,
          },
        });

        return (
          <span
            key={t}
            style={{
              ...word,
              color: titleColor,
              transform: `scale(${scale})`,
            }}
          >
            {t}
          </span>
        );
      })}
    </h1>
  );
};
