import { Box, Container, Flex, HStack } from '@chakra-ui/react';
import { ColorModeButton, BacdLogo, NavBar } from 'components/elements';
import { ConnectButton } from '../ConnectButton';

const Header = () => {
  return (
    <Box borderBottom="1px" borderBottomColor="chakra-border-color">
      <Container maxW="container.xl" p={'10px'}>
        <Flex align="center" justify="space-between" >
          <BacdLogo />
          <HStack gap={'20px'}>
            <ConnectButton />
            <ColorModeButton />
          </HStack>
          <NavBar />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
