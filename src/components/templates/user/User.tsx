import { getSession, GetSessionParams } from 'next-auth/react';
import Users from '../../../../pages/api/auth/userSchema';
import connectDB from '../../../../pages/api/auth/connectDB';
import { useState } from 'react';
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
import { FC, useEffect } from 'react';
import { getEllipsisTxt } from 'utils/format';

import { IUserData } from './types';

const User: FC<IUserData> = ({ user }) => {
  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');

  useEffect(() => console.log('user: ', user), [user]);

  const [bioValue, changeBioValue] = useState('New Bio');

  async function updateBio() {
    const data = await axios.post(
      'api/updateMongoUser',
      { profileId: user, bio: bioValue },
      {
        headers: {
          'content-type': 'application/json',
        },
      },
    );

    console.log(`Bio Updated to: ${data}`);
  }
  // eslint-disable-next-line no-undef
  window.location.reload();

  return (
    <>
      <Heading size="lg" marginBottom={6}>
        User Profile
      </Heading>
      {user?.length ? (
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
                {user?.map((you, key) => (
                  <Tr key={key} _hover={{ bgColor: hoverTrColor }} cursor="pointer">
                    <Td>{getEllipsisTxt(you.profileId)}</Td>
                    <Td>{getEllipsisTxt(you.bio)}</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td>{you.balance}</Td>
                  </Tr>
                ))}
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
};

export async function getServerSideProps(context: GetSessionParams | undefined) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '../../home',
        permanent: false,
      },
    };
  }

  await connectDB();

  const userM = await Users.findOne({
    profileId: session?.user.profileId,
  }).lean();

  if (userM !== null) {
    userM.bio = userM.bio.toString();
  }

  return {
    props: { user: session.user, bio: userM.bio },
  };
}

export default User;
