type TTokenTransfer = {
  chain: string | number;
  address: string;
  blockNumber: string;
  toAddress: string;
  fromAddress: string;
  value: string;
  transactionHash: string;
  blockTimestamp: Date;
  blockHash: string;
};

export interface IERC20Transfers {
  transfers?: TTokenTransfer[];
}

// contractAddress: string;
// decimals: number;
// name: string;
// symbol: string;
// logo?: string | null | undefined;
// logoHash?: string | null | undefined;
// thumbnail?: string | null | undefined;
