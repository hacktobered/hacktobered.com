import { Center, HStack } from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  return (
    <Center height={300} w="100%" bg="teal" gap={5}>
      <Link href="https://github.com/hacktobered/hacktobered.com">
        <FaGithub color="white" size={30} />
      </Link>
      <Link href="https://twitter.com/hacktobered">
        <FaTwitter color="white" size={30} />
      </Link>
    </Center>
  );
};
