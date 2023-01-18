import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import { ICharts } from './types';

import { useEffect } from 'react';

function Charts(chartsAddress: ICharts) {
  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');

  useEffect(() => console.log('ChartsAddress: ', chartsAddress), [chartsAddress]);

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

export default Charts;
