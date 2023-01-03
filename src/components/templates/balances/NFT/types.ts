export type TNFTBalance = {
  tokenAddress: string;
  chain: string | number;
  ownerOf: string | undefined;
  blockNumberMinted: string | undefined;
  blockNumber: string | undefined;
  tokenId: string | number;
  contractType: string;
  tokenUri?: string | undefined;
  tokenHash?: string | undefined;
  metadata: {
    name: string;
    description: string;
    image_url: string;
  };
  name?: string | undefined;
  symbol?: string | undefined;
  lastMetadataSync?: Date | undefined;
  lastTokenUriSync?: Date | undefined;
  amount?: number | undefined;
};

export type TENVName = {
  envName?: {
    name?: string | undefined;
  };
};

export interface INFTBalances {
  balances?: TNFTBalance[];
  envName?: TENVName[];
}
