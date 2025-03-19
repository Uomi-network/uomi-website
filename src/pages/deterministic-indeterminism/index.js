import React from "react";
import Head from "next/head";

import PageContainer from "../../components/PageContainer";
import PageLatex from "../../components/PageLatex";
import PageDownload  from "../../components/PageDownload";

export default function Index() {
  return (
    <>
      <Head>
        <title>UOMI Network - Deterministic indeterminism</title>
      </Head>

      <PageContainer>
        <PageLatex latex='/latex/deterministic-indeterminism.tex' date='2025, 2, 1' />
        <PageDownload url='https://github.com/Uomi-network/uomi-whitepaper/blob/main/Deterministic-Indeterminism.pdf' label='Download PDF' />
      </PageContainer>
    </>
  );
};
