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
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { UserDetails } from "../../types/UserDetails";
import UserInfo from "./UserSummary";

const UserIntro = (props: UserDetails) => {
  const user = props;

  return (
    <Center width="100%" pt={"320px"} mx="auto">
      <Stack align={"center"}>
        <Avatar size="4xl" src={user.avatar_url}></Avatar>
        <HStack py="6px" fontSize={60} color="black">
          <Icon as={BsGithub} />
          <Text fontWeight="semibold">{user.login}</Text>
        </HStack>
        <HStack py="24px" fontSize={100} color="blue.500">
          <Text fontWeight="semibold">#HacktoberFest2022</Text>
        </HStack>
      </Stack>
    </Center>
  );
};

export default UserIntro;
