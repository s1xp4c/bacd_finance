type TSwapperData = {
  address: string | string;
  otherProp?: string | unknown;
};

export interface ISwapper {
  swapper: TSwapperData[];
}
