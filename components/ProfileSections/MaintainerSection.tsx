import * as React from "react";
import { OwnedReposSection } from "../OwnedRepos/OwnedReposSection";
import { Text } from "@chakra-ui/react";
import { UserCardPropType } from "../../types/UserCardPropType";

const MaintainerSection = (props: UserCardPropType) => {
  return (
    <>
      <Text py="4px" fontWeight={"600"}>
        Welcome Hacker!
      </Text>
      <OwnedReposSection {...props} />
    </>
  );
};

export default MaintainerSection;
