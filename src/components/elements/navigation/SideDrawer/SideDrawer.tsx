import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  IconButton,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { NavItem } from '../NavItem';
import NAV_LINKS from './paths';
import React from 'react';

const SideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // eslint-disable-next-line no-undef
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Menu>
        <MenuButton
          ref={btnRef}
          as={IconButton}
          icon={<HamburgerIcon />}
          variant=""
          colorScheme="teal"
          aria-label="Options"
          fontSize="35px"
          transition={'all .3s ease'}
          _hover={{ color: 'blue.700' }}
          onClick={onOpen}
          backgroundColor="transparent"
        />
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>DEFI OPTIONS</DrawerHeader>

            <DrawerBody>
              <HStack>
                <Box>
                  <MenuList>
                    <MenuItem display="block">
                      {NAV_LINKS.map((link) => (
                        <NavItem key={`link-${link.label}`} {...link} />
                      ))}
                    </MenuItem>
                  </MenuList>
                </Box>
              </HStack>
            </DrawerBody>
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Menu>
    </>
  );
};

export default SideDrawer;
