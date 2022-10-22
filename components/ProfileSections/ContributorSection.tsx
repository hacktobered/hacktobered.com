import * as React from "react";
import { PullRequestsSection } from "./../PullRequests/PullRequestsSection";
import { UserCardPropType } from "../../types/UserCardPropType";

const ContributorSection = (props: UserCardPropType) => {
  return (
    <>
      <PullRequestsSection {...props} />
    </>
  );
};

export default ContributorSection;
