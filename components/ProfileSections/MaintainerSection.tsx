import * as React from "react";
import { OwnedReposSection } from "../OwnedReposSection";
import { Text } from "@chakra-ui/react";
import { UserCardPropType } from "../../types/UserCardPropType";

const MaintainerSection = (props: UserCardPropType) => {
  return (
    <>
      <Text py="4px" fontWeight={"600"}>
        Welcome Hacker! We are still working on this
      </Text>
      <OwnedReposSection {...props} />
    </>
  );
};

export default MaintainerSection;
