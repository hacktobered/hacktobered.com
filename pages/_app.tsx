import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <>
      <Head>
        <title key="title">#Hacktobered 2022!</title>
        <meta
          name="description"
          key="description"
          content="Share your hacktoberfest 2022 progress and achievements"
        />
        <meta property="og:title" key="og:title" content="#Hacktobered 2022!" />
        <meta
          property="og:description"
          key="og:description"
          content="Share your hacktoberfest 2022 progress and achievements with everyone!"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://www.hacktobered.com/"
        />
        <meta property="og:image" key="og:image" content="/hacktobered.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
