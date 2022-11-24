import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';

import { NavItem } from '../NavItem';
import NAV_LINKS from './paths';
import { HamburgerIcon } from '@chakra-ui/icons';

const NavBar = () => {
  return (
    <Menu>
      <MenuButton>
        <IconButton
          variant="outline"
          colorScheme="teal"
          aria-label="Hamburger"
          fontSize="25px"
          icon={<HamburgerIcon />}
        />
      </MenuButton>
      <MenuList>
        <MenuItem gap={'15px'} display="block">
          {NAV_LINKS.map((link) => (
            <NavItem key={`link-${link.label}`} {...link} />
          ))}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavBar;

// import { HStack } from '@chakra-ui/react';
// <HStack gap={'15px'} display="block"  >
//   {NAV_LINKS.map((link) => (
//     <NavItem key={`link-${link.label}`} {...link}  />
//   ))}
// </HStack>
