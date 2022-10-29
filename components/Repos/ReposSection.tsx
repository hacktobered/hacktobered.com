import * as React from "react";
import { Center, Divider, SimpleGrid, Text } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import RepoCheerCard from "./RepoCheerCard";
import { Repository } from "../../types/OwnedRepoResults";
import { UserCardPropType } from "../../types/UserCardPropType";
import { apiWrapper } from "../../apiWrapper";

export const ReposSection = (props: UserCardPropType) => {
  const [reposData, setReposData] = useState<Repository[]>();
  const { data: session, status } = useSession();

  async function fetchMaintainedRepositories(accessToken: any, login: string) {
    const reposDataResponse = await apiWrapper.fetchContributedRepositories(
      accessToken
    );
    setReposData(reposDataResponse);
  }
  useEffect(() => {
    if (session) {
      fetchMaintainedRepositories(session.accessToken, props.user.login);
    }
  }, [session, props.user.login]);

  return (
    <>
      {reposData && reposData.length && (
        <Text my={4} fontWeight={"400"}>
          🎉🎉🎉 Here are {reposData.length} public repos where you contributed!
        </Text>
      )}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="8">
        {reposData &&
          reposData.length &&
          reposData.map((repo) => (
            <RepoCheerCard key={repo.name} repo={repo} user={props.user} />
          ))}
      </SimpleGrid>
      {!reposData?.length && (
        <Center mt={4}>
          No Repositories found yet! BTW, today is a great day to create one.
        </Center>
      )}
    </>
  );
};
