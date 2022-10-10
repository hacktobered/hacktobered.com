import { BsArrowRightCircleFill } from "react-icons/bs";
import { Button } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hacktobered!</title>
        <meta
          name="description"
          content="For developers who participated in HacktoberFest"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Coming soon 🚀🚀🚀</h1>
        <NextLink href="/profile" passHref>
          <Button
            as="a"
            mt={20}
            rightIcon={<BsArrowRightCircleFill fontWeight={"bold"} />}
            colorScheme="teal"
            variant="solid"
            fontSize={"18px"}
          >
            Try Beta
          </Button>
        </NextLink>
      </main>
    </div>
  );
};

export default Home;
