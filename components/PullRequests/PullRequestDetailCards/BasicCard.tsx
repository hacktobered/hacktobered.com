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
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { toPng, toSvg } from "html-to-image";
import { BiGitPullRequest } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { MdIosShare } from "react-icons/md";
import NextLink from "next/link";
import { PullRequest } from "../../../types/PullRequest";
import download from "downloadjs";
import { useRef } from "react";

const BasicCard = (props: PullRequest) => {
  const domEl = useRef<HTMLDivElement>(null);
  const pull = props;

  const downloadPNG = () => {
    if (domEl.current) {
      toPng(domEl.current).then(function (dataUrl) {
        download(dataUrl, "my-node.png");
      });
    }
  };

  return (
    <Stack fontSize="sm" spacing="4" backgroundColor="white">
      <Stack
        id="domEl"
        ref={domEl}
        direction="column"
        justify="space-between"
        spacing="4"
        p={4}
        backgroundColor="white"
      >
        <Text color="muted">
          <Icon as={BsGithub} color="blue.500" mr={2} />
          {pull.repository?.nameWithOwner}
        </Text>
        <Box fontSize="md">
          <Text fontWeight="medium" color="emphasized">
            <Icon as={BiGitPullRequest} color="blue.500" mr={2} />
            {pull.title}
          </Text>
        </Box>
        <HStack spacing="3">
          <Avatar src={pull.author.avatarUrl} boxSize="10"></Avatar>
          <Box>
            <Text fontWeight="medium" color="emphasized">
              {pull.author.login}
            </Text>
            <Text color="muted">{pull.author.url}</Text>
          </Box>
        </HStack>
      </Stack>
      <Stack px={4} justify="space-between">
        <Flex>
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
  );
};

export default BasicCard;
