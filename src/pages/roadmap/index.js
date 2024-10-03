import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const RoadmapItem = ({
  title,
  subtitle,
  description,
  content,
  date,
  last = false,
}) => (
  <div className="flex pb-24 relative">
    {!last && (
      <div
        className="absolute top-5 h-full bottom-0 w-0.5 bg-white"
        style={{ left: "-0.9rem" }}
      ></div>
    )}
    <div
      className="w-8 h-8 border-[1px] border-white rounded-full absolute top-1.5 z-10"
      style={{ left: "-1.8rem", backgroundColor: "black" }}
    >
      <div
        className="w-1 h-1 border-2 border-white rounded-full absolute top-1.5 z-10"
        style={{ left: "0.755rem", top: "0.755rem", backgroundColor: "white" }}
      />
    </div>
    <div className="ml-8">
      <h3 className="text-4xl font-bold text-white">
        {title}{" "}
        {subtitle && (
          <span className="font-normal text-xl text-white">({subtitle})</span>
        )}
      </h3>
      <p className="text-white text-xl mt-1 mb-10">{description}</p>
      <p
        className={`text-sm text-white mt-2 mb-5 `}
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        {content}
      </p>
      <p className="text-lg font-bold text-white mt-2">{date}</p>
    </div>
  </div>
);

const RoadmapUomi = () => (
  <div
    className="text-white p-8 font-sans flex flex-col items-center"
    style={{ fontFamily: "Fira Code", maxWidth: "120rem" }}
  >
    <h1 className="text-4xl font-normal text-center mt-18 mb-10">
      UOMI BLOCKCHAIN ROADMAP
    </h1>
    <h2 className={`text-xl mb-32 text-center ${inter.className}`}>
      Road to Mainnet
    </h2>

    <div className="relative sm:px1 md:px-72">
      {/* <div
        className="absolute top-2 bottom-10 h-full w-0.5 bg-white"
        style={{ left: "17.1rem" }}
      ></div> */}

      <RoadmapItem
        title="Babbage"
        subtitle="testnet"
        description="Decentralized parallel inference"
        content="The Babbage Testnet is the testing ground for deterministic parallel inference with large-scale AI models. It constitutes the foundation of the OPoC consensus algorithm. It will support inferences with LLAMA 3.1 70B (8 Bit Quantized) and Flux.1. The model's list will be expanded in the subsequent testnets. The Babbage Testnet features a multi-VM framework, supporting both WASM and EVM. It features the deployment of Solidity-compiled smart contracts."
        date="Q3 - 2024"
      />

      <RoadmapItem
        title="Finney"
        subtitle="testnet"
        description="Agents ability to control crypto assets"
        content="The Finney Testnet adds Treshold Signature Scheme (TSS) distributed key generation and signing. This feature enables nodes to sign transactions on behalf of the AI Agents. It will be possible to publish WASM-defined custom AI Agents. The testnet includes IPFS support to store custom AI Agents configuration and memory."
        date="Q4 - 2024"
      />

      <RoadmapItem
        title="Turing"
        subtitle="testnet"
        description="OPoC consensus"
        content=" 
 	
The Turing Testnet implements the OPoC consensus algorithm for secure and efficient AI computation. Turing is an incentivized testnet. Third-party node operators will be able to stake and join the network. Slashing and inactivity leak will be implemented but not applied to stakers. The Turing Testnet also enables cross-chain transaction signing, allowing AI Agents to sign transactions on arbitrary blockchains."
        date="Q1 - 2025"
      />

      <RoadmapItem
        title="Mainnet"
        subtitle=""
        description="Decentralized Governance and Bridges"
        content="After thorough testing with the Turing Testnet, the OPoC algorithm will be implemented on the mainnet, enabling AI Agents to securely control valuable digital assets. The mainnet launch includes the creation of the UOMI DAO and a decentralized bridge between Ethereum and UOMI to enable staking with the pre-minted supply for nodes operators, indirect stakers, and VeUOMI holders."
        date="Q2 - 2025"
        last
      />
    </div>
  </div>
);

export default RoadmapUomi;
