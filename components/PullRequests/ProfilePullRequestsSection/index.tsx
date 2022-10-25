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
import { Card } from "../../common/Card";
import PRCheerCard from "./PRCheerCard";
import { SearchResults } from "../../../types/SearchResults";
import { UserCardPropType } from "../../../types/UserCardPropType";
import { apiWrapper } from "../../../apiWrapper";
import { useSession } from "next-auth/react";

export const ProfilePullRequestsSection = (props: UserCardPropType) => {
  const [searchData, setSearchData] = useState<SearchResults>();
  const { data: session, status } = useSession();

  async function fetchPR(accessToken: any, login: string) {
    const pullData = await apiWrapper.fetchUserPullRequests(accessToken, login);
    if (pullData) {
      setSearchData({
        issueCount: pullData.issueCount,
        edges: pullData.edges,
      });
    }
  }
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
              <PRCheerCard {...pullRequest.node} />
            </Box>
          ))}
      </SimpleGrid>
    </>
  );
};
