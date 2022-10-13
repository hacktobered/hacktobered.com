import * as React from "react";
import { Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { BiGitPullRequest } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { MdIosShare } from "react-icons/md";
import NextLink from "next/link";
import { OwnedRepository } from "../../types/OwnedRepoResults";

export const RepositoryCard = (props: OwnedRepository) => {
  const repo = props;
  return (
    <Stack minW={{ base: "none", lg: "lg" }} fontSize="md" spacing="4">
      <Stack direction="column" justify="space-between" spacing="4">
        <Text color="muted">
          <Icon as={BsGithub} mr={2} fontWeight="medium" color="emphasized" />
          {repo.name}
        </Text>
        {repo.description && (
          <Box fontSize="md">
            <Text noOfLines={2}>{repo.description}</Text>
          </Box>
        )}
        <Flex justify="space-between">
          <NextLink href={repo.url} target="_blank" passHref>
            <Button
              as="a"
              leftIcon={<BsGithub fontWeight={"bold"} />}
              colorScheme="teal"
              variant="outline"
              fontSize={"18px"}
            >
              View Repo
            </Button>
          </NextLink>
          <NextLink
            href={`/repo/${repo.url.replace("https://github.com/", "")}`}
            passHref
          >
            <Button
              as="a"
              leftIcon={<MdIosShare fontWeight={"bold"} />}
              colorScheme="teal"
              variant="solid"
              fontSize={"18px"}
            >
              Share
            </Button>
          </NextLink>
        </Flex>
      </Stack>
    </Stack>
  );
};
