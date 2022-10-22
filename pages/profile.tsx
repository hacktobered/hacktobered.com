import * as React from "react";
import {
  Box,
  Center,
  HStack,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import {
  CommunitySection,
  ContributorSection,
  MaintainerSection,
} from "../components/ProfileSections";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Card } from "../components/common/Card";
import { Footer } from "../components/common/Footer";
import { HalloweenLoading } from "../components/common/HalloweenLoading";
import { LoginComponent } from "../components/LoginComponent";
import { NavBar } from "../components/NavBar";
import type { NextPage } from "next";
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
                <Stack spacing="16">
                  <Tabs variant="enclosed" size={"md"}>
                    <TabList>
                      <Tab>Pull Reqs</Tab>
                      <Tab>Repositories</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <ContributorSection user={userDetails} />
                      </TabPanel>
                      <TabPanel>
                        <MaintainerSection user={userDetails} />
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </Stack>
              </Card>
            </>
          ) : (
            <HalloweenLoading />
          )}
        </Box>

        <Footer />
      </>
    );
  } else {
    return <LoginComponent />;
  }
};

export default Profile;
