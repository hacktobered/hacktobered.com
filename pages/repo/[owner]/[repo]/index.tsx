import * as React from "react";
import {
  BasicCard,
  CheerCard,
} from "../../../../components/PullRequests/PullRequestDetailCards";
import { BiChevronRight, BiGitPullRequest } from "react-icons/bi";
import { Box, Container, Divider, Text } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { BreadCrumbs } from "../../../../components/BreadCrumbs";
import { Card } from "../../../../components/common/Card";
import { Contributor } from "../../../../types/Contributor";
import { default as ContributorsCard } from "../../../../components/ContributorsCard";
import { LoginComponent } from "../../../../components/LoginComponent";
import { NavBar } from "../../../../components/NavBar";
import type { NextPage } from "next";
import { PageWrapper } from "../../../../components/PageWrapper";
import { PullRequest } from "../../../../types/PullRequest";
import { apiWrapper } from "../../../../apiWrapper";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { owner, repo } = router.query;
  const [pullRequests, setPullRequests] = useState<PullRequest[]>();
  const [repoContributors, setRepoContributors] = useState<Contributor[]>();

  async function fetchData(accessToken: any) {
    const pullRequestsData = await apiWrapper.fetchRepoPullRequests(
      accessToken,
      typeof owner === "string" ? owner : "",
      typeof repo === "string" ? repo : ""
    );
    setPullRequests(pullRequestsData);
  }

  async function fetchContributors(accessToken: any) {
    const contributors = await apiWrapper.fetchRepoContributors(
      accessToken,
      typeof owner === "string" ? owner : "",
      typeof repo === "string" ? repo : ""
    );
    setRepoContributors(contributors);
  }

  useEffect(() => {
    if (session) {
      fetchData(session.accessToken);
      fetchContributors(session.accessToken);
    }
  }, [session]);

  if (session) {
    return (
      <>
        <PageWrapper bgColor={"white"}>
          <BreadCrumbs />
          <Box minH="80vh" as="section" py="6">
            {repoContributors && pullRequests && (
              <ContributorsCard
                contributors={repoContributors}
                pullRequests={pullRequests}
              />
            )}
            <Divider py={4} />
            {pullRequests && pullRequests.length ? (
              <Text py="4" fontWeight={"600"}>
                {pullRequests?.length} Pull Requests found
              </Text>
            ) : (
              <Text align={"center"} py="4" fontWeight={"600"}>
                No Pull Requests found for this repo
              </Text>
            )}
            {pullRequests != null ? (
              pullRequests.map((pullRequest) => (
                <>
                  <Card key={pullRequest.number} py={4} my={4}>
                    <BasicCard key={pullRequest.number} {...pullRequest} />
                  </Card>
                  <Divider />
                </>
              ))
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
