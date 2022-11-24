import { HStack, Menu, MenuButton, MenuList, MenuItem, IconButton, Box } from '@chakra-ui/react';
import { NavItem } from '../NavItem';
import NAV_LINKS from './paths';
import { HamburgerIcon } from '@chakra-ui/icons';

const NavBar = () => {
  return (
    <HStack>
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            colorScheme="teal"
            aria-label="Hamburger"
            fontSize="25px"
          />
          <MenuList>
            <MenuItem gap={'15px'} display="block">
              {NAV_LINKS.map((link) => (
                <NavItem key={`link-${link.label}`} {...link} />
              ))}
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </HStack>
  );
};

export default NavBar;
