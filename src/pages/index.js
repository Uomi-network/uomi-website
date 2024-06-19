import React from "react";
import Head from "next/head";
import Hero from "../components/Hero";

export default function Index() {
  return (
    <>
      <Head>
        <title>Uomi Network</title>
        <meta
          name="description"
          content="UOMI Network - Creating unstoppable AI economic agents."
        />
      </Head>

      <Hero />
    </>
  );
}
