import * as React from "react";
import { Box, Center, Stack, StackDivider } from "@chakra-ui/react";
import { PullRequestEntry } from "../types/PullRequestEntry";
import { PullRequestCard } from "./PullRequestCard";

type PRListProps = {
  pulls: PullRequestEntry[] | undefined;
};

export const PullRequestsList = (props: PRListProps) => {
  return (
    <Center maxW="sm" mx="auto" py={"4"}>
      <Box py="4">
        <Stack divider={<StackDivider />} spacing="4">
          {props.pulls &&
            props.pulls.length &&
            props.pulls.map(({ node: pull }) => (
              <PullRequestCard key={pull.number} {...pull} />
            ))}
        </Stack>
      </Box>
    </Center>
  );
};
