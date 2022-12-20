import { Box, HStack, Image, SimpleGrid, useColorModeValue, useBoolean } from '@chakra-ui/react';
import { Eth } from '@web3uikit/icons';
import { FC } from 'react';
import { resolveIPFS } from 'utils/resolveIPFS';
import { INFTCard } from './types';
import { getEllipsisTxt } from 'utils/format';

const NFTCard: FC<INFTCard> = ({ amount, contractType, name, symbol, metadata, tokenAddress }) => {
  const [isENS, setIsENS] = useBoolean();

  const bgColor = useColorModeValue('none', 'blue.700');
  const borderColor = useColorModeValue('blue.200', 'blue.700');
  const descBgColor = useColorModeValue('blue.100', 'blue.600');
  const bgGradient = 'linear(to-r, blue.500, blue.700, blue.500)';
  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');

  if (symbol === 'ENS') {
    // eslint-disable-next-line no-unused-expressions
    setIsENS.on;
    console.log('Ethereum Name Service detected');
  } else {
    // eslint-disable-next-line no-unused-expressions
    setIsENS.off;
    console.log('Ethereum Name Service NOT detected');
  }

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
          src={resolveIPFS(metadata?.image_url as unknown as string)}
          alt={'nft'}
          minH="260px"
          minW="260px"
          boxSize="100%"
          objectFit="fill"
        />
      </Box>
      <SimpleGrid
        columns={2}
        spacing={4}
        bgColor={descBgColor}
        padding={2.5}
        borderRadius="xl"
        marginTop={2}
        border="2px"
        borderColor={hoverTrColor}
      >
        <Box>
          <Box as="h4" noOfLines={1} fontWeight="medium" fontSize="sm">
            SYMBOL
          </Box>
          <Box as="h4" noOfLines={1} fontSize="sm">
            {symbol}
          </Box>
        </Box>
        <Box textAlign={'right'}>
          <Box as="h4" noOfLines={1} fontWeight="medium" fontSize="sm">
            AMOUNT
          </Box>
          <Box as="h4" noOfLines={1} fontSize="sm">
            {amount}
          </Box>
        </Box>
      </SimpleGrid>
      <Box
        border="2px"
        borderColor={hoverTrColor}
        bgColor={descBgColor}
        borderRadius="xl"
        padding="8px 8px"
        marginTop={'8px'}
      >
        <Box as="h4" noOfLines={1} fontWeight="medium" fontSize="sm">
          NFT ADDRESS:
        </Box>
        <Box as="h4" noOfLines={1} fontSize="sm">
          {getEllipsisTxt(tokenAddress)}
        </Box>
      </Box>

      <Box
        border="2px"
        borderColor={hoverTrColor}
        bgColor={descBgColor}
        borderRadius="xl"
        padding="8px 8px"
        marginTop={'8px'}
      >
        <Box as="h4" noOfLines={1} fontWeight="medium" fontSize="sm">
          NFT INCEPTION ORIGIN:
        </Box>
        <Box as="h4" noOfLines={1} fontSize="sm">
          {name}
        </Box>
      </Box>
      <HStack alignItems={'center'} w={'full'}>
        <Box
          border="2px"
          borderColor={hoverTrColor}
          bgColor={descBgColor}
          borderRadius="xl"
          padding="8px 8px"
          marginTop={'8px'}
        >
          <Box as="h4" noOfLines={1} fontWeight="medium" fontSize="sm">
            CONTRACT TYPE:
          </Box>

          <Box as="h4" noOfLines={1} fontWeight="medium" fontSize="smaller">
            {contractType}
          </Box>
        </Box>
        <Box>
          <Eth fontSize="50px" />
        </Box>
      </HStack>
      {!isENS ? (
        <Box
          id="pWrap"
          border="2px"
          borderColor={hoverTrColor}
          bgColor={descBgColor}
          borderRadius="xl"
          padding="8px 8px"
          marginTop={'8px'}
          objectFit="fill"
        >
          <Box mt="1" as="h4" noOfLines={1} fontWeight="medium" fontSize="sm">
            DESCRIPTION:
          </Box>
          <>
            <style>
              {`#pWrap {
                            white-space: pre-line;
                          }`}
            </style>
            <Box as="h4" fontSize="sm">
              {metadata?.description}
            </Box>
          </>
        </Box>
      ) : (
        <Box
          id="pWrap"
          border="2px"
          borderColor={hoverTrColor}
          bgColor={descBgColor}
          borderRadius="xl"
          padding="8px 8px"
          marginTop={'8px'}
          objectFit="fill"
        >
          <Box mt="1" as="h4" noOfLines={1} fontWeight="medium" fontSize="sm">
            RESOLVED ENS NAME:
          </Box>

          <Box as="h4" fontSize="sm">
            {'Your ENS Name'}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default NFTCard;
