import * as React from "react";
import {
  Box,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Card } from "../components/common/Card";
import Confetti from "react-confetti";
import { HacktoberFestSection } from "../components/common/HacktoberFestSection";
import HacktoberedCard from "../components/HacktoberedCard";
import { HacktoberedVideo } from "../remotion/HacktoberedVideo";
import { HalloweenLoading } from "../components/common/HalloweenLoading";
import { LoginComponent } from "../components/LoginComponent";
import type { NextPage } from "next";
import { PageWrapper } from "../components/PageWrapper";
import { Player } from "@remotion/player";
import { PullRequestsSection } from "../components/PullRequests/PullRequestsSection";
import { ReposSection } from "../components/Repos/ReposSection";
import { Repository } from "../types/OwnedRepoResults";
import { SearchResults } from "../types/SearchResults";
import { UserDetails } from "../types/UserDetails";
import { apiWrapper } from "../apiWrapper";

const Profile: NextPage = () => {
  const { data: session, status } = useSession();
  const [userDetails, setUserDetails] = useState<UserDetails>();
  const [reposData, setReposData] = useState<Repository[]>();
  const [searchData, setSearchData] = useState<SearchResults>();
  const [hacktoberPRs, SetHacktoberPRs] = useState<number>(0);
  const [showConfetti, SetShowConfetti] = useState<boolean>(false);

  const videoParams = {
    reposData,
    userDetails,
    pr: searchData ? searchData.issueCount : 0,
  };

  async function fetchData(accessToken: any) {
    const userData = await apiWrapper.fetchUserDetails(accessToken);
    setUserDetails({
      ...userData,
    });

    if (userData) {
      fetchPRs(accessToken, userData.login);
      fetchRepositories(accessToken, userData.login);
    }
  }

  async function fetchPRs(accessToken: any, login: string) {
    const pullData = await apiWrapper.fetchUserPullRequests(accessToken, login);
    if (pullData) {
      setSearchData({
        issueCount: pullData.issueCount,
        edges: pullData.edges,
      });
      const prCount = getHacktoberPRCount(pullData);
      if (prCount >= 4) {
        SetShowConfetti(true);
        setTimeout(() => {
          SetShowConfetti(false);
        }, 10000);
      }
      SetHacktoberPRs(prCount);
    }
  }

  async function fetchRepositories(accessToken: any, login: string) {
    const reposDataResponse = await apiWrapper.fetchContributedRepositories(
      accessToken
    );
    setReposData(reposDataResponse);
  }

  //helper function
  const getHacktoberPRCount = (pullData: SearchResults): number => {
    let prCounts = 0;
    for (let i = 0; i < pullData.edges.length; i++) {
      const pull = pullData.edges[i];
      let isHacktoberPR = pull.node.labels.nodes.filter(
        (n) => n.name.indexOf("hacktober") > -1
      );
      if (isHacktoberPR) {
        prCounts++;
      } else {
        for (
          let j = 0;
          j < pull.node.repository.repositoryTopics.edges.length;
          j++
        ) {
          const topic = pull.node.repository.repositoryTopics.edges[j];
          let isHacktoberRepo = topic.node.topic.name.indexOf("hacktober") > -1;
          if (isHacktoberRepo) prCounts++;
          break;
        }
      }
    }

    return prCounts;
  };

  useEffect(() => {
    if (session) {
      fetchData(session.accessToken);
    }
  }, [session]);

  if (session) {
    return (
      <>
        <PageWrapper>
          <Box as="section" bg="gray.100">
            {userDetails != null ? (
              <>
                {showConfetti && (
                  <Confetti numberOfPieces={showConfetti ? 400 : 0} />
                )}
                <Card>
                  <Stack spacing="16">
                    <Tabs variant="enclosed" size={"md"}>
                      <TabList>
                        <Tab>My PRs</Tab>
                        <Tab>Contributed Repos</Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          {reposData && reposData.length > 0 ? (
                            <Box my={4}>
                              <Player
                                component={HacktoberedVideo}
                                inputProps={videoParams}
                                durationInFrames={
                                  360 + (reposData ? reposData.length * 90 : 0)
                                }
                                compositionWidth={1920}
                                compositionHeight={1080}
                                fps={30}
                                style={{
                                  width: "100%",
                                }}
                                controls
                                autoPlay
                                loop
                              />
                            </Box>
                          ) : null}
                          {hacktoberPRs > 0 ? (
                            <HacktoberedCard
                              user={userDetails}
                              prCount={hacktoberPRs}
                            />
                          ) : null}
                          {searchData && (
                            <PullRequestsSection {...searchData} />
                          )}
                          <HacktoberFestSection />
                        </TabPanel>
                        <TabPanel>
                          {reposData && (
                            <ReposSection
                              user={userDetails}
                              reposData={reposData}
                            />
                          )}
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </Stack>
                </Card>
              </>
            ) : (
              <HalloweenLoading />
            )}
          </Box>
        </PageWrapper>
      </>
    );
  } else {
    return <LoginComponent />;
  }
};

export default Profile;
