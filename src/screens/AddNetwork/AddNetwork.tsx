import { TopBar } from "./components/TopBar";
import { Helmet } from "react-helmet";
import { BottomBar } from "./components/BottomBar";
import styled from "styled-components";
import { NetworkInfo } from "./components/NetworkInfo";
import { DApp, Network } from "../../models";
import { arbitrumIcon, uniSwapIcon } from "../../assets/icons";
import { useCallback } from "react";

const dApp: DApp = {
  name: "Uniswap",
  url: "app.uniswap.org/#/swap",
  icon: uniSwapIcon
};

const network: Network = {
  name: "Arbitrum Nova",
  chainId: 42170,
  currencySymbol: "ETH",
  rpcUrl: "nova.arbitrum.io/rpc",
  explorerUrl: "nova-explorer.arbitradfasdfasf",
  icon: arbitrumIcon
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-between;
  background: ${({ theme }) => theme.palette.background.main};
`;

export const AddNetwork = () => {
  const handleSubmit = useCallback(() => {
    alert("handleAddNetwork");
  }, []);

  const handleCancel = useCallback(() => {
    alert("handleCancel");
  }, []);

  return (
    <>
      <Helmet>
        <title>Add new network from dapp</title>
      </Helmet>
      <Wrapper>
        <TopBar dApp={dApp} />
        <NetworkInfo network={network} />
        <BottomBar onSubmit={handleSubmit} onCancel={handleCancel} />
      </Wrapper>
    </>
  );
};
