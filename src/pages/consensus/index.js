import React from "react";
import Head from "next/head";

import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";
import PageLatex from "../../components/PageLatex";

export default function Index() {
  return (
    <>
      <Head>
        <title>UOMI Network - Consensus</title>
      </Head>

      <PageContainer>
        <PageLatex latex='/latex/consensus.tex' />
      </PageContainer>
    </>
  );
};
