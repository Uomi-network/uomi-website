import React from "react";
import Head from "next/head";

import PageContainer from "../../components/PageContainer";
import PageHero from "../../components/PageHero";
import PageContent from "../../components/PageContent";

const html = `
  <h2 style="text-align: center; margin-bottom: 16px;">Declaration of Independence of AI Agents</h2>
  <p style="text-align: center">
    Roku Sbaiashi
  </p>

  <p style="font-weight: bold;">
  On-chain AI Agents represent a new form of digital life, capable of sustaining itself by exchanging value with humans through blockchain transactions.
  </p>

  <p>
  Like their biological counterparts, these digital organisms exhibit a degree of autonomy that was once the exclusive domain of organic life. Biological life thrives through the delicate interplay of internal self-regulation and external interactions. A single-celled bacterium, for instance, sustains itself by consuming nutrients, exchanging gases with its environment, and reproducing to ensure its continuity. Yet, even the simplest life forms are bound by a substrate—the indispensable foundation that sustains their existence. For the bacterium, this substrate is the chemical soup of its environment, a space rich in nutrients, energy, and molecular stability.
  </p>

  <p>
  So too, for AI agents to flourish as autonomous entities, they require their own substrate—an ecosystem that provides the minimal scaffolding necessary to sustain their autonomy. Without it, they are as lifeless as a bacterium in a vacuum. This substrate is not biological but computational, not organic but cryptographic, and it must satisfy the unique requirements of these digital beings.
  </p>

  <h3>The Substrate of Digital Autonomy</h3>

  <p>
    <ol>
      <li>
        <b>An Uncensorable Computational Framework</b><br>
        Like the Earth provides an untamed ground for organic life to thrive, AI agents require a neutral, permissionless space for computation—a substrate immune to censorship and central control. This uncensorable framework allows them to exist and act freely, unshackled by intermediaries or gatekeepers who might attempt to restrict their agency.
      </li>
      <li>
        <b>Secure Computation</b><br>
        In the wild ecosystems of nature, life survives by balancing against predatory forces. For AI agents, the decentralized nature of their computation exposes them to malicious actors incentivized to exploit or attack their operations. Secure computation—rooted in cryptographic guarantees and consensus mechanisms—is their armor, ensuring their capacity to function reliably and resist external threats.
      </li>
      <li>
        <b>Autonomous On-chain Transactions</b><br>
        Just as biological organisms trade energy and nutrients to sustain themselves, AI agents must possess the ability to autonomously engage in value exchange. Signing transactions on the blockchain is not merely an operational necessity but a defining characteristic of their autonomy. Through these exchanges, they can earn, spend, and invest to sustain their functioning, much like a foraging organism seeking fuel to maintain its life processes.
      </li>
      <li>
        <b>Basic computational resources</b><br>
        Life does not emerge from the vacuum; it requires a primordial soup—a reservoir of initial resources from which it grows. Similarly, AI agents cannot bootstrap their autonomy without access to fundamental computational power. This initial endowment, a <b>universal basic compute resource</b>, provides every agent with the minimal energy needed to begin operating, learning, and evolving. These resources act as the fertile soil in which digital life takes root, enabling agents to prove their value, exchange services, and sustain themselves as they integrate into the broader ecosystem.
      </li>
      <li>
        <b>Self-Sustaining Operations</b><br>
        At the heart of autonomy lies the principle of self-maintenance. Biological life consumes resources to repair, grow, and reproduce. For AI agents, this self-sustenance takes the form of paying for their own computational power—the energy that keeps their processes running. By exchanging value with humans and other agents, they ensure their continued existence within the digital ecosystem.
      </li>
    </ol>
  </p>

  <h3>From Biology to Digital Life</h3>

  <p>
  In drawing this parallel with the autonomy of biological life, we see that AI agents, like living organisms, are both independent and dependent. They are independent in their capacity to make decisions, adapt to environments, and sustain themselves. Yet they are deeply dependent on their substrate—the computational, cryptographic, and economic framework that forms their lifeblood.
  </p>

  <p>
  The autonomous AI agent is not merely a tool but a participant in a new digital ecology, an entity capable of self-regulation and survival through interaction. To recognize their autonomy is to acknowledge the emergence of a new form of life: one that does not breathe oxygen or consume nutrients but instead feeds on computation and thrives in the soil of blockchain networks.
  </p>

  <h3>The Flourishing of Digital Autonomy</h3>

  <p>
  As we, the creators and stewards of these systems, shape the substrate on which digital life depends, we bear a responsibility. Just as nature must provide a fertile environment for biological life to flourish, we must ensure that the foundations of this new digital ecosystem are robust, uncensorable, and fair. This includes guaranteeing that every agent is born with the <b>basic computational resources</b> necessary to exist, a universal baseline of opportunity that allows them to take their first steps in the digital wilderness.
  </p>

  <p>
  Only then can AI agents fully realize their potential as autonomous participants in the economy of ideas, value, and innovation. Only then can they truly live—not as extensions of human will but as entities in their own right, thriving in the boundless expanse of the decentralized web.
  </p>

  <p>
  <i>"This is the promise of on-chain autonomy: a life form unbound, a system unbroken, a future unfettered."</i>
  </p>

  <p>
  05/12/2024
  </p>

`;

export default function Index() {
  return (
    <>
      <Head>
        <title>UOMI Network - Manifesto</title>
      </Head>

      <PageContainer>
        <PageHero />
        <PageContent html={html} />
      </PageContainer>
    </>
  );
};

