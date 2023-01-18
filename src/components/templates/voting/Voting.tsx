import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import { IVoting } from './types';

import { useEffect } from 'react';

function Voting(voting: IVoting) {
  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');

  useEffect(() => console.log('voting: ', voting), [voting]);

  return (
    <>
      <Heading size="lg" marginBottom={6}>
        Voting
      </Heading>
      <Box border="2px" borderColor={hoverTrColor} borderRadius="xl" padding="24px 18px" userSelect={'none'}>
        <Box>{'Fuuuudge'}</Box>
      </Box>
    </>
  );
}

export default Voting;
