import { Heading, VStack, useColorModeValue, Icon, Image, Box, Input, Button, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IUser } from './types';

function OpenAI(useraddress: IUser) {
  const hoverLiColor = useColorModeValue('gray.100', 'gray.700');

  useEffect(() => console.log('voting: ', useraddress), [useraddress]);

  const [animalInput, setAnimalInput] = useState('');
  const [result, setResult] = useState();

  async function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ animal: animalInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setAnimalInput('');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <VStack w={'full'}>
      <Heading size="md" marginBottom={6}>
        Try out OpenAI
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
          Name my pet
        </Heading>

        <Image
          color={'White'}
          alt={'Doggy'}
          minH="60px"
          minW="60px"
          objectFit="contain"
          src="/dog.png"
          marginBottom={6}
        />

        <form onSubmit={onSubmit}>
          <Input
            marginBottom={6}
            type="text"
            name="animal"
            placeholder="Enter an animal"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <Button marginBottom={6} type="submit" value="Generate names">
            {'Generate names'}
          </Button>
        </form>
        <Box>{result}</Box>
      </Flex>
    </VStack>
  );
}

export default OpenAI;
