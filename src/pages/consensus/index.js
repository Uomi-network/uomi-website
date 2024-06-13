import React from "react";
import Head from "next/head";

import PageContainer from "../../components/PageContainer";
import PageDownload from "../../components/PageDownload";
import PageLatex from "../../components/PageLatex";

export default function Index() {
  return (
    <>
      <Head>
        <title>UOMI Network - Consensus</title>
      </Head>

      <PageContainer>
        <PageLatex latex='/latex/consensus.tex' />
        <PageDownload url='https://github.com/Uomi-network/uomi-whitepaper/blob/main/consensus.pdf' label='Download PDF' />
      </PageContainer>
    </>
  );
};
