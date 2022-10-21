import * as React from "react";
import { Box, Center, Stack, StackDivider } from "@chakra-ui/react";
import { OwnedRepository } from "../../types/OwnedRepoResults";
import { RepositoryCard } from "./RepositoryCard";

type RepoListProps = {
  repos: OwnedRepository[] | undefined;
};

export const RepositoriesList = (props: RepoListProps) => {
  return (
    <Center maxW="lg" mx="auto" py={"4"}>
      <Box py="4">
        <Stack divider={<StackDivider />} spacing="8">
          {props.repos &&
            props.repos.length &&
            props.repos.map((repo) => (
              <RepositoryCard key={repo.url} {...repo} />
            ))}
        </Stack>
      </Box>
    </Center>
  );
};
