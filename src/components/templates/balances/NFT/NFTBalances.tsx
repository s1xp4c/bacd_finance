import { Box, Grid, Heading } from '@chakra-ui/react';
import { NFTCard } from 'components/modules';
import { FC, useEffect } from 'react';
import { INFTBalances } from './types';

const NFTBalances: FC<INFTBalances> = ({ balances, envName }) => {
  useEffect(() => console.log('Balances: ', balances), [balances]);

  return (
    <>
      <Heading size="lg" marginBottom={6}>
        NFT Balances
      </Heading>
      {balances?.length ? (
        <Grid templateColumns="repeat(auto-fit, minmax(280px, 1fr))" gap={2} textAlign="center">
          {balances.map((balance, key) => (
            <NFTCard {...balance} {...envName} key={key} />
          ))}
        </Grid>
      ) : (
        <Box>Looks Like you do not have any NFT´s, or you´re not connected</Box>
      )}
    </>
  );
};

export default NFTBalances;
