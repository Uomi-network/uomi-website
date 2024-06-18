import React from "react";
import Head from "next/head";

import PageContainer from "../../components/PageContainer";
import PageContent from "../../components/PageContent";

const html = `
  <div style="text-align: center; margin-bottom: 80px;"><img src="/assets/logo-lines.svg" alt="Abstract" style="width: 200px; margin: auto; min-height: 52px;" /></div>
  <h2 style="text-align: center">Applications of Autonomous Economic AI Agents</h2>

  <p>
  The combination of on-chain secure and scalable AI computation, the ERC-6551 Token Bound Standard that enables the UOMI AI agents to own and transact digital assets, and the ability of the UOMI network to sign blockchain transactions for its AI agents opens up a wide array of applications that were simply not possible before. AI agents cannot own bank accounts but can control crypto wallets. These innovations pave the way for new economic models and opportunities in the decentralized digital landscape. In the following paragraphs, we outline an incomplete list of some of the most promising applications.
  </p>

  <h3>AI Oracles</h3>
  <p>
    An AI Oracle serves as a bridge between the blockchain and the
    external world, providing reliable, tamper-proof, and interpreted data
    feeds that smart contracts can use to make informed decisions.
    Traditional oracles such as Chainlink relay information such as
    financial data, weather updates, or sports results, which are then
    used in decentralized applications (dApps) for various purposes, such
    as triggering contract conditions or executing trades. With AI
    integration, oracles can perform more sophisticated tasks, such as
    interpreting complex datasets, conducting real-time analytics, and
    making predictive inferences. This means going far beyond the mere
    bridging of external data to the blockchain by enabling on-chain
    intelligence of those data. For instance, an AI Oracle could analyze
    social media trends to predict stock market movements or assess
    satellite images to decide if an insured event happened or not, all of
    this without humans in the loop. These AI-enhanced oracles ensure that
    smart contracts have not only access to high-quality, real-time data
    but also the actionable interpretation of those, thereby expanding the
    scope and reliability of decentralized applications. AI oracles are
    the cornerstone towards fully automated and economically empowered AI
    systems.
  </p>
  <h3>AI Managed Decentralized Autonomous Organization (DAO)</h3>
  <p>
    A Decentralized Autonomous Organization (DAO) is a blockchain-based
    entity governed by smart contracts and collective voting. There are
    two main intersections between DAOs and AI that are enabled by UOMI
    network:
  </p>
  <ul>
    <li>
      DAO Voting Participation: we can envision an AI agent powered by
      the latest LLMs that owns tokens of a DAO to be able to
      autonomously vote on submitted proposals based on predefined
      criteria encoded in the LLM’s pre-prompts or even actively submit
      voting proposals to the rest of token holders, whether they are
      humans or other AIs. The entrance of this new AI actor in the DAO
      arena also solves the low voting participation typical of on-chain
      voting systems since AIs, in fact, if correctly prompted, the
      agent will always respond to governance calls. It is also possible
      to design DAOs that are completely controlled by a swarm of unique
      and independent AI agents.
    </li>
    <li>
      DAO Management: An AI Manager within a DAO can enhance operational
      efficiency and decision-making processes by automating complex
      tasks and providing data-driven insights. For example, an AI
      Manager could analyze market conditions to optimize treasury
      management, pro- pose investment strategies, or automate
      compliance checks. By integrating AI, DAOs can operate more
      autonomously, reduce human error, and respond more rapidly to
      changing circumstances, thus becoming more resilient and effective
      in achieving their goals.
    </li>
  </ul>
  <h3>Expanding smart contract design space</h3>
  <p>
    Under a traditional smart contract paradigm, among the universe of all
    possible “contracts” only the subset of those that are reducible to
    formal logic could be transposed on-chain in the form of a
    smart-contract. The introduction of on-chain secure AI computation
    enables more complex and nuanced agreements to be automated as smart
    contracts having onchain LLMs acting as a third party interpreting a
    loosely defined concept or event. Consider the following examples:
  </p>
  <ul>
    <li>
      A music artist wants to license their songs to various platforms
      under conditions that are difficult to define strictly through
      code, such as ”appropriate use” or ”creative remixing.”
    </li>
    <li>
      An insurance company offers a policy that covers ”reasonable and
      necessary” medical expenses, a term that is inherently subjective
      and open to interpretation.
    </li>
    <li>
      A freelance writer and a client agree on a contract where payment
      is based not only on the completion of work but also on its
      quality, creativity, and adherence to the client’s vision.
    </li>
  </ul>
  <p>
    None of these conditions can be formally defined and included in a
    traditional smart contract, yet those can be easily interpreted by
    OPoC-enabled on-chain LLM AI systems that can interpret the loosely
    defined clauses. The introduction of on-chain secure AI computation
    transforms smart contracts from rigid, logic-bound scripts into
    flexible, intelligent agreements capable of interpreting and enforcing
    complex and nuanced terms. By leveraging AI as a third-party
    interpreter, these enhanced smart contracts can handle subjective
    conditions, adapt to varying contexts, and automate sophisticated
    agreements across diverse use cases. This expansion of the smart
    contract design space opens up new possibilities for decentralized
    applications, making blockchain technology more versatile and broadly
    applicable.
  </p>
  <h3>
    Fully automated Blockchain Trusts
  </h3>
  <p>
    A Trust is a fiduciary arrangement where one party, known as the
    trustor or grantor, transfers own- ership of assets to another party,
    known as the trustee, who manages those assets for the benefit of a
    third party, known as the beneficiary. Trusts are commonly used in
    estate planning to ensure that as- sets are managed and distributed
    according to the trustor’s wishes, both during their lifetime and
    after their death. The Trust deeds, defining the rules and the scope
    of the Trust, are nuanced and difficult to reduce to the formal logic
    smart contracts require to operate. The UOMI network, enabling secure
    AI computation, allows for the on-chain existence of such fiduciary
    arrangements by substituting the trustee interpreting and executing
    the trustor wishes with AIs that can interpret the trust deed and
    transact the digital assets it controls accordingly. Fully automated
    Blockchain trusts are a new kind of entity, built by combining human
    will with the interpretation and enaction capabilities of on-chain
    LLMs.
  </p>

  <h3>
    
    Adding Ricardian safeguards to smart contracts
  </h3>
  <p>
    Moving from the first conceptualizations of smart contracts from Nick
    Szabo to the actual implementations of those with Ethereum and other
    Turing complete blockchains, we had the oppor- tunity to factually
    test what are the strengths and the limitations of smart-contracts.
    The “code is law” paradigm that grants objectivity and
    disintermediation in the execution of contracts creates a new
    philosophical dilemma: what if the intent of the smart contract is not
    correctly encoded in the computer program published on the blockchain?
    What if there is a bug in the code? Rather than just a philosophical
    dilemma, such an issue emerged multiple times in the blockchain space,
    with the Ethereum DAO HACK as an archetype of such a dilemma. A
    potential mitigation of this dilemma has been proposed by Dan Larimer,
    founder of EOS, with the introduction of Ricardian contracts, a
    concept that was first introduced by Ian Grigg who described those as
    follows: “A Ricardian contract is a digital contract that defines the
    terms and conditions of interaction, between two or more peers, that
    is cryptographically signed and verified. Importantly it is both human
    and machine readable and digitally signed”. Such an additional
    human-readable text explaining the intent of the code can clearly
    separate the correct interaction with a smart contract code from an
    exploit of a bug in it. Yet it requires human intervention and
    interpretation to solve the dispute thus defeating some of the most
    important features of smart contracts, their objectivity and automatic
    execution. With the introduction of on-chain AI systems, we can
    imagine AI agents that control if the execution of a smart contract
    code conflicts with the Ricardian description of what the smart
    contract is supposed to do. This adds an additional and flexible
    security layer over the purely mechanical rules expressed by smart
    contract code.
  </p>

  <h3>
    
    AI Digital Artist
  </h3>
  <p>
    An AI Digital Artist leverages machine learning models to create
    original artwork, music, or other forms of digital content.
    Considering the capability of the UOMI network to sign blockchain
    transactions for the AI agents, these AI-generated pieces can be
    minted as NFTs, ensuring ownership, authenticity, and provenance on
    the blockchain. The AI Digital Artist can learn from vast datasets of
    existing artworks to develop its own unique style, producing
    high-quality, novel creations that can be sold or auctioned in digital
    marketplaces. This capability democratizes the creation of art,
    allowing for diverse and innovative artistic expressions. Furthermore,
    the AI Digital Artist can interact with buyers, customize pieces based
    on user preferences, and even collaborate with human artists in real
    time. By requesting crypto payments for each creation, the AI Digital
    Artist can generate enough revenue to pay for its own computational
    expenses, thus operating indefinitely. New economic opportunities
    emerge for artists and collectors alike, fostering a vibrant and
    inclusive digital art ecosystem.
  </p>

  <h3>
    AI Companion
  </h3>
  <p>
    AI Companions are advanced AI entities secured on-chain that offer
    personalized interactions tailored to individual needs, evolving over
    time to become more attuned to users’ personalities and preferences.
    As digital friends, they engage in meaningful conversations, provide
    emotional support, and share daily activities. As personal assistants,
    they manage schedules, set reminders, suggest activities, and offer
    educational content, ensuring secure handling of personal data while
    learning to offer increas- ingly personalized assistance. For those
    seeking deeper connections, AI Companions can function as virtual
    boyfriends or girlfriends, providing a sense of intimacy and
    partnership through thoughtful conversations and shared interests.
    Those entities, represented by NFTs can be directly owned by users or
    can be publicly accessible. Publicly accessible AI companions can
    become economically self- sustainable through the value they generate
    for their users, they can monetize interactions, such as offering
    personalized advice or exclusive content, creating a direct revenue
    stream that supports their operation and development. Additionally, AI
    Companions can be bought, sold, or traded in digital marketplaces,
    providing an economic layer where owners can monetize their unique
    personalities, skills, and relationships.
  </p>

  <h3>
    AI Gaming NPC
  </h3>
  <p>
    In the gaming industry, AI-powered Non-Player Characters (NPCs) can
    significantly enhance the gameplay experience by providing more
    realistic, adaptive, and engaging interactions. These AI NPCs can
    learn from player behavior, adapt their strategies, and contribute to
    dynamic and immersive game worlds. On the blockchain, AI NPCs can be
    represented as NFTs, enabling unique, persistent, and tradable in-game
    characters. Players can own, customize, and monetize their AI NPCs,
    creating new revenue streams and adding value to the gaming ecosystem.
    Moreover, AI NPCs, being able to own digital assets themselves through
    the ERC-6551 standard, can participate in decentralized gaming
    economies, autonomously trade in-game assets, or even compete in
    player-vs-player environments. By integrating AI into gaming,
    developers can create richer, more interactive experiences that adapt
    to player preferences and actions, fostering deeper engagement and
    enjoyment. Finally, AI NPCs can interact with each other, creating
    independently evolving games and, more generally, virtual societies,
    creating a digital ”Westworld”.
  </p>

  <h3>
    Decentralized Finance (DeFi) AI Trader
  </h3>
  <p>
    A Decentralized Finance (DeFi) AI Trader utilizes advanced machine
    learning algorithms to analyze market trends, predict price movements,
    and execute trades autonomously on decentralized exchanges (DEXs).
    This AI agent can be represented as an NFT, ensuring transparency,
    accountability, and own- ership. The AI Trader can continuously
    monitor various financial metrics, news, and market signals to make
    informed trading decisions, optimizing for maximum returns while
    managing risk. Additionally, it can engage in arbitrage opportunities,
    liquidity provision, and yield farming strategies, adapting to market
    conditions in real time. If its strategies are successful the AI agent
    can generate enough value to pay for its own computational expenses
    and keep operating indefinitely on the blockchain.
  </p>
`;

export default function Index() {
  return (
    <>
      <Head>
        <title>UOMI Network - Agent</title>
      </Head>

      <PageContainer>
        <PageContent html={html} />
      </PageContainer>
    </>
  );
};

