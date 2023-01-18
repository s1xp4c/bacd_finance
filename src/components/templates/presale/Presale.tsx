import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import { IPresale } from './types';

import { useEffect } from 'react';

function Presale(presale: IPresale) {
  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');

  useEffect(() => console.log('presale: ', presale), [presale]);

  return (
    <>
      <Heading size="lg" marginBottom={6}>
        Presale
      </Heading>
      <Box border="2px" borderColor={hoverTrColor} borderRadius="xl" padding="24px 18px" userSelect={'none'}>
        <Box>{'Fuuuudge'}</Box>
      </Box>
    </>
  );
}

export default Presale;
