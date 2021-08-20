import { BeaconWallet } from "@taquito/beacon-wallet";
import {
  TezosToolkit,
  WalletContract,
  MichelCodecPacker,
} from "@taquito/taquito";

const axios = require('axios');

const hicvoteJson1 = { // limited use key that can only pin JSON
  key: '465218ee2870923fb0cc',
  secret: 'e021cc4e96c9cf19aae741812b1f6946da848eee9af2817f0f0ba814ba71bd2a',
  jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiMmE2YmIzZi1hNmJkLTQ1MWItYWNiNy1mMTZkNTVhOWJjMWIiLCJlbWFpbCI6Imt5bGVAa3lsZWdyb3Zlci5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlfSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNDY1MjE4ZWUyODcwOTIzZmIwY2MiLCJzY29wZWRLZXlTZWNyZXQiOiJlMDIxY2M0ZTk2YzljZjE5YWFlNzQxODEyYjFmNjk0NmRhODQ4ZWVlOWFmMjgxN2YwZjBiYTgxNGJhNzFiZDJhIiwiaWF0IjoxNjI4MjExMjc1fQ.izTR26XGtZGrl_gCMnRmHXKL6Hvlb7w3OrZFB_Z-Zs0'
}

export const pinJSONToIPFS = async (pinataApiKey:string, pinataSecretApiKey:string, JSONBody:any) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  return axios
      .post(url, JSONBody, {
          headers: {
              pinata_api_key: pinataApiKey,
              pinata_secret_api_key: pinataSecretApiKey
          }
      })
      .then(function (response:any) {
          //handle response here
          return response.data;
      })
      .catch(function (error:any) {
          //handle error here
      });
};

let tezos: TezosToolkit;
let pollContract: WalletContract;

export const initTezos = (url: string): void => {
  tezos = new TezosToolkit(url);
  tezos.setPackerProvider(new MichelCodecPacker());
};

export const setWalletProvider = (wallet: BeaconWallet): void => {
  tezos && tezos.setProvider({ wallet });
};

export const initPollContract = async (
  pollContractAddress: string | null = null
): Promise<void> => {
  if (!pollContractAddress || tezos === null) {
    throw new Error("Poll contract address not set or Tezos not initialized");
  }
  pollContract = await tezos.wallet.at(pollContractAddress);
};

export const createPoll = async (
  category: string,
  endDate: Date,
  noOfOptions: number,
  startDate: Date,
  title: string,
  ipfsMeta: any
) => {
  return pinJSONToIPFS(hicvoteJson1.key, hicvoteJson1.secret, ipfsMeta).then(
    async (ipfsResponse: any) => {
      // console.log(ipfsResponse.IpfsHash)
      const op = await pollContract.methods
        .createPoll(
          ipfsResponse.IpfsHash,
          category,
          endDate.toISOString(),  
          noOfOptions,
          startDate.toISOString(),
          title
        ).send();
      return op.opHash;
  })
};

export const vote = async (pollId: string, option: number) => {
  const op = await pollContract.methods.vote(pollId, option).send();
  return op.opHash;
};
