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
} from '@chakra-ui/react';
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
      <Heading size="lg" marginBottom={6}>
        User Profile
      </Heading>
      {user ? (
        <Box border="2px" borderColor={hoverTrColor} borderRadius="xl" padding="24px 18px">
          <TableContainer w={'full'}>
            <Table>
              <Thead>
                <Tr>
                  <Th>User ID</Th>
                  <Th>About</Th>
                  <Th>{<input onChange={(e) => changeBioValue(e.target.value)} value={bioValue}></input>}</Th>
                  <Th>{<button onClick={() => updateBio()}>Update</button>}</Th>
                  <Th></Th>
                  <Th>Balance</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr _hover={{ bgColor: hoverTrColor }} cursor="pointer">
                  <Td>{getEllipsisTxt(user.profileId)}</Td>
                  <Td>{user.bio}</Td>
                  <Td></Td>
                  <Td></Td>
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
