import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
Button,

} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';

import { NavItem } from '../NavItem';
import NAV_LINKS from './paths';

const NavBar = () => {
  return (
    <Menu>
         <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Actions
  </MenuButton>
  <MenuList> 
    <MenuItem gap={'15px'} display="block"  >
      {NAV_LINKS.map((link) => (
        <NavItem key={`link-${link.label}`} {...link}  />
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