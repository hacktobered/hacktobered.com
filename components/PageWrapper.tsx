import * as React from "react";
import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import { NavBar } from "./NavBar";

export const PageWrapper = (props: BoxProps) => (
  <Box minH="100vh" bg="gray.100">
    <NavBar />
    <Box maxW="7xl" mx="auto" px={{ base: "6", lg: "8" }} {...props}></Box>
  </Box>
);
