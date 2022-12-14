import { CheckCircleIcon, SettingsIcon } from '@chakra-ui/icons';
import { Heading, VStack, List, ListIcon, ListItem, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';

const Home = () => {
  const hoverLiColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <VStack w={'full'}>
      <Heading size="md" marginBottom={6}>
        Welcome to BACD FINANCE
      </Heading>
      <Heading size="sm" marginBottom={1}>
        Merging ceFi (Centralized Finance) and deFi (DeCentralized Finance) for the masses.
      </Heading>
      <Heading size="sm" marginBottom={1}>
        Please connect your wallet to see your Blockchain Interactions and holdings
      </Heading>
      <br></br>
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={4}
        border="2px"
        borderColor={hoverLiColor}
        borderRadius="xl"
        padding="24px 18px"
      >
        <GridItem colSpan={2}>
          <List spacing={4}>
            <ListItem borderBottom="2px" borderBottomColor={hoverLiColor}>
              <Heading size="md" marginBottom={1}>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Done
              </Heading>
            </ListItem>

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
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Wallet Copy Functions
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              NFT Copy Protection
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Resolve ENS Domains
            </ListItem>
          </List>
        </GridItem>

        <GridItem colStart={4} colEnd={6}>
          <List spacing={4}>
            <ListItem borderBottom="2px" borderBottomColor={hoverLiColor}>
              <Heading size="md" marginBottom={1}>
                <ListIcon as={SettingsIcon} color="yellow.500" />
                In Progress
              </Heading>
            </ListItem>
            <ListItem>
              <ListIcon as={SettingsIcon} color="yellow.500" />
              IPFS File upload
            </ListItem>
            <ListItem>
              <ListIcon as={SettingsIcon} color="yellow.500" />
              ICO/STO Presale stats
            </ListItem>
            <ListItem>
              <ListIcon as={SettingsIcon} color="yellow.500" />
              Decentralized Swap function
            </ListItem>
            <ListItem>
              <ListIcon as={SettingsIcon} color="yellow.500" />
              Voting integration
            </ListItem>
            <ListItem>
              <ListIcon as={SettingsIcon} color="yellow.500" />
              Real Time Coin charts
            </ListItem>
          </List>
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default Home;
