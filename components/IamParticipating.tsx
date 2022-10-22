import * as React from "react";
import {
  Avatar,
  Box,
  Button,
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
import { MdIosShare } from "react-icons/md";
import { UserCardPropType } from "../types/UserCardPropType";
import download from "downloadjs";
import { toPng } from "html-to-image";
import { useRef } from "react";

const IamParticipating = ({ user }: UserCardPropType) => {
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
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
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
              height="24"
              bg="blue.600"
              roundedTop="inherit"
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

              <Text fontSize="md" textAlign="center" pt={8} color={"gray.600"}>
                I am participating in
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
                Powered by Hacktobered.com
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
        </SimpleGrid>
      </Box>
    </Stack>
  );
};

export default IamParticipating;
