import "../styles/globals.css";
import type { AppProps } from "next/app";
//* Moralis
import { MoralisProvider } from "react-moralis";
//* useDApp
import { Mainnet, DAppProvider, Config } from "@usedapp/core";
import { getDefaultProvider } from "ethers";

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider("mainnet"),
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={config}>
      <MoralisProvider
        appId={process.env.NEXT_MORALIS_APP_ID || ""}
        serverUrl={process.env.NEXT_MORALIS_SERVER_URL || ""}
      >
        <Component {...pageProps} />
      </MoralisProvider>
    </DAppProvider>
  );
}

export default MyApp;
