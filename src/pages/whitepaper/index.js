import React from "react";
import Head from "next/head";

import PageContainer from "../../components/PageContainer";
import PageTitle from "../../components/PageTitle";
import PageLatex from "../../components/PageLatex";
import PageDownload  from "../../components/PageDownload";

export default function Index() {
  return (
    <>
      <Head>
        <title>UOMI Network - Whitepaper</title>
      </Head>

      <PageContainer>
        <PageLatex latex='/latex/whitepaper.tex' />
        <PageDownload url='https://github.com/Uomi-network/uomi-whitepaper/blob/main/whitepaper.pdf' label='Download PDF' />
      </PageContainer>
    </>
  );
};
