import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { GoogleAnalytics } from '@next/third-parties/google'

import dynamic from 'next/dynamic'
const Hero3d = dynamic(() => import('../components/Hero3d'), { ssr: false })

const TITLE = "UNSTOPPABLE AI ECONOMIC AGENTS"

export default function Index() {
  const heroModelLoaded = useRef(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!heroModelLoaded.current) return;
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
      return TITLE
      // const textAnimationClassName = "text-animation-pulse"
      // return (
      //  <>
      //    U<span className={textAnimationClassName}>NSTOPPABLE</span> O<span className={textAnimationClassName}>PEN</span> M<span className={textAnimationClassName}>ACHINE</span> I<span className={textAnimationClassName}>NTELLIGENCE</span>
      //  </>
      // )
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
        className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center"
        style={{
          opacity: heroModelLoaded.current ? 0 : 1,
          transition: "opacity 0.5s",
        }}
      >
        <div className="loader"><div></div><div></div></div>
      </div>

      <div
        className="flex-1 flex flex-col relative w-full h-full"
        style={{
          opacity: heroModelLoaded.current ? 1 : 0,
          transition: "opacity 0.5s",
        }}
      >
        <div className="relative justify-center items-center flex px-6 h-[125px]">
          <p className={`text-3xl md:text-4xl text-white font-lighter text-center font-mono`}>
            {renderTitle()}
          </p>
        </div>

        <Hero3d
          className="relative flex-1 w-full h-full"
          onModelLoaded={() => {
            heroModelLoaded.current = true;
          }}
        />
      </div>

      <GoogleAnalytics gaId="G-6RC95X38DQ" />
    </>
  );
}
