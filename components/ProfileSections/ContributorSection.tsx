import * as React from "react";
import { PullRequestsSection } from "./../PullRequests/PullRequestsSection";
import { Text } from "@chakra-ui/react";
import { UserCardPropType } from "../../types/UserCardPropType";

const ContributorSection = (props: UserCardPropType) => {
  return (
    <>
      <Text py="4px" fontWeight={"600"}>
        Welcome {props.user.login}
      </Text>
      <PullRequestsSection {...props} />
    </>
  );
};

export default ContributorSection;
