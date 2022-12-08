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

  const [bioValue, changeBioValue] = useState(user.bio);
  const [nameValue, changeNameValue] = useState(user.username);

  async function updateUserInfo() {
    const { data } = await axios.post(
      'api/updateMongoUser',
      { profileId: user.profileId, bio: bioValue, username: nameValue },
      {
        headers: {
          'content-type': 'application/json',
        },
      },
    );

    console.log(`User Updated with: ${data.bio}, ${data.username}`);
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
                  <Th>User ID:</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr _hover={{ bgColor: hoverTrColor }} cursor="pointer">
                  <Td>{getEllipsisTxt(user.profileId)}</Td>
                </Tr>
              </Tbody>
            </Table>
            <Table>
              <Thead>
                <Tr>
                  <Th>Username:</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr _hover={{ bgColor: hoverTrColor }} cursor="pointer">
                  <Td>{nameValue}</Td>
                  <Td>
                    {' '}
                    {
                      <Input
                        width={'full'}
                        onChange={(e) => changeNameValue(e.target.value)}
                        placeholder={'Update Username'}
                        value={undefined}
                      ></Input>
                    }
                  </Td>
                  <Td>
                    {
                      <Button onClick={() => updateUserInfo()}>
                        <RepeatIcon></RepeatIcon>{' '}
                      </Button>
                    }
                  </Td>
                </Tr>
              </Tbody>
            </Table>
            <Table>
              <Thead>
                <Tr>
                  <Th>deFi wallet address:</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr _hover={{ bgColor: hoverTrColor }} cursor="pointer">
                  <Td>{getEllipsisTxt(user.address)}</Td>
                </Tr>
              </Tbody>
            </Table>
            <Table>
              <Thead>
                <Tr>
                  <Th>About You</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr _hover={{ bgColor: hoverTrColor }} cursor="pointer">
                  <Td>{bioValue}</Td>
                  <Td>
                    {
                      <Input
                        onChange={(e) => changeBioValue(e.target.value)}
                        placeholder={'New About You?'}
                        value={undefined}
                      ></Input>
                    }
                  </Td>
                  <Td>
                    {
                      <Button onClick={() => updateUserInfo()}>
                        <RepeatIcon></RepeatIcon>{' '}
                      </Button>
                    }
                  </Td>
                </Tr>
              </Tbody>
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
