import * as React from "react";
import { Text } from "@chakra-ui/react";
import { UserCardPropType } from "../../types/UserCardPropType";

const CommunitySection = (props: UserCardPropType) => {
  return (
    <>
      <Text py="4px" fontWeight={"600"}>
        Welcome Hacker! We are still working on this
      </Text>
    </>
  );
};

export default CommunitySection;
