import React from "react";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Icon,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Portal,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Profile } from "./Profile";
import { BsCart3 } from "react-icons/bs";
import { CartCounter } from "./CartCounter";
import { Link as RouterLink } from "react-router-dom";

const Links = ["Dashboard", "Projects", "Team"];

//   const NavLink = ({ children }: { children: ReactNode }) => (
//     <Link
//       px={2}
//       py={1}
//       rounded={'md'}
//       _hover={{
//         textDecoration: 'none',
//         bg: useColorModeValue('gray.200', 'gray.700'),
//       }}
//       href={'#'}>
//       {children}
//     </Link>
//   );

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo Soumya</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {/* {Links.map((link) => (
                // <NavLink key={link}>{link}</NavLink>
              ))} */}
            </HStack>
          </HStack>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Link as={RouterLink} to="/cart">
              <Box position="relative" padding="0 0.5rem 0 0">
                <CartCounter />
                <Icon as={BsCart3} boxSize="2rem" />
              </Box>
            </Link>
            <Link as={RouterLink} to="/products">
              <Box>Products</Box>
            </Link>
              <Profile />
          </Stack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {/* {Links.map((link) => (
                // <NavLink key={link}>{link}</NavLink> 
              ))} */}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
};
