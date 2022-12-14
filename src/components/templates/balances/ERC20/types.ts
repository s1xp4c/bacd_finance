type Erc20Value =
  | {
      value: number | number;
      token: {
        contractAddress: string;
        chain: string | number;
        decimals: number;
        name: string;
        symbol: string;
        logo?: string | null | undefined;
        logoHash?: string | null | undefined;
        thumbnail?: string | null | undefined;
      };
    }
  | {
      value: number | number;
      token?: undefined;
    };
export interface IERC20Balances {
  balances?: Erc20Value[];
  error?: string;
}
