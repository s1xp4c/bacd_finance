import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { IUserData, User } from 'components/templates/user';
import Users from './api/auth/userSchema';
import connectDB from './api/auth/connectDB';

import Moralis from 'moralis';

const userPage: NextPage<IUserData> = (props) => {
  return (
    <Default pageName="User">
      <User {...props} />
    </Default>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  if (!session?.user.address) {
    return { props: { error: 'Connect your wallet first' } };
  }

  await connectDB();

  const userB = {
    address: session?.user.address,
  };

  const userM = await Users.findOne({
    profileId: session?.user.profileId,
  }).lean();
  console.log('userB:', userB);

  const userData = { address: userB?.address, profileId: userM?.profileId, bio: userM?.bio, username: userM?.username };

  return {
    props: {
      user: JSON.parse(JSON.stringify(userData)),
    },
  };
};

export default userPage;
