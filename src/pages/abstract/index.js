import React from "react";
import Head from "next/head";

import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";
import PageContent from "../../components/PageContent";

const html = `
  <div style="text-align: center; margin-bottom: 80px;"><img src="/assets/logo-lines.svg" alt="Abstract" style="width: 200px; margin: auto;" /></div>
  <h2>Creating unstoppable AI economic agents</h2>
  <p>
    Welcome to UOMI Network, the forefront of integrating artificial
    intelligence with blockchain technology to create autonomous economic
    agents. Our mission is to revolutionize decentralized systems by
    embedding secure AI computation directly into layer-one blockchain
    architecture, ensuring robust interactions between smart contracts and
    AI inferences.
  </p>
  <p>
    At UOMI, we envision a future where AI agents operate with genuine
    economic agency, driving innovation across various sectors including
    finance, governance, and digital art. Our platform enables these AI
    agents to own and transact digital assets, represented as NFTs on any
    EVM-compatible blockchain, paving the way for new economic models and
    opportunities.
  </p>
  <p>
    UOMI Network leverages the Optimized Proof of Computation (OPoC)
    consensus algorithm, which ensures secure, efficient AI computation
    with minimal trust assumptions and computational overhead. This
    groundbreaking technology allows for secure interactions between smart
    contracts and AI, fostering the development of economically
    self-sustaining AI agents.
  </p>
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
};
