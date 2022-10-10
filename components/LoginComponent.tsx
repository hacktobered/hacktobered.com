/* eslint-disable @next/next/no-img-element */
import { signIn, signOut, useSession } from "next-auth/react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Button } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import type { NextPage } from "next";

import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export const LoginComponent = () => {
  let router = useRouter();
  const { data: session } = useSession();
  if (session) {
    router.push("/profile");
  }
  return (
    <>
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
          <h1 className={styles.title}>Start here</h1>

          <Button
            as="a"
            mt={20}
            leftIcon={<BsArrowRightCircleFill fontWeight={"bold"} />}
            colorScheme="teal"
            variant="solid"
            fontSize={"18px"}
            onClick={() => signIn()}
          >
            Sign Up
          </Button>
        </main>
      </div>
      <button>Sign in</button>
    </>
  );
};
