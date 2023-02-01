import { Heading, VStack, useColorModeValue, Box, Input, Button, Flex, Grid, GridItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IUser } from './types';
import { Eth, Btc, Link, Ada, Bnb } from '@web3uikit/icons';

function OpenAI(useraddress: IUser) {
  const hoverLiColor = useColorModeValue('gray.100', 'gray.700');

  useEffect(() => console.log('User Address: ', useraddress), [useraddress]);

  const [coinInput, setCoinInput] = useState('');
  const [result, setResult] = useState();

  async function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ coin: coinInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setCoinInput('');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <VStack w={'full'}>
      <Heading size="md" marginBottom={6}>
        Try out BACD OPENAI
      </Heading>
      <Flex
        border="2px"
        borderColor={hoverLiColor}
        borderRadius="xl"
        padding="24px 18px"
        textAlign={'center'}
        align="center"
        justify="center"
        flexDir="column"
      >
        <Heading size="sm" marginBottom={6}>
          {'Enter a Crypto Coin or Token and our AI will find and list 5 similar cryptos with explainations.'}
        </Heading>
        <Heading size="xs" marginBottom={2}>
          {'NB! - Investing in crypto is highly speculative, and no data from the AI should be construed  '}
        </Heading>
        <Heading size="xs" marginBottom={6}>
          {' '}
          {'as investment advice. The AI answers are limited to data from before 2021.'}
        </Heading>
        <Box marginBottom={6}>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <GridItem w="100%" h="100px">
              <Btc fontSize={'80px'} />
            </GridItem>
            <GridItem w="100%" h="100px">
              <Eth fontSize={'80px'} />
            </GridItem>
            <GridItem w="100%" h="100px">
              <Link fontSize={'80px'} />
            </GridItem>
            <GridItem w="100%" h="100px">
              <Ada fontSize={'80px'} />
            </GridItem>
            <GridItem w="100%" h="100px">
              <Bnb fontSize={'80px'} />
            </GridItem>
          </Grid>
        </Box>

        <Box>
          <form onSubmit={onSubmit}>
            <Input
              marginBottom={6}
              type="text"
              name="coin"
              placeholder="Enter a Crypto Coin or Token . . . "
              value={coinInput}
              onChange={(e) => setCoinInput(e.target.value)}
            />
            <Button marginBottom={6} type="submit" value="Generate coins">
              {'GENERATE COIN EXPLANATIONS'}
            </Button>
          </form>

          <Box>{result}</Box>
        </Box>
      </Flex>
    </VStack>
  );
}

export default OpenAI;
