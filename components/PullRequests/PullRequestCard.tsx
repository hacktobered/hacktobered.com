import * as React from "react";
import { Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { BiGitPullRequest } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { MdIosShare } from "react-icons/md";
import NextLink from "next/link";
import { PullRequest } from "../../types/PullRequest";

export const PullRequestCard = (props: PullRequest) => {
  const pull = props;
  return (
    <Stack minW={{ base: "none", lg: "lg" }} fontSize="sm" spacing="4">
      <Stack direction="column" justify="space-between" spacing="4">
        <Text color="muted">
          <Icon as={BsGithub} color="blue.500" mr={2} />
          {pull.repository?.nameWithOwner}
        </Text>
        <Box fontSize="md">
          <Text fontWeight="medium" color="emphasized">
            {pull.title}
          </Text>
        </Box>
        <Flex justify="space-between">
          <NextLink href={pull.url} target="_blank" passHref>
            <Button
              as="a"
              leftIcon={<BiGitPullRequest fontWeight={"bold"} />}
              colorScheme="teal"
              variant="outline"
              fontSize={"18px"}
            >
              View PR
            </Button>
          </NextLink>
          <NextLink
            href={`/share/${pull.url.replace("https://github.com/", "")}`}
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
