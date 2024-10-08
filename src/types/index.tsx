import { ContractRunner, Contract, JsonRpcSigner } from "ethers";
import { Address } from "viem";

export type Web3ContextType = {
  account?: Address;
  web3: any;
  chainId?: number;
  isConnected?: boolean;
  library?: ContractRunner | Promise<JsonRpcSigner>;
  marketDescriptorDeployerContract: any;
  orderBookContract: any;
  usdcTokenContract: any;
  routerContract: any;
  positionRouterContract: any;
  faucetContract: any;
  isWeb3Loading: boolean;
};

export type UtilContextType = {
  marketPrice: MarketPriceType;
  headerPrice: TradeHeaderType;
  sliprate: number;
  language: string;
  marketOrderType: string;
  marketPair: string;
  intervalApiTimer: number;
  isIdle: boolean;
  isAuthorization: boolean;
  tpslGlobalList: any;
  istpslDataSync: boolean;
  setIsIdle: (id: any) => void;
  setMarketOrderType: (type: string) => void;
  setSlipRate: (rate: number) => void;
  setHeaderPrice: (price: TradeHeaderType) => void;
  setMarketPrice: (price: MarketPriceType) => void;
  setLanguage: (language: string) => void;
  setMarketPair: (pair: string) => void;
  setIntervalApiTimer: (timer: number) => void;
  setIsAuthorization: (id: boolean) => void;
  setTpslGlobalList: (id: any) => void;
  setIsTpSlDataSync: (id: boolean) => void;
}

export type TradeHeaderType = {
  price24High: number;
  price24Low: number;
}
export type MarketPriceType = {
  open: number,
  close: number,
  high: number,
  low: number
}