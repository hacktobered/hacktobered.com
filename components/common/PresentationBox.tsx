import {
  Box,
  Button,
  Heading,
  Img,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import NextLink from "next/link";
import React from "react";

const PresentationBox = () => {
  const sections = {
    1: {
      title: "Get proud!",
      description:
        "Now you can share your achievements with others via Instagram stories, Whatsapp status or Twitter. Don't do it manualy.",
    },
    2: {
      title: "Why should you use it?",
      description:
        "You can easily share your PR's and show them to the world just in few steps.",
    },
    3: {
      title: "How it works?",
      description:
        "So EASY! Sign in via your GitHub and see overview or share your PR's.",
    },
  };

  return (
    <Box>
      {/* IMG section */}
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Img
          textAlign={"center"}
          w={{ lg: "30%", md: "60%", sm: "50%" }}
          pos="relative"
          zIndex="1"
          h={{ lg: "100%" }}
          objectFit="cover"
          src="hcktbrd.png"
          alt="Hacktobered hero image"
        />
      </Box>
      {/* TEXT 1 section */}
      <Box
        flex={1}
        style={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Heading
          as="h1"
          size="xl"
          color={mode("blue.600", "blue.300")}
          mt="8"
          fontWeight="extrabold"
          letterSpacing="tight"
        >
          {sections[1].title}
        </Heading>
        <Text
          w={{ lg: "50%" }}
          color={mode("gray.600", "gray.400")}
          mt="4"
          fontSize="lg"
          fontWeight="medium"
          textAlign={"end"}
        >
          {sections[1].description}
        </Text>
      </Box>
      {/* TEXT 2 section */}
      <Box>
        <Heading
          as="h1"
          size="xl"
          color={mode("blue.600", "blue.300")}
          mt="8"
          fontWeight="extrabold"
          letterSpacing="tight"
        >
          {sections[2].title}
        </Heading>
        <Text
          w={{ lg: "50%" }}
          color={mode("gray.600", "gray.400")}
          mt="4"
          fontSize="lg"
          fontWeight="medium"
        >
          {sections[2].description}
        </Text>
      </Box>
      {/* TEXT 3 section */}
      <Box
        flex={1}
        style={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Heading
          as="h1"
          size="xl"
          color={mode("blue.600", "blue.300")}
          mt="8"
          fontWeight="extrabold"
          letterSpacing="tight"
        >
          {sections[3].title}
        </Heading>
        <Text
          w={{ lg: "50%" }}
          color={mode("gray.600", "gray.400")}
          mt="4"
          fontSize="lg"
          fontWeight="medium"
          textAlign={"end"}
        >
          {sections[3].description}
        </Text>
      </Box>
      {/* Button section */}
      <Box
        mt={20}
        style={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <NextLink href="/profile" passHref>
          <Button
            variant="ghost"
            as="a"
            rightIcon={<BsArrowRightCircleFill fontWeight={"bold"} />}
            size="lg"
            minW="210px"
            colorScheme="blue"
            height="14"
            px="8"
            fontSize={32}
          >
            Try it!
          </Button>
        </NextLink>
      </Box>
    </Box>
  );
};

export default PresentationBox;
