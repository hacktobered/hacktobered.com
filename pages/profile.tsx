import * as React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Stack,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import {
  ContributorSection,
  MaintainerSection,
} from "../components/ProfileSections";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Card } from "../components/common/Card";
import { Footer } from "../components/common/Footer";
import { HacktoberFestSection } from "../components/common/HacktoberFestSection";
import { HalloweenLoading } from "../components/common/HalloweenLoading";
import IamParticipating from "../components/IamParticipating";
import { LoginComponent } from "../components/LoginComponent";
import { NavBar } from "../components/NavBar";
import type { NextPage } from "next";
import { ProfilePullRequestsSection } from "../components/PullRequests/ProfilePullRequestsSection";
import { UserDetails } from "../types/UserDetails";
import { apiWrapper } from "../apiWrapper";
import { PageWrapper } from "../components/PageWrapper";

const Profile: NextPage = () => {
  const { data: session, status } = useSession();
  const [userDetails, setUserDetails] = useState<UserDetails>();
  const [completionStatus, setCompletionStatus] = useState(false);

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
        <PageWrapper>
          <Box as="section" bg="gray.100" pt={6}>
            {userDetails != null ? (
              <>
                <Card>
                  <Stack spacing="16">
                    <Tabs variant="enclosed" size={"md"}>
                      <TabList>
                        <Tab>Home</Tab>
                        <Tab>Pull Reqs</Tab>
                        <Tab>Repositories</Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <FormControl
                            mb={4}
                            display="flex"
                            alignItems="center"
                          >
                            <Switch
                              isChecked={completionStatus}
                              onChange={() =>
                                setCompletionStatus(!completionStatus)
                              }
                              id="completion-status"
                            />
                            <FormLabel
                              ml={2}
                              mb={0}
                              htmlFor="completion-status"
                            >
                              Completed #Hacktober
                            </FormLabel>
                          </FormControl>
                          <IamParticipating
                            completionStatus={completionStatus}
                            user={userDetails}
                          />
                          <ProfilePullRequestsSection user={userDetails} />
                          <HacktoberFestSection />
                        </TabPanel>
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
        </PageWrapper>
      </>
    );
  } else {
    return <LoginComponent />;
  }
};

export default Profile;
