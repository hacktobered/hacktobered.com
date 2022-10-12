import * as React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  VisuallyHidden,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image'
import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { NavLink } from "./NavLink";
import Hacktober from '../../public/Hacktobered.png'
import Nav from '../../styles/NavBar.module.css';
export const NavBar = () => {
  const { data: session, status } = useSession();
  return (
    <Box>
      <Box as="header" bg={mode("white", "gray.800")} borderBottomWidth="1px">
        <Box maxW="7xl" mx="auto" py="4" px={{ base: "6", md: "8" }}>
          <Flex as="nav" justify="space-between">
            <HStack spacing="8">
              <Box as="a" href="#" rel="home">
                <Link passHref href="/">
                  <Image 
                  className={Nav.lo}
                  src={Hacktober}
                  width="74vw"
                  height="65vw"
                  />
                </Link>
              </Box>
            </HStack>
            <Flex align="center">
              <HStack spacing="8" display={{ base: "none", md: "flex" }}>
                {session !== null ? (
                  <Button
                    colorScheme="blue"
                    rounded="full"
                    onClick={() => signOut()}
                  >
                    Sign Out
                  </Button>
                ) : (
                  <Button
                    colorScheme="blue"
                    rounded="full"
                    onClick={() => signIn()}
                  >
                    Sign In
                  </Button>
                )}
              </HStack>
              <Box ml="5">
                <MobileNav />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
