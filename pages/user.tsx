import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { IUserData, User } from 'components/templates/user';
import Moralis from 'moralis';

const { data } = useSession();

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

  const userData = { address: data?.user.address, profileId: data?.user.profileId, bio: data?.bio };

  return {
    props: {
      user: JSON.parse(JSON.stringify(userData)),
    },
  };
};

export default userPage;
