import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import { ISwapper } from './types';

import { useEffect } from 'react';

function Swap(swapper: ISwapper) {
  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');

  useEffect(() => console.log('swapper: ', swapper), [swapper]);

  return (
    <>
      <Heading size="lg" marginBottom={6}>
        Swap your tokens
      </Heading>
      <Box border="2px" borderColor={hoverTrColor} borderRadius="xl" padding="24px 18px" userSelect={'none'}>
        <Box
          borderWidth={'none'}
          margin={'0 auto'}
          display={'block'}
          border-radius={'10px'}
          max-width={'600px'}
          min-width={'300px'}
        >
          <iframe
            src="https://app.uniswap.org/#/swap?exactField=output&exactAmount=100000&outputCurrency=0x66eb10c9b80fc52401384285f5ecc18c0b924bbd"
            height={'660px'}
            width={'100%'}
          />
        </Box>
      </Box>
    </>
  );
}

export default Swap;
