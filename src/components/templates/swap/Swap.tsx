import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import { ISwapper } from './types';

import { useEffect } from 'react';

function Swap(swapper: ISwapper) {
  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');

  useEffect(() => console.log('swapper: ', swapper), [swapper]);

  return (
    <>
      <Heading size="lg" marginBottom={6}>
        Swap this shit
      </Heading>
      <Box border="2px" borderColor={hoverTrColor} borderRadius="xl" padding="24px 18px" userSelect={'none'}>
        <Box>{'Fuuuudge'}</Box>
      </Box>
    </>
  );
}

export default Swap;
