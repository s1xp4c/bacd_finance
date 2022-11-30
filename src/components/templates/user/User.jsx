import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Heading,
  Box,
  useColorModeValue,
  Button,
  Input,
  Grid,
  GridItem,
  Avatar,
} from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';
import { getEllipsisTxt } from 'utils/format';

function User({ user }) {
  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');

  useEffect(() => console.log('user: ', user), [user]);

  const [bioValue, changeBioValue] = useState();

  async function updateBio() {
    const { data } = await axios.post(
      'api/updateMongoUser',
      { profileId: user.profileId, bio: bioValue },
      {
        headers: {
          'content-type': 'application/json',
        },
      },
    );

    console.log(`Bio Updated to: ${data.bio}`);
  }

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <Box>
            <Avatar></Avatar>
          </Box>
        </GridItem>
        <GridItem colSpan={3}>
          <Heading size="lg" marginBottom={6}>
            User Profile
          </Heading>
        </GridItem>
      </Grid>
      {user ? (
        <Box border="2px" borderColor={hoverTrColor} borderRadius="xl" padding="24px 18px">
          <TableContainer w={'full'}>
            <Table>
              <Thead>
                <Tr>
                  <Th>User ID</Th>
                  <Th>About</Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th>Balance</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr _hover={{ bgColor: hoverTrColor }} cursor="pointer">
                  <Td>{getEllipsisTxt(user.profileId)}</Td>
                  <Td>{user.bio}</Td>
                  <Td>{<Input onChange={(e) => changeBioValue(e.target.value)} value={bioValue}></Input>}</Td>
                  <Td>
                    {
                      <Button onClick={() => updateBio()}>
                        <RepeatIcon></RepeatIcon>{' '}
                      </Button>
                    }
                  </Td>
                  <Td></Td>
                  <Td>{user.balance}</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>User ID</Th>
                  <Th>About</Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th>Balance</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <Box>Looks Like you need to connect your wallet</Box>
      )}
    </>
  );
}

export default User;
