import * as React from "react";
import {
  Badge,
  Center,
  Flex,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Spacer,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { BsGithub, BsTrophy } from "react-icons/bs";
import { Repository } from "../../types/OwnedRepoResults";
import { TransformedText } from "./TransformedText";

const Repo = (props: Repository) => {
  const repo = props;
  return (
    <Center width="100%">
      <Stack fontSize={60} px={20}>
        <HStack py="12px">
          <Badge
            alignSelf="start"
            textTransform="none"
            fontSize="40"
            fontWeight="semibold"
            borderRadius="base"
            py="1"
            px="2"
            colorScheme={"red"}
          >
            I Contributed 🤓🤓🤓
          </Badge>
        </HStack>
        <HStack py="6px" fontSize={60} color="green">
          <Icon as={BsGithub} />
          <Text fontWeight="semibold">{repo.name}</Text>
        </HStack>
        <HStack py="6px" fontSize={60} color="blue.500">
          <Text fontWeight="semibold">{repo.description}</Text>
        </HStack>

        <Flex justifyItems={"flex-end"} pb={"90px"}>
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

        <Wrap shouldWrapChildren>
          {repo.repositoryTopics.nodes?.map((n) =>
            n.topic.name.indexOf("hacktober") > -1 ? (
              <WrapItem key={n.topic.name}>
                <Tag
                  size={"sm"}
                  key={n.topic.name}
                  variant="subtle"
                  colorScheme="blue"
                  fontSize={40}
                >
                  <TagLeftIcon as={BsTrophy} />
                  <TagLabel>{n.topic.name}</TagLabel>
                </Tag>
              </WrapItem>
            ) : null
          )}
        </Wrap>
      </Stack>
    </Center>
  );
};

export default Repo;
