import * as React from "react";
import {
  Box,
  BoxProps,
  Icon,
  Text
} from "@chakra-ui/react";
import { FaTrophy } from "react-icons/fa"

export const NoPullRequestCard = (props: BoxProps) => {
  return (
    <Box p={"2.5"} 
      bg={"blue.500"} 
      color={"white"} 
      rounded={"4px"} 
      fontSize={"lg"} 
      mt="5" 
      w={"205px"}
      >
      <Icon as={FaTrophy} mr="5" display={"inline-block"}></Icon>
      I am participating.
    </Box>
  );
};
