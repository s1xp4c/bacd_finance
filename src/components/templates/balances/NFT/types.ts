import { EvmNftMetadataData } from '@moralisweb3/common-evm-utils';
import { MoralisDataObjectValue } from '@moralisweb3/common-core';

export type TNFTBalance = {
  tokenAddress: string;
  chain: string | number;
  ownerOf: string | undefined;
  blockNumberMinted: string | undefined;
  blockNumber: string | undefined;
  tokenId: string | number;
  contractType: EvmNftMetadataData;
  tokenUri?: string | undefined;
  tokenHash?: string | undefined;
  metadata: MoralisDataObjectValue;
  name?: string | undefined;
  symbol?: string | undefined;
  lastMetadataSync?: Date | undefined;
  lastTokenUriSync?: Date | undefined;
  amount?: number | undefined;
};

export interface INFTBalances {
  balances?: TNFTBalance[];
}
