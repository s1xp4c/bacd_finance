import { CheckCircleIcon } from '@chakra-ui/icons';
import { Heading, VStack, List, ListIcon, ListItem } from '@chakra-ui/react';

const Home = () => {
  return (
    <VStack w={'full'}>
      <Heading size="md" marginBottom={6}>
        Welcome to BACD FINANCE
      </Heading>
      <Heading size="sm" marginBottom={6}>
        Merging ceFi (Centralized Finance) and deFi (DeCentralized Finance) for the masses.
      </Heading>
      <br></br>
      <List spacing={4}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Blockchain authentication
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Multichain Support
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Centralized user profile
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Decentralized wallet info
        </ListItem>
      </List>
    </VStack>
  );
};

export default Home;
