import { useState, useEffect } from 'react';
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
  useBoolean,
} from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import { getEllipsisTxt } from 'utils/format';

function User({ user }) {
  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');
  const [addressHovered, setAddressHovered] = useBoolean();
  const [profileIdHovered, setProfileIdHovered] = useBoolean();

  const [bioValue, changeBioValue] = useState();
  const [nameValue, changeNameValue] = useState();

  const [pulledBio, changePulledBio] = useState(user.bio);
  const [pulledName, changePulledName] = useState(user.username);

  const [inputValueName, changeInputValueName] = useState(undefined);
  const [inputValueBio, changeInputValueBio] = useState(undefined);

  useEffect(() => console.log('user: ', user), [user]);

  async function updateUserBio() {
    const { data } = await axios.post(
      'api/updateMongoUser',
      { profileId: user.profileId, bio: bioValue, username: nameValue },
      {
        headers: {
          'content-type': 'application/json',
        },
      },
    );
    changePulledBio(data.bio);
    changeInputValueBio('');
    console.log(`User Updated with: ${data.bio}`);
  }

  async function updateUserName() {
    const { data } = await axios.post(
      'api/updateMongoUser',
      { profileId: user.profileId, username: nameValue },
      {
        headers: {
          'content-type': 'application/json',
        },
      },
    );
    changePulledName(data.username);
    changeInputValueName('');
    console.log(`User Updated with: ${data.username}`);
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
            User Info
          </Heading>
        </GridItem>
      </Grid>
      {user ? (
        <Box border="2px" borderColor={hoverTrColor} borderRadius="xl" padding="26px 18px">
          <TableContainer w={'full'}>
            <Table>
              <Thead>
                <Tr>
                  <Th>User ID:</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr
                  _hover={{ bgColor: hoverTrColor }}
                  onMouseEnter={setProfileIdHovered.on}
                  onMouseLeave={setProfileIdHovered.off}
                  cursor="pointer"
                >
                  {!profileIdHovered ? <Td>{getEllipsisTxt(user.profileId)}</Td> : <Td>{user.profileId}</Td>}
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
                  <Td width={'full'}>{pulledName}</Td>
                </Tr>
              </Tbody>
            </Table>

            <Table>
              <Tbody>
                <Tr>
                  <Td>
                    {' '}
                    {
                      <Input
                        id="nameInput"
                        width={'full'}
                        onChange={(e) => {
                          changeNameValue(e.target.value);
                        }}
                        placeholder={'Change Username'}
                        value={inputValueName}
                      ></Input>
                    }
                  </Td>
                  <Td>
                    {
                      <Button onClick={() => updateUserName()}>
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
                <Tr
                  _hover={{ bgColor: hoverTrColor }}
                  onMouseEnter={setAddressHovered.on}
                  onMouseLeave={setAddressHovered.off}
                  cursor="pointer"
                >
                  {!addressHovered ? <Td>{getEllipsisTxt(user.address)}</Td> : <Td>{user.address}</Td>}
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
                  <Td width={'full'}>{pulledBio}</Td>
                </Tr>
              </Tbody>
            </Table>

            <Table>
              <Tbody>
                <Tr>
                  <Td>
                    {
                      <Input
                        id="aboutInput"
                        onChange={(e) => changeBioValue(e.target.value)}
                        placeholder={'New About You?'}
                        value={inputValueBio}
                      ></Input>
                    }
                  </Td>
                  <Td>
                    {
                      <Button onClick={() => updateUserBio()}>
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
