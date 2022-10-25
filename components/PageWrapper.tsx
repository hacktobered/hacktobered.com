import * as React from "react";
import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import { Footer } from "./common/Footer";
import { NavBar } from "./NavBar";

export const PageWrapper = (props: BoxProps) => (
  <Box minH="100vh" bg="gray.100">
    <NavBar />
    <Box {...props}></Box>
    <Footer />
  </Box>
);
