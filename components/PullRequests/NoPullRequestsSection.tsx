import * as React from "react";
import {
  Heading,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export const NoPullRequestsSection = () => {
  return (
    <Stack spacing={6}>
      <Heading as="h5" size="md">
        No PRs yet! But its never late for some coffee and code!
      </Heading>
      <Text as="em" fontSize="14px">
        Note: keep in mind that there are many levels of contribution (beginner,
        medium, hard) so everybody is able to contribute
      </Text>
      <Text>
        To contribute for open-source projects through the{" "}
        <Link color="blue" target={"_blank"} href="https://hacktoberfest.com/">
          Hacktoberfest
        </Link>{" "}
        all you have to do is access some of the links provided below.
      </Text>
      <UnorderedList pl={6}>
        <ListItem>
          <Link href="https://hacktoberfest.com/">
            Oficial Hacktoberfest page
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://dev.to/github/how-to-get-ready-for-hacktoberfest-2022-2ck2">
            How to get ready for Hacktoberfest 2022
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.freecodecamp.org/news/how-anyone-can-participate-in-hacktoberfest/">
            How to Participate in Hacktoberfest – Even if You Don&apos;t Write
            Code
          </Link>
        </ListItem>
      </UnorderedList>
    </Stack>
  );
};
