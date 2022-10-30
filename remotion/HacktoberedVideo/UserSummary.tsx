import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiGitPullRequest, BiGitRepoForked, BiStar } from "react-icons/bi";
import { BsGithub, BsTrophy } from "react-icons/bs";
import { TransformedText } from "./TransformedText";
import { UserDetails } from "../../types/UserDetails";

type UserSummaryProps = {
  user: UserDetails;
  repos: number;
  pr: number;
};

const UserSummary = (props: UserSummaryProps) => {
  const { user, repos, pr } = props;

  return (
    <Center width="100%">
      <Stack align={"center"}>
        <Avatar size={"2xl"} src={user.avatar_url} />
        <HStack py="6px" fontSize={40} color="black">
          <Icon as={BsGithub} />
          <Text fontWeight="semibold">{user.login}</Text>
        </HStack>
        <HStack py="24px" fontSize={80} color="blue.500">
          <Text fontWeight="semibold">I completed #Hacktober Challenge.</Text>
        </HStack>
        <HStack py="24px" fontSize={60} color="blue.500">
          <Text fontWeight="semibold">
            {pr} Contributions into {repos} Open Source Repositories
          </Text>
        </HStack>
      </Stack>
    </Center>
  );
};

export default UserSummary;
