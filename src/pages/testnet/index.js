import React from "react";
import Head from "next/head";

import PageContainer from "../../components/PageContainer";

import PageContent from "../../components/PageContent";

const html = `
  <h1 class="flex text-3xl text-center justify-center mb-40"> TESTNET </h1>
  <h2>The Babbage Testnet</h2>
  <p>
    Welcome to the Babbage Testnet, the first iteration of the UOMI Network 
    and the testing ground for deterministic parallel inference with large-scale 
    AI models. It constitutes the foundation of the OPoC consensus algorithm, 
    proving the ability to execute deterministic computation on the latest open-source 
    LLMs and Stable Diffusion models running on heterogeneous node hardware setups. 
    It will support inferences with LLAMA 3.1 70B, and Flux.1. The AI model list 
    will be expanded in the subsequent Testnets. The Babbage testnet features 
    Multi VM framework, supporting both WASM and EVM. It features the deployment 
    of Solidity compiled smart contracts. You can use the UOMI faucet to obtain 
    testnet UOMI tokens and interact with the UOMI EVM layer.
  </p>
  <a href="https://explorer.uomi.ai/" style="font-family: 'Fira Code'" class="text-white font-bold flex justify-center underline hover:text-gray-200 mb-20 mt-20" target="_blank">
  Discover the UOMI Block Explorer &#8599;
  </a>

  <p>
    On this link, you can interact with our first application example made possible 
    by the Babbage testnet, a chatbot Agent featuring decentralized private inference 
    on LLAMA 3.1 70B with full knowledge of the UOMI WP and Consensus paper. Each 
    inference includes the links to the blockchain confirmations of the nodes performing 
    a proto-OPoC consensus on the AI model to grant the computation's correctness.
  </p>
  <a href="https://app.uomi.ai/chat" style="font-family: 'Fira Code'" class="text-white font-bold flex justify-center underline hover:text-gray-200 mb-20 mt-20" target="_blank">
  Interact with the AI Chat Agent &#8599;
  </a>
`;

export default function Index() {
  return (
    <>
      <Head>
        <title>UOMI Network - Abstract</title>
      </Head>

      <PageContainer>
        <PageContent html={html} />
      </PageContainer>
    </>
  );
}
