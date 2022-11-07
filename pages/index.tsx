import {
  Box,
  Button,
  Heading,
  Img,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Footer } from "../components/common/Footer";
import Head from "next/head";
import { HiPlay } from "react-icons/hi";
import Image from "next/image";
import NextLink from "next/link";
import type { NextPage } from "next";
import PresentationBox from "../components/common/PresentationBox";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(/card-background.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundAttachment: "fixed",
      }}
    >
      <Head>
        <title>Hacktobered!</title>
        <meta
          name="description"
          content="For developers who participated in HacktoberFest 2022"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Box as="section" pt="16" pb="24">
          <Box
            maxW={{ base: "xl", md: "7xl" }}
            mx="auto"
            px={{ base: "6", md: "8" }}
          >
            <Stack
              direction={{ base: "column", lg: "row" }}
              spacing={{ base: "3rem", lg: "2rem" }}
              mt="8"
              align={{ lg: "center" }}
              justify="space-between"
            >
              <Box flex="1" maxW={{ lg: "520px" }}>
                <Text
                  size="xs"
                  textTransform="uppercase"
                  fontWeight="semibold"
                  color={mode("blue.600", "blue.300")}
                  letterSpacing="wide"
                >
                  #HacktoberFest2022
                </Text>
                <Heading
                  as="h1"
                  size="xl"
                  color={mode("blue.600", "blue.300")}
                  mt="8"
                  fontWeight="extrabold"
                  letterSpacing="tight"
                >
                  Participating in HacktoberFest this year?
                </Heading>

                <Text
                  color={mode("gray.600", "gray.400")}
                  mt="4"
                  fontSize="lg"
                  fontWeight="medium"
                >
                  Have you already merged a PR? Or yet to kick-off your
                  open-source journey?
                </Text>
                <Text
                  color={mode("gray.600", "gray.400")}
                  mt="4"
                  fontSize="lg"
                  fontWeight="medium"
                >
                  it&apos;s time to show off to the world!
                </Text>
                <Stack
                  direction={{ base: "column", md: "row" }}
                  spacing="4"
                  mt="8"
                >
                  <NextLink href="/profile" passHref>
                    <Button
                      as="a"
                      rightIcon={<BsArrowRightCircleFill fontWeight={"bold"} />}
                      size="lg"
                      minW="210px"
                      colorScheme="blue"
                      height="14"
                      px="8"
                    >
                      Start Now
                    </Button>
                  </NextLink>
                </Stack>
              </Box>
              <Box
                pos="relative"
                w={{ base: "full", lg: "560px" }}
                h={{ base: "auto", lg: "560px" }}
              >
                <Img
                  w="full"
                  pos="relative"
                  zIndex="1"
                  h={{ lg: "100%" }}
                  objectFit="cover"
                  src="herov2.png"
                  alt="Hacktobered hero image"
                />
                <Box pos="absolute" w="100%" h="100%" top="-4" left="-4" />
              </Box>
            </Stack>
            <PresentationBox />
          </Box>
        </Box>

        <Footer />
      </main>
    </div>
  );
};

export default Home;
