import * as React from "react";
import {
  Box,
  Divider,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import PRCheerCard from "./PRCheerCard";
import { SearchResults } from "../../types/SearchResults";
import { UserCardPropType } from "../../types/UserCardPropType";
import { apiWrapper } from "../../apiWrapper";
import { useSession } from "next-auth/react";

export const PullRequestsSection = (props: UserCardPropType) => {
  const [searchData, setSearchData] = useState<SearchResults>();
  const [hacktobered, SetHacktobered] = useState<boolean>(false);
  const { data: session, status } = useSession();

  async function fetchPR(accessToken: any, login: string) {
    const pullData = await apiWrapper.fetchUserPullRequests(accessToken, login);
    if (pullData) {
      setSearchData({
        issueCount: pullData.issueCount,
        edges: pullData.edges,
      });
      SetHacktobered(checkHacktoberCompletion(pullData));
    }
  }

  const checkHacktoberCompletion = (pullData: SearchResults): boolean => {
    let isFinished = false;
    for (let i = 0; i < pullData.edges.length; i++) {
      const pull = pullData.edges[i];
      let isHacktoberPR = pull.node.labels.nodes.filter(
        (n) => n.name.indexOf("hacktober") > -1
      );

      for (
        let j = 0;
        j < pull.node.repository.repositoryTopics.edges.length;
        j++
      ) {
        const topic = pull.node.repository.repositoryTopics.edges[j];
        let isHacktoberRepo = topic.node.topic.name.indexOf("hacktober") > -1;
        if (isHacktoberRepo) return isHacktoberRepo;
      }

      isFinished = isHacktoberPR.length > 0;
      console.log(pull.node.labels.nodes, isFinished);
      if (isFinished) return isFinished;
    }

    return isFinished;
  };
  useEffect(() => {
    if (session) {
      fetchPR(session.accessToken, props.user.login);
    }
  }, [session, props.user.login]);

  return (
    <>
      {!!searchData?.issueCount && (
        <>
          <Divider py={4} />
          <Text mt={8} fontWeight={"400"}>
            🎉🎉🎉 {searchData?.issueCount} public Pull Requests found
          </Text>
        </>
      )}

      {hacktobered && <Confetti />}

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="8">
        {searchData?.edges &&
          searchData?.edges.map((pullRequest) => (
            <Box
              key={pullRequest.node.number}
              maxW="4xl"
              bg={"white"}
              {...props}
              mt={8}
            >
              <PRCheerCard
                key={pullRequest.node.number}
                {...pullRequest.node}
              />
            </Box>
          ))}
      </SimpleGrid>
    </>
  );
};
