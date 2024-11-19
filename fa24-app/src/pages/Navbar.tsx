import React from "react";
import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import { Button } from "../components/ui/button";

const Links = ["Home", "Assess Your Risk", "Map"];

interface NavbarProps {
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setPage }) => {
  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      rounded="md"
      px={4}
      mx={8}
      py={1}
      _hover={{
        textDecoration: "none",
        backgroundColor: "brand.200",
      }}
      href={`/${href}`}
      color="White"
      onClick={() => setPage(href)}
    >
      {href}
    </Link>
  );
  return (
    <Box bg="brand.100" width="100%" color="white" height={16}>
      <Flex alignItems="center" justifyContent="center" h="100%">
        <HStack as="nav">
          {Links.map((link) => ( 
            <Button onClick={() => setPage(link)}>{link}</Button>
          ))}
          {/*{Links.map((link) => (
            <NavLink href={link}>{link}</NavLink>
          ))} */}
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
