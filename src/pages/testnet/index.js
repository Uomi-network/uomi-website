import React from "react";
import Head from "next/head";

import PageContainer from "../../components/PageContainer";

import PageContent from "../../components/PageContent";

const html = `
  Posso aiutarti ad aggiungere un link alla dashboard accanto all'altro link, mantenendo lo stesso stile.
Ecco il codice HTML modificato:
htmlCopy<h1 class="flex text-3xl text-center justify-center mb-40"> TESTNET </h1>
<h2>The Finney Testnet</h2>
<p>
  Welcome to the Finney Testnet, the second iteration of the UOMI Network and the initial proving ground for OPoC, our novel consensus algorithm designed to secure on-chain AI computations. Building on the foundations of Babbage, Finney supports AI models such as QWEN 2.5 (32B) and Flux 0.1, introducing optional slashing penalties (not enforced) to maintain tamper-proof inferences. It enables publishing custom AI Agents in WASM format, includes multi-VM support (EVM and WASM), and integrates IPFS for persistent storage. You can also connect AI Agents with Web2 services via ready-to-use proxies. Validators who join Finney will be eligible for UOMI token rewards at Mainnet launch.
</p>

<div class="flex justify-center gap-8 mb-20 mt-20">
  <a href="/testnet/explorers" style="font-family: 'Fira Code'" class="text-white font-bold underline hover:text-gray-200">
    Discover the UOMI Block Explorers
  </a>
  <a href="/dashboard" style="font-family: 'Fira Code'" class="text-white font-bold underline hover:text-gray-200">
    Enter the Dashboard
  </a>
</div>

<p>
 The following links allow you to interact with our first two application examples, now running on the Finney Testnet: a Chatbot Agent featuring decentralized private inference on QWEN 2.5 (32B) with knowledge of the UOMI Whitepaper, and a Twitter Agent called @HypertitionAI. Each message includes blockchain confirmations from the nodes performing a proto-OPoC consensus on the AI model, ensuring the correctness of the computations.
</p>
<a href="https://app.uomi.ai/chat" style="font-family: 'Fira Code'" class="text-white font-bold flex justify-center underline hover:text-gray-200 mb-3 mt-20" target="_blank">
Interact with the AI Chat Agent &#8599;
</a>
<a href="https://x.com/HyperstitionAI" style="font-family: 'Fira Code'" class="text-white font-bold flex justify-center underline hover:text-gray-200 mb-20 mt-3" target="_blank">
Interact with the Twitter AI Agent &#8599;
</a>
`;

export default function Index() {
  return (
    <>
      <Head>
        <title>UOMI Network - Testnet</title>
      </Head>

      <PageContainer>
        <PageContent html={html} />
      </PageContainer>
    </>
  );
}
