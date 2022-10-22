import * as React from "react";
import {
  Center,
  Divider,
  HStack,
  Heading,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import IamParticipating from "../IamParticipating";
import { NoPullRequestsSection } from "../common/HacktoberFestSection";
import { PullRequestsList } from "./PullRequestsList";
import { SearchResults } from "../../types/SearchResults";
import { UserCardPropType } from "../../types/UserCardPropType";
import { apiWrapper } from "../../apiWrapper";

export const PullRequestsSection = (props: UserCardPropType) => {
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
          <Text mt={4} fontWeight={"400"}>
            🎉🎉🎉 {searchData?.issueCount} public Pull Requests found
          </Text>
          <Divider py={4} />
        </>
      )}
      <PullRequestsList pulls={searchData?.edges} />
      {!searchData?.issueCount && (
        <Stack py={4} spacing={6}>
          <Heading as="h5" size="md">
            No Pull requests yet? It&apos;s never too late for some coffee and
            code!
          </Heading>
          <Text>
            There are many levels of contributions (beginner, medium, hard), and
            everybody can contribute!
          </Text>
        </Stack>
      )}
    </>
  );
};
