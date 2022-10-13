import * as React from "react";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { toPng, toSvg } from "html-to-image";
import { BiGitPullRequest } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { Contributor } from "../types/Contributor";
import { MdIosShare } from "react-icons/md";
import NextLink from "next/link";
import { PullRequest } from "../types/PullRequest";
import download from "downloadjs";
import { useRef } from "react";

type ContributorCardProps = {
  contributors: Contributor[];
  pullRequests: PullRequest[];
};

const ContributorsCard = (props: ContributorCardProps) => {
  const { contributors, pullRequests } = props;
  const repository = pullRequests[0]?.repository;
  console.log(contributors, pullRequests, repository);
  const domEl = useRef<HTMLDivElement>(null);

  const downloadPNG = () => {
    if (domEl.current) {
      toPng(domEl.current).then(function (dataUrl) {
        download(dataUrl, "my-node.png");
      });
    }
  };

  return repository ? (
    <Stack fontSize="sm" spacing="4" backgroundColor="white">
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        id="domEl"
        ref={domEl}
        direction="column"
        justify="space-between"
        spacing="4"
        p={4}
        backgroundColor="white"
      >
        <Text fontSize={"md"} color="muted">
          <Icon as={BsGithub} color="blue.500" mr={2} />
          {repository?.nameWithOwner}
        </Text>
        <Text color="muted" noOfLines={2}>
          {repository?.description}
        </Text>
        <Box fontSize="md">
          <Text fontWeight="medium" color="emphasized">
            🎉🎉🎉 A big thank you to the awesome contributors!
          </Text>
        </Box>
        <SimpleGrid
          columns={{ base: 2, sm: 2, md: 3, lg: 5 }}
          columnGap="8"
          rowGap={{ base: "10", lg: "16" }}
        >
          {contributors.map((contributor) => (
            <Stack
              key={contributor.id}
              spacing="4"
              align="center"
              textAlign="center"
            >
              <Stack spacing={{ base: "4", md: "5" }} align="center">
                <Avatar
                  src={contributor.avatar_url}
                  boxSize={{ base: "24", lg: "32" }}
                />
                <Box>
                  <Text fontWeight="medium" fontSize="lg">
                    {contributor.login}
                  </Text>
                  <Text color="accent">
                    {contributor.contributions} Contributions
                  </Text>
                </Box>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
      <Stack px={4} justify="space-between">
        <Flex justify={"center"}>
          <Button
            as="a"
            leftIcon={<MdIosShare fontWeight={"bold"} />}
            colorScheme="teal"
            variant="solid"
            fontSize={"18px"}
            onClick={() => downloadPNG()}
          >
            Share
          </Button>
        </Flex>
      </Stack>
    </Stack>
  ) : null;
};

export default ContributorsCard;
