import { Box, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Grid, GridItem } from '@chakra-ui/react';

const links = {
  github: 'https://github.com/s1xp4c/bacd_finance',
};

const Footer = () => {
  return (
    <Box textAlign={'center'} w="full" p={6}>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="blue.500">
          <Text>
            <Link href={links.github} isExternal alignItems={'center'}>
              github <ExternalLinkIcon />
            </Link>
          </Text>
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500"></GridItem>
        <GridItem w="100%" h="10" bg="blue.500"></GridItem>
        <GridItem w="100%" h="10" bg="blue.500"></GridItem>
        <GridItem w="100%" h="10" bg="blue.500"></GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
