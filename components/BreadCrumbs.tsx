import * as React from "react";
import {
  Box,
  BoxProps,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";

export const BreadCrumbs = (props: BoxProps) => (
  <Box as="section" py="6">
    <Breadcrumb spacing="8px" separator={<BiChevronRight color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">
          <AiFillHome></AiFillHome>
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="/profile">Profile</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Share</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </Box>
);
