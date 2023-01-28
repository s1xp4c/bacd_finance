import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';
import { OpenAI } from 'components/templates/openAI';
import { getSession } from 'next-auth/react';
import Moralis from 'moralis';

const openAIPage: NextPage = (props) => {
  return (
    <Default pageName="OpenAI">
      <OpenAI useraddress={[]} {...props} />
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

  const userAddress = { address: userB?.address };

  return {
    props: {
      useraddress: JSON.parse(JSON.stringify(userAddress)),
    },
  };
};
export default openAIPage;
