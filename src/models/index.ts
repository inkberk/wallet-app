export interface DApp {
  name: string;
  url: string;
  icon: string;
}

export interface Network {
  icon: string;
  name: string;
  chainId: number;
  currencySymbol: string;
  rpcUrl: string;
  explorerUrl: string;
}
