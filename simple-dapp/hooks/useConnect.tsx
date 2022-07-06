import { useEffect } from "react";
import web3 from "../utils/web3Utils";
import { useMoralis } from "react-moralis";

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

  return { onClickConnect, onClickConnectMoralis };
}
