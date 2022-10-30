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
  Spacer,
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
import { BiGitPullRequest, BiGitRepoForked, BiStar } from "react-icons/bi";
import { BsGithub, BsTrophy } from "react-icons/bs";
import { MdIosShare } from "react-icons/md";
import { Repository } from "../../types/OwnedRepoResults";
import { UserDetails } from "../../types/UserDetails";
import download from "downloadjs";
import { toPng } from "html-to-image";
import { useRef } from "react";

type RepoCheerCardProps = {
  user: UserDetails;
  repo: Repository;
};

const RepoCheerCard = (props: RepoCheerCardProps) => {
  const [poweredBy, setPoweredBy] = React.useState("none");
  const domEl = useRef<HTMLDivElement>(null);
  const { repo, user } = props;

  const downloadPNG = () => {
    setPoweredBy("normal");
    if (domEl.current) {
      toPng(domEl.current).then(function (dataUrl) {
        download(dataUrl, repo.name + "-repo.png");
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
            <Flex flexDirection="column">
              <Image
                src={user.avatar_url}
                alt={user.login}
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
                {user.login}
              </Text>
              <Text
                fontWeight="600"
                color={mainText}
                textAlign="center"
                fontSize="xl"
              >
                {" "}
                Yay! I contributed to an awesome repository.
              </Text>
            </Flex>
          </Flex>
          <Divider my={4} />

          <Box width="100%">
            <HStack py="6px">
              <Icon as={BsGithub} color="blue.500" />
              <Text fontSize={"lg"} color="muted" fontWeight="semibold">
                {repo?.name}
              </Text>
            </HStack>
            <Flex justifyItems={"flex-end"}>
              <HStack>
                <Icon as={BiStar} color="blue.500" />
                <Text color="muted">{repo.stargazers.totalCount}</Text>
              </HStack>
              <Spacer />
              <HStack spacing="1">
                <Icon as={BiGitRepoForked} color="blue.500" />
                <Text color="muted">{repo?.forkCount}</Text>
              </HStack>
            </Flex>
            <HStack py="6">
              <Text fontSize={"sm"} color="muted">
                {repo.description}
              </Text>
            </HStack>
            <Wrap shouldWrapChildren>
              {repo.repositoryTopics.nodes?.map((n) =>
                n.topic.name.indexOf("hacktober") > -1 ? (
                  <WrapItem key={n.topic.name}>
                    <Tag size={"sm"} variant="outline" colorScheme="blue">
                      <TagLeftIcon as={BsTrophy} />
                      <TagLabel>{n.topic.name}</TagLabel>
                    </Tag>
                  </WrapItem>
                ) : null
              )}
            </Wrap>
          </Box>
          <Text pt="24px" fontSize="lg" textAlign="center" fontWeight="bold">
            #HacktoberFest2022
          </Text>
          <Box alignSelf={"center"} display={"flex"} fontSize="sm" mt={"6"}>
            <Text fontSize="8px" pt={4} color={"gray.400"}>
              made with 💖 by hacktobered.com
            </Text>
          </Box>
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

export default RepoCheerCard;
