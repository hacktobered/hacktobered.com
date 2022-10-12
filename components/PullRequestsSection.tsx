import * as React from "react";
import { Center, Divider, Text } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { PullRequestsList } from "./PullRequestsList";
import { SearchResults } from "../types/SearchResults";
import { UserCardPropType } from "../types/UserCardPropType";
import { apiWrapper } from "../apiWrapper";

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
        <Text mt={4} fontWeight={"400"}>
          🎉🎉🎉 {searchData?.issueCount} Pull Requests found
        </Text>
      )}
      <PullRequestsList pulls={searchData?.edges} />
      {!searchData?.issueCount && (
        <Center mt={4}>
          No PRs yet! But its never late for some coffee and code!
        </Center>
      )}
    </>
  );
};
