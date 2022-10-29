import * as React from "react";
import {
  BasicCard,
  CheerCard,
} from "../../../../../components/PullRequests/PullRequestDetailCards";
import { BiChevronRight, BiGitPullRequest } from "react-icons/bi";
import { Box, Container, Text } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { BreadCrumbs } from "../../../../../components/BreadCrumbs";
import { Card } from "../../../../../components/common/Card";
import { LoginComponent } from "../../../../../components/LoginComponent";
import { NavBar } from "../../../../../components/NavBar";
import type { NextPage } from "next";
import { PageWrapper } from "../../../../../components/PageWrapper";
import { PullRequest } from "../../../../../types/PullRequest";
import { UserDetails } from "../../../../../types/UserDetails";
import { apiWrapper } from "../../../../../apiWrapper";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { owner, repo, number } = router.query;
  const [pullRequest, setPullRequest] = useState<PullRequest>();

  async function fetchData(accessToken: any) {
    const pullRequestData = await apiWrapper.fetchPullRequestDetails(
      accessToken,
      typeof owner === "string" ? owner : "",
      typeof repo === "string" ? repo : "",
      typeof number === "string" ? number : ""
    );
    setPullRequest(pullRequestData);
  }

  useEffect(() => {
    if (session) {
      fetchData(session.accessToken);
    }
  }, [session]);

  if (session) {
    return (
      <>
        <PageWrapper>
          <BreadCrumbs />
          <Box as="section">
            {pullRequest != null ? (
              <>
                <Card mt={6}>
                  <BasicCard key={pullRequest.number} {...pullRequest} />
                </Card>
                <Card mt={6}>
                  <CheerCard key={pullRequest.number} {...pullRequest} />
                </Card>
              </>
            ) : (
              <h1>Loading...</h1>
            )}
          </Box>
        </PageWrapper>
      </>
    );
  } else {
    return <LoginComponent />;
  }
};

export default Home;
