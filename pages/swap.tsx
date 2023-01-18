import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { Swap } from 'components/templates/swap';

import Moralis from 'moralis';

const swapPage: NextPage = (props) => {
  return (
    <Default pageName="Swap">
      <Swap swapper={[]} {...props} />
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

  const swapAddress = { address: userB?.address };

  return {
    props: {
      swapper: JSON.parse(JSON.stringify(swapAddress)),
    },
  };
};

export default swapPage;
