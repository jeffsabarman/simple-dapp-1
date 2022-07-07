import { useEffect } from "react";
import web3 from "../utils/web3Utils";
//* Moralis
import { useMoralis } from "react-moralis";
//* useDApp
import { useEthers } from "@usedapp/core";

export function useConnect() {
  console.log(web3, "<< web3");
  if (typeof window !== "undefined") {
    window.web3 = web3;
  }

  // ? cobain useDapp gampang, moralis, web3React

  const onClickConnect = async () => {
    try {
      // Will open the MetaMask UI
      // You should disable this button while the request is pending!
      window.ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.error(error);
    }
  };

  // ? Moralis
  const { authenticate, isAuthenticated, user } = useMoralis();

  console.log(isAuthenticated, "<< isAuthenticated");

  const onClickConnectMoralis = async () => {
    if (!isAuthenticated) {
      try {
        const user = await authenticate();
        console.log(user!.get("ethAddress"));
      } catch (err) {
        console.log(err, "<< error moralis");
      }
    }
  };

  // ? useDApp
  const { activateBrowserWallet } = useEthers();
  const onClickConnectUseDApp = () => {
    activateBrowserWallet();
  };

  return { onClickConnect, onClickConnectMoralis, onClickConnectUseDApp };
}
