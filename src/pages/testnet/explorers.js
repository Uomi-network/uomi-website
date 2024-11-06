import React from "react";
import Head from "next/head";

import PageContainer from "../../components/PageContainer";

import PageContent from "../../components/PageContent";

const html = `
  <p style="text-align: center;">
    UOMI offers two distinct types of explorers: one set for querying the EVM API and another specifically for the Substrate API. All EVM-based transactions can be accessed through the EVM API, whereas the Substrate API is used for Substrate-native functionalities like the OPoC consensus, governance and staking. While the Substrate API does provide details about EVM-based transactions, the information displayed is limited.
  </p>
  <div class="flex flex-col md:flex-row justify-center items-center mb-20 mt-20">
    <a href="https://subexp.uomi.ai/" style="font-family: 'Fira Code'" class="text-white font-bold flex justify-center underline hover:text-gray-200 mb-4 md:mb-0 md:mr-4" target="_blank">
    LINK to Substrate Block Explorer &#8599;
    </a>
    <a href="https://explorer.uomi.ai/" style="font-family: 'Fira Code'" class="text-white font-bold flex justify-center underline hover:text-gray-200 md:ml-4" target="_blank">
    Link to EVM Block Explorer &#8599;
    </a>
  </div>
`;

export default function Index() {
  return (
    <>
      <Head>
        <title>UOMI Network - Testnet explorers</title>
      </Head>

      <PageContainer>
        <PageContent html={html} />
      </PageContainer>
    </>
  );
}
