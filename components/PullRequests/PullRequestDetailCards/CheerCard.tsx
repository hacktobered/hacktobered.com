import * as React from "react";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsGithub, BsHeartFill } from "react-icons/bs";
import { toPng, toSvg } from "html-to-image";
import { BiGitPullRequest } from "react-icons/bi";
import { MdIosShare } from "react-icons/md";
import NextLink from "next/link";
import { PullRequest } from "../../../types/PullRequest";
import download from "downloadjs";
import { useRef } from "react";

const CheerCard = (props: PullRequest) => {
  const domEl = useRef<HTMLDivElement>(null);
  const pull = props;

  const downloadPNG = () => {
    if (domEl.current) {
      toPng(domEl.current).then(function (dataUrl) {
        download(dataUrl, "my-node.png");
      });
    }
  };
  let boxBg = useColorModeValue("white !important", "#111c44 !important");
  let mainText = useColorModeValue("gray.800", "white");
  let secondaryText = useColorModeValue("gray.400", "gray.400");

  return (
    <Box id="domEl" ref={domEl}>
      <Flex bg={boxBg} p="20px" alignItems="center" direction="column">
        <Image
          src="https://i.ibb.co/xmP2pS6/Profile.png"
          alt="Graded pic"
          borderRadius="20px"
          width="100%"
        />
        <Flex flexDirection="column" mb="30px">
          <Image
            src={pull.author?.avatarUrl}
            alt={pull.author?.login}
            border="5px solid red"
            mx="auto"
            borderColor={boxBg}
            width="128px"
            height="128px"
            mt="-38px"
            borderRadius="50%"
          />

          <Text
            color={secondaryText}
            textAlign="center"
            fontSize="sm"
            fontWeight="500"
          >
            {pull.author?.login}
          </Text>
          <Text
            fontWeight="600"
            color={mainText}
            textAlign="center"
            fontSize="xl"
          >
            {" "}
            Yay! I made an open source contribution.
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column" bg={boxBg} px={5}>
        <HStack py="6px">
          <Text color="muted">
            <Icon as={BsGithub} color="blue.500" mr={2} />
          </Text>
          <Text color="muted">{pull.repository?.nameWithOwner}</Text>
        </HStack>
        <HStack py="6px">
          <Text color="muted">
            <Icon as={BiGitPullRequest} color="blue.500" mr={2} />
          </Text>
          <Text color="muted">{pull.title}</Text>
        </HStack>

        <HStack pt="24px">
          <Text color="muted">#Hacktober</Text>
          <Text color="muted">#HacktoberFest2022</Text>
        </HStack>
        <Divider py={6}></Divider>
        <Flex justify="center" py={6}>
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
        <Box alignSelf={"center"} display={"flex"} fontSize="sm" mt={"10"}>
          <Text mr={"1"}>made with</Text>
          <BsHeartFill fontSize="sm" color={"#DC143C"} />
          <Text ml={"1"}>by hacktobered</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default CheerCard;
