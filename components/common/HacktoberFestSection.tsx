import * as React from "react";
import {
  Heading,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export const HacktoberFestSection = () => {
  return (
    <Stack py={4} spacing={6}>
      <Text>
        There are many levels of contributions (beginner, medium, hard), and
        everybody can contribute!
      </Text>
      <Text>
        Here are some beginner-friendly links that can help kick off your{" "}
        <Link color="blue" target={"_blank"} href="https://hacktoberfest.com/">
          Hacktoberfest
        </Link>{" "}
        journey.
      </Text>
      <UnorderedList pl={6}>
        <ListItem>
          <Link
            color="blue"
            target={"_blank"}
            href="https://hacktoberfest.com/"
          >
            Official Hacktoberfest page
          </Link>
        </ListItem>
        <ListItem>
          <Link
            color="blue"
            target={"_blank"}
            href="https://dev.to/github/how-to-get-ready-for-hacktoberfest-2022-2ck2"
          >
            How to get ready for Hacktoberfest 2022
          </Link>
        </ListItem>
        <ListItem>
          <Link
            color="blue"
            target={"_blank"}
            href="https://www.freecodecamp.org/news/how-anyone-can-participate-in-hacktoberfest/"
          >
            How to Participate in Hacktoberfest – Even if You Don&apos;t Write
            Code
          </Link>
        </ListItem>
      </UnorderedList>
    </Stack>
  );
};
