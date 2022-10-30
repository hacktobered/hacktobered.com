import * as React from "react";
import { Center, SimpleGrid, Text } from "@chakra-ui/react";
import RepoCheerCard from "./RepoCheerCard";
import { Repository } from "../../types/OwnedRepoResults";
import { UserDetails } from "../../types/UserDetails";

type ReposSectionData = {
  reposData: Repository[];
  user: UserDetails;
};

export const ReposSection = (props: ReposSectionData) => {
  const reposData = props.reposData;

  return (
    <>
      {reposData && reposData.length > 0 ? (
        <Text my={4} fontWeight={"400"}>
          🎉🎉🎉 Here are {reposData.length} public repos where you contributed!
        </Text>
      ) : null}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="8">
        {reposData && reposData.length > 0
          ? reposData.map((repo) => (
              <RepoCheerCard key={repo.name} repo={repo} user={props.user} />
            ))
          : null}
      </SimpleGrid>
      {!reposData?.length && (
        <Center mt={4}>
          No Repositories found yet! BTW, today is a great day to create one.
        </Center>
      )}
    </>
  );
};
