import * as React from "react";
import { OwnedReposSection } from "../OwnedRepos/OwnedReposSection";
import { UserCardPropType } from "../../types/UserCardPropType";

const MaintainerSection = (props: UserCardPropType) => {
  return (
    <>
      <OwnedReposSection {...props} />
    </>
  );
};

export default MaintainerSection;
