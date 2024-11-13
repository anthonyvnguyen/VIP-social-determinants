import React from "react";
import { Box, Flex, HStack, Link } from "@chakra-ui/react";

const Links = ["Home", "Assess Your Risk", "Map"];

const NavLink = ({ children }: { children: React.ReactNode }) => (
  <Link
    rounded="md"
    px={4}
    mx={8}
    py={1}
    _hover={{
      textDecoration: "none",
      backgroundColor: "brand.200",
    }}
    href={`/${children?.toString().toLowerCase()}`}
    color="White"
  >
    {children}
  </Link>
);

const Navbar = () => {
  return (
    <Box bg="brand.100" width="100%" color="white" height={16}>
      <Flex alignItems="center" justifyContent="center" h="100%">
        <HStack as="nav">
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
