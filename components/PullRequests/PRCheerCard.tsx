import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Text,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsGithub, BsTrophy } from "react-icons/bs";
import { BiGitPullRequest } from "react-icons/bi";
import { MdIosShare } from "react-icons/md";
import { PullRequest } from "../../types/PullRequest";
import download from "downloadjs";
import { toPng } from "html-to-image";
import { useRef } from "react";

const PRCheerCard = (props: PullRequest) => {
  const [poweredBy, setPoweredBy] = React.useState("none");
  const domEl = useRef<HTMLDivElement>(null);
  const pull = props;

  const downloadPNG = () => {
    setPoweredBy("normal");
    if (domEl.current) {
      toPng(domEl.current).then(function (dataUrl) {
        download(dataUrl, "my-pr.png");
        setPoweredBy("none");
      });
    }
  };
  let boxBg = useColorModeValue("white !important", "#111c44 !important");
  let mainText = useColorModeValue("gray.800", "white");
  let secondaryText = useColorModeValue("gray.400", "gray.400");

  return (
    <Box>
      <VStack mx={"auto"} alignItems={"center"}>
        <Flex
          id="domEl"
          ref={domEl}
          direction="column"
          alignItems="center"
          rounded="md"
          position="relative"
          bg={useColorModeValue("white", "gray.700")}
          shadow={{ md: "base" }}
          p={5}
          borderColor={"gray.100"}
          borderWidth="1px"
        >
          <Flex bg={boxBg} alignItems="center" direction="column">
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
            <Wrap py="6px">
              {pull.labels.nodes.map((n) =>
                n.name.indexOf("hacktober") > -1 ? (
                  <WrapItem key={n.name}>
                    <Tag
                      size={"sm"}
                      key={n.name}
                      variant="outline"
                      colorScheme="blue"
                    >
                      <TagLeftIcon as={BsTrophy} />
                      <TagLabel>{n.name}</TagLabel>
                    </Tag>
                  </WrapItem>
                ) : null
              )}
              {pull.repository.repositoryTopics.edges.map((n) =>
                n.node.topic.name.indexOf("hacktober") > -1 ? (
                  <WrapItem key={n.node.topic.id}>
                    <Tag
                      size={"sm"}
                      key={n.node.topic.name}
                      variant="outline"
                      colorScheme="blue"
                    >
                      <TagLeftIcon as={BsTrophy} />
                      <TagLabel>{n.node.topic.name}</TagLabel>
                    </Tag>
                  </WrapItem>
                ) : null
              )}
            </Wrap>

            <Text pt="24px" fontSize="lg" textAlign="center" fontWeight="bold">
              #HacktoberFest2022
            </Text>

            <Box alignSelf={"center"} display={"flex"} fontSize="sm" mt={"10"}>
              <Text fontSize="8px" pt={4} color={"gray.400"}>
                made with 💖 by hacktobered.com
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Button
          as="a"
          leftIcon={<MdIosShare fontWeight={"bold"} />}
          colorScheme="teal"
          variant="solid"
          onClick={() => downloadPNG()}
        >
          Share
        </Button>
      </VStack>
    </Box>
  );
};

export default PRCheerCard;
