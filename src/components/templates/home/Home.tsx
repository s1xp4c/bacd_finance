import { CheckCircleIcon, SettingsIcon } from '@chakra-ui/icons';
import { Heading, VStack, List, ListIcon, ListItem } from '@chakra-ui/react';

const Home = () => {
  return (
    <VStack w={'full'}>
      <Heading size="md" marginBottom={6}>
        Welcome to BACD FINANCE
      </Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Moralis authentication
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Multichain Support
        </ListItem>
      </List>
    </VStack>
  );
};

export default Home;
