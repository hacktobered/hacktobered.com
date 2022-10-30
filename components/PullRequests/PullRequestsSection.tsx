import * as React from "react";
import { Box, Divider, SimpleGrid, Text } from "@chakra-ui/react";
import PRCheerCard from "./PRCheerCard";
import { SearchResults } from "../../types/SearchResults";

export const PullRequestsSection = (props: SearchResults) => {
  const searchData = props;
  return (
    <>
      {!!searchData?.issueCount && (
        <>
          <Divider py={4} />
          <Text mt={8} fontWeight={"400"}>
            🎉🎉🎉 {searchData?.issueCount} public Pull Requests found
          </Text>
        </>
      )}

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="8">
        {searchData?.edges &&
          searchData?.edges.map((pullRequest) => (
            <Box
              key={pullRequest.node.number}
              maxW="4xl"
              bg={"white"}
              {...props}
              mt={8}
            >
              <PRCheerCard {...pullRequest.node} />
            </Box>
          ))}
      </SimpleGrid>
    </>
  );
};
