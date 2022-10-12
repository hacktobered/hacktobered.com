import * as React from "react";
import {
  BasicCard,
  CheerCard,
} from "../../../../components/PullRequests/PullRequestDetailCards";
import { BiChevronRight, BiGitPullRequest } from "react-icons/bi";
import { Box, Container, Text } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { BreadCrumbs } from "../../../../components/BreadCrumbs";
import { Card } from "../../../../components/common/Card";
import { LoginComponent } from "../../../../components/LoginComponent";
import { NavBar } from "../../../../components/NavBar";
import type { NextPage } from "next";
import { PageWrapper } from "../../../../components/PageWrapper";
import { PullRequest } from "../../../../types/PREntry";

import { UserCard } from "../../../../components/UserCard";
import { UserDetails } from "../../../../types/UserDetails";
import { apiWrapper } from "../../../../apiWrapper";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { owner, repo } = router.query;
  const [pullRequest, setPullRequest] = useState<PullRequest>();

  if (session) {
    return (
      <>
        <PageWrapper bgColor={"white"}>
          <BreadCrumbs />
          <Box minH="80vh" as="section" py="6">
            Coming soon!
          </Box>
        </PageWrapper>
      </>
    );
  } else {
    return <LoginComponent />;
  }
};

export default Home;
