import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { Charts } from 'components/templates/charts';

import Moralis from 'moralis';

const chartsPage: NextPage = (props) => {
  return (
    <Default pageName="Swap">
      <Charts chartsAddress={[]} {...props} />
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

  const chartAddress = { address: userB?.address };

  return {
    props: {
      chartAddress: JSON.parse(JSON.stringify(chartAddress)),
    },
  };
};

export default chartsPage;
