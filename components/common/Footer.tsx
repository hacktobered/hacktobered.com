import { Box, Center, HStack, IconButton, Text } from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  return (
    <Box>
      <Center py={{ base: "8", md: "12" }}>
        <IconButton
          variant={"link"}
          as="a"
          color="white"
          target={"_blank"}
          href="https://github.com/hacktobered/hacktobered.com"
          aria-label="Github"
          icon={<FaGithub fontSize="20px" />}
        />
        <IconButton
          variant={"link"}
          as="a"
          target={"_blank"}
          href="https://twitter.com/hacktobered"
          aria-label="Twitter"
          ml={5}
          color="white"
          icon={<FaTwitter fontSize="20px" />}
        />
      </Center>
    </Box>
  );
};
