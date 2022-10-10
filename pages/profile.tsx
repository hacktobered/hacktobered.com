import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { LoginComponent } from "../components/LoginComponent";
import { NavBar } from "../components/NavBar";
import type { NextPage } from "next";
import { PullRequestsSection } from "../components/PullRequestsSection";
import { UserCard } from "../components/UserCard";
import { UserDetails } from "../types/UserDetails";
import { apiWrapper } from "../apiWrapper";

const Profile: NextPage = () => {
  const { data: session, status } = useSession();
  const [userDetails, setUserDetails] = useState<UserDetails>();

  async function fetchData(accessToken: any) {
    const userData = await apiWrapper.fetchUserDetails(accessToken);
    setUserDetails({
      ...userData,
    });
  }

  useEffect(() => {
    if (session) {
      fetchData(session.accessToken);
    }
  }, [session]);

  if (session) {
    return (
      <>
        <NavBar />
        <Box as="section" bg="gray.100" py="6">
          {userDetails != null ? (
            <>
              <UserCard user={userDetails} />
              <Card mt={6}>
                <PullRequestsSection user={userDetails} />
              </Card>
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </Box>
      </>
    );
  } else {
    return <LoginComponent />;
  }
};

export default Profile;
