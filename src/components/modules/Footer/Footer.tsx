import { Box, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Grid, GridItem } from '@chakra-ui/react';

const links = {
  github: 'https://github.com/ethereum-boilerplate/ethereum-boilerplate/',
  forum: 'https://forum.moralis.io/',
  moralis: 'https://moralis.io/?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplat',
};

const Footer = () => {
  return (
    <Box textAlign={'center'} w="full" p={6}>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="blue.500">
          <Text>
            <Link href={links.github} isExternal alignItems={'center'}>
              boilerplate <ExternalLinkIcon />
            </Link>
          </Text>
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500"></GridItem>
        <GridItem w="100%" h="10" bg="blue.500"></GridItem>
        <GridItem w="100%" h="10" bg="blue.500"></GridItem>
        <GridItem w="100%" h="10" bg="blue.500"></GridItem>
      </Grid>
      {/* <Text>
        <Link href={links.github} isExternal alignItems={'center'}>
          boilerplate <ExternalLinkIcon />
        </Link>
        ⭐️ Please star this{' '}
        , every star makes us very happy!
      </Text>
      <Text>
        🙋 You have questions? Ask them on the{' '}
        <Link href={links.forum} isExternal alignItems={'center'}>
          Moralis forum <ExternalLinkIcon />
        </Link>
      </Text>
      <Text>
        📖 Read more about{' '}
        <Link href={links.moralis} isExternal alignItems={'center'}>
          Moralis <ExternalLinkIcon />
        </Link>
      </Text> */}
    </Box>
  );
};

export default Footer;
