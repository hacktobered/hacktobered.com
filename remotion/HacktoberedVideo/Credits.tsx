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
import { BsGithub } from "react-icons/bs";
import { TransformedText } from "./TransformedText";
import { UserDetails } from "../../types/UserDetails";

const Credits = () => {
  return (
    <Center width="100%">
      <Stack align={"center"}>
        <TransformedText
          titleText={"Made with 💖 by hacktobered.com"}
          titleColor={"red"}
          fontSize={60}
          fontWeight="bold"
        />
        <HStack py="6px" fontSize={60} color="blue.500">
          <Icon as={BsGithub} />
          <Text fontWeight="semibold">hacktobered.com</Text>
        </HStack>
      </Stack>
    </Center>
  );
};

export default Credits;
