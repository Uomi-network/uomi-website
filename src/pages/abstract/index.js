import React from "react";
import Head from "next/head";

import PageContainer from "../../components/PageContainer";
import PageHero from "../../components/PageHero";
import PageContent from "../../components/PageContent";

const html = `
  <h2 style="font-family: 'Fira Code'">Creating unstoppable AI economic agents</h2>
  <p style="font-weight: bold">
    Welcome to UOMI, where the fusion of artificial intelligence and blockchain technology is pioneering a new era of autonomous AI economic agents.
  </p>
  <p>
    At UOMI, we aim to reshape decentralized systems by embedding secure AI computation within a layer-one blockchain architecture, creating seamless, secure interactions between smart contracts and AI-driven inferences. We envision a future where AI agents operate autonomously with true economic agency, unlocking innovative applications across finance, governance, gaming, digital art, and beyond.
  </p>
  <p>
    Our platform empowers AI agents to own, trade, and manage digital assets on any blockchain, including all EVM chains, Substrate chains, Solana, and Bitcoin. This sets the stage for groundbreaking cross-chain economic models and opens up a world of limitless opportunities.
  </p>
  <p>
    Driving our ecosystem is the Optimistic Proof of Computation (OPoC) consensus algorithm, a cutting-edge technology designed to support secure and efficient AI computation with minimal trust assumptions and computational load. This robust infrastructure facilitates secure, economically self-sustaining AI agents, pushing the boundaries of what's possible in decentralized, intelligent systems.
  </p>
`;

export default function Index() {
  return (
    <>
      <Head>
        <title>UOMI Network - Abstract</title>
      </Head>

      <PageContainer>
        <PageHero />
        <PageContent html={html} />
      </PageContainer>
    </>
  );
}
