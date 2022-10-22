import { Center, Icon, Text } from "@chakra-ui/react";
import { BiGhost } from "react-icons/bi";
import { GiPumpkinLantern } from "react-icons/gi";
import Link from "next/link";

export const HalloweenLoading = () => {
  return (
    <Center
      justifyItems={"center"}
      color="tomato"
      py={20}
      fontSize={"lg"}
      fontWeight="bold"
    >
      <Icon as={BiGhost} w={6} h={6} />
      <Icon ml={2} as={GiPumpkinLantern} w={6} h={6} />
      <Text ml={2}>Loading...</Text>
    </Center>
  );
};
