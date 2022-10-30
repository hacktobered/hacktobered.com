import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { MdIosShare } from "react-icons/md";
import { UserDetails } from "../types/UserDetails";
import download from "downloadjs";
import { toPng } from "html-to-image";
import { useRef } from "react";

type HacktoberedCardType = {
  user: UserDetails;
  prCount: number;
};

const HacktoberedCard = (props: HacktoberedCardType) => {
  const { prCount, user } = props;
  const [poweredBy, setPoweredBy] = React.useState("none");
  const domEl = useRef<HTMLDivElement>(null);

  const downloadPNG = () => {
    setPoweredBy("normal");
    if (domEl.current) {
      toPng(domEl.current).then(function (dataUrl) {
        download(dataUrl, "I-am-participating.png");
        setPoweredBy("none");
      });
    }
  };

  return (
    <Stack fontSize="sm" spacing="4" backgroundColor="white">
      <Box as="section" maxW={{ base: "xs", md: "3xl" }} mx="auto">
        <VStack
          p={5}
          borderColor={"gray.100"}
          borderWidth="1px"
          mx={"auto"}
          alignItems={"center"}
        >
          <Flex
            id="domEl"
            ref={domEl}
            direction="column"
            alignItems="center"
            rounded="md"
            padding="12"
            position="relative"
            bg={useColorModeValue("white", "gray.700")}
            shadow={{ md: "base" }}
          >
            <Box
              position="absolute"
              inset="0"
              bg="blue.600"
              roundedTop="inherit"
              h={8}
            />
            <Avatar size="2xl" src={user.avatar_url}></Avatar>
            <VStack spacing="1" flex="1">
              <HStack fontSize="sm">
                <Text as="span" fontWeight={"600"} color={"gray.500"}>
                  {user.name}
                </Text>
              </HStack>
              {user.login && (
                <HStack fontSize="sm">
                  <Icon as={BsGithub} color="blue.500" />
                  <Link href={user.html_url} target="_blank">
                    <Text as="span" color={"gray.500"}>
                      {user.login}
                    </Text>
                  </Link>
                </HStack>
              )}

              <Text fontSize="md" textAlign="center" pt={6} color={"gray.600"}>
                {prCount >= 4
                  ? "I completed the challenge"
                  : "I participated in"}
              </Text>
              <Text fontSize="xl" textAlign="center" fontWeight="bold">
                #HacktoberFest2022
              </Text>
              <Text
                display={poweredBy}
                fontSize="8px"
                pt={4}
                color={"gray.400"}
                style={{ bottom: 0, position: "absolute" }}
              >
                made with 💖 by hacktobered.com
              </Text>
            </VStack>
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
    </Stack>
  );
};

export default HacktoberedCard;
