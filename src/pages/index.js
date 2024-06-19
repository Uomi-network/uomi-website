import React, { useState, useEffect } from "react";
import Head from "next/head";

import dynamic from 'next/dynamic'
const Hero3d = dynamic(() => import('../components/Hero3d'), { ssr: false })

const TITLE = "UNSTOPPABLE OPEN MACHINE INTELLIGENCE"

export default function Index() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 100)

    return () => {
      clearInterval(interval);
    }
  }, [])

  const renderTitle = () => {
    if (counter < TITLE.length) {
      return TITLE.slice(0, counter)
    } else {
      const textAnimationClassName = "Hero__text-animation"
      return (
        <>
          U<span className={textAnimationClassName}>NSTOPPABLE</span> O<span className={textAnimationClassName}>PEN</span> M<span className={textAnimationClassName}>ACHINE</span> I<span className={textAnimationClassName}>NTELLIGENCE</span>
        </>
      )
    }
  }

  return (
    <>
      <Head>
        <title>Uomi Network</title>
        <meta
          name="description"
          content="UOMI Network - Creating unstoppable AI economic agents."
        />
      </Head>

      <div
        className="flex-1 relative pt-0 md:pt-12 w-full h-full"
      >
        <div className="relative justify-center flex z-10">
          <p className={`z-10 text-3xl md:text-4xl text-white font-lighter text-center absolute font-mono px-6`}>
            {renderTitle()}
          </p>
        </div>

        <Hero3d className="absolute top-0 left-0 w-full h-full pt-24" />
      </div>
    </>
  );
}
