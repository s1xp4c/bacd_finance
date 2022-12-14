import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { INFTBalances } from 'components/templates/balances/NFT/types';
import { NFTBalances } from 'components/templates/balances/NFT';
import Moralis from 'moralis';

const ERC20: NextPage<INFTBalances> = (props) => {
  return (
    <Default pageName="NFT Balances">
      <NFTBalances {...props} />
    </Default>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session?.user.address) {
    return { props: { error: 'Connect your wallet first' } };
  }

  const resolvedEnvName = await Moralis.EvmApi.resolve.resolveAddress({
    address: session?.user.address,
  });

  const balances = await Moralis.EvmApi.nft.getWalletNFTs({
    address: session?.user.address,
    chain: process.env.APP_CHAIN_ID,
  });

  return {
    props: {
      balances: JSON.parse(JSON.stringify(balances.result)),
      envName: JSON.parse(JSON.stringify(resolvedEnvName)),
    },
  };
};

export default ERC20;
