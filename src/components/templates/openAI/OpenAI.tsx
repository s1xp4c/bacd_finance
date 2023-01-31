import { Heading, VStack, useColorModeValue, Icon, Box, Input, Button, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IUser } from './types';
import { Eth } from '@web3uikit/icons';

function OpenAI(useraddress: IUser) {
  const hoverLiColor = useColorModeValue('gray.100', 'gray.700');

  useEffect(() => console.log('voting: ', useraddress), [useraddress]);

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
        Try out BACD AI
        <Icon>
          <img src="/dog.png" />
        </Icon>
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
          Enter a Crypto Coin you like and our AI will suggest a similar coin and explain why.
        </Heading>
        <Heading size="xs" marginBottom={2}>
          {'NB! - Investing in crypto is highly speculative, and no data from the AI should be construed  '}
        </Heading>
        <Heading size="xs" marginBottom={6}>
          {' '}
          {'as investment advice and the AI answers are limited to data from before 2021.'}
        </Heading>
        <Box marginBottom={6}>
          <Eth fontSize={'200px'} />
        </Box>

        <Box id="pWrap">
          <form onSubmit={onSubmit}>
            <Input
              marginBottom={6}
              type="text"
              name="coin"
              placeholder="Enter a Crypto Coin"
              value={coinInput}
              onChange={(e) => setCoinInput(e.target.value)}
            />
            <Button marginBottom={6} type="submit" value="Generate coins">
              {'Generate Crypto Coins'}
            </Button>
          </form>
          <>
            <style>
              {`#pWrap {
                            white-space: pre-line;
                          }`}
            </style>
            <Box>{result}</Box>
          </>
        </Box>
      </Flex>
    </VStack>
  );
}

export default OpenAI;
