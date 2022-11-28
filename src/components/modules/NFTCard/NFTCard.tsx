import { Box, HStack, Image, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { Eth } from '@web3uikit/icons';
import { FC } from 'react';
import { resolveIPFS } from 'utils/resolveIPFS';
import { INFTCard } from './types';

const NFTCard: FC<INFTCard> = ({ amount, contractType, name, symbol, metadata }) => {
  const bgColor = useColorModeValue('none', 'blue.700');
  const borderColor = useColorModeValue('blue.200', 'blue.700');
  const descBgColor = useColorModeValue('blue.100', 'blue.600');
  const bgGradient = 'linear(to-r, blue.300, yellow.400, pink.200)';
  // const name = {metadata.name,};

  return (
    <Box
      maxWidth="315px"
      bgColor={bgColor}
      bgGradient={bgGradient}
      padding={3}
      borderRadius="xl"
      borderWidth="1px"
      borderColor={borderColor}
    >
      <Box maxHeight="260px" overflow={'hidden'} borderRadius="xl">
        <Image
          src={resolveIPFS(metadata?.image_url as string)}
          alt={'nft'}
          minH="260px"
          minW="260px"
          boxSize="100%"
          objectFit="fill"
        />
      </Box>
      <Box mt="1" fontWeight="semibold" as="h4" noOfLines={1} marginTop={2}>
        {name}
      </Box>
      <HStack alignItems={'center'}>
        <Box as="h4" noOfLines={1} fontWeight="medium" fontSize="smaller">
          {contractType}
        </Box>

        <Eth fontSize="20px" />
      </HStack>
      <SimpleGrid columns={2} spacing={4} bgColor={descBgColor} padding={2.5} borderRadius="xl" marginTop={2}>
        <Box>
          <Box as="h4" noOfLines={1} fontWeight="medium" fontSize="sm">
            Symbol
          </Box>
          <Box as="h4" noOfLines={1} fontSize="sm">
            {symbol}
          </Box>
        </Box>
        <Box>
          <Box as="h4" noOfLines={1} fontWeight="medium" fontSize="sm">
            Amount
          </Box>
          <Box as="h4" noOfLines={1} fontSize="sm">
            {amount}
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default NFTCard;
