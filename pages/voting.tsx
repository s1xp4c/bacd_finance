import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { Voting } from 'components/templates/voting';

import Moralis from 'moralis';

const votingPage: NextPage = (props) => {
  return (
    <Default pageName="Swap">
      <Voting voting={[]} {...props} />
    </Default>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!Moralis.Core.isStarted) {
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });
  }

  if (!session?.user.address) {
    return { props: { error: 'Connect your wallet first' } };
  }

  const userB = {
    address: session?.user.address,
  };

  const votingAddress = { address: userB?.address };

  return {
    props: {
      voting: JSON.parse(JSON.stringify(votingAddress)),
    },
  };
};

export default votingPage;
