import { useRef } from "react";
import { Link } from "react-router-dom";
import { SiBookstack } from "react-icons/si";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Box, Flex, Stack, useDisclosure, Text, Spacer, IconButton, color
} from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/react";
import NavMenu from "./NavMenu";
import MobileDrawer from "./MobileDrawer";

export const Navbar = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box px="5%" py={5}>
      <Flex h={16} align='center'>
        <Link to='/home'>
          <Stack alignItems={'center'}>
            <SiBookstack size={40} />
            <Text fontSize='xl' fontWeight='700' >Booklog</Text>
          </Stack>
        </Link>
        <Spacer />
        <Box display={{ base: "none", lg: "block" }}>
          <NavMenu />
        </Box>

        {/* Burger Menu Icon */}
        <IconButton size={'md'} variant={'outline'} ref={btnRef}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={'Open Menu'}
          display={{ lg: 'none' }} onClick={isOpen ? onClose : onOpen}
        />
        <MobileDrawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef} colorMode={colorMode} />
      </Flex >
    </Box>
  );
};
