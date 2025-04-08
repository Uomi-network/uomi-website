import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";

import dynamic from "next/dynamic";
import Slider from "../components/Slider";
const Hero3d = dynamic(() => import("../components/Hero3d"), { ssr: false });

const TITLE = "UNSTOPPABLE AI ECONOMIC AGENTS";

const LOGHI_PARTNER = [
  { src: "/assets/over.png", alt: "Over" },
  { src: "/assets/seedify.png", alt: "Seedify" },
  { src: "/assets/cookie3.png", alt: "cookie3" },
  { src: "/assets/aethir.png", alt: "aethir" },
  { src: "/assets/eesee.png", alt: "eesee" },
  { src: "/assets/sweat-wallet.png", alt: "sweat wallet" },
  { src: "/assets/ethermail.png", alt: "ethermail" },
  {
    src: "/assets/impossible-cloud-network.svg",
    alt: "impossible-cloud-network",
  },
  {
    src: "/assets/aitech-pad.png",
    alt: "aitech-pad",
  },
  {
    src: "/assets/ankr.png",
    alt: "ankr",
  },
  {
    src: "/assets/heurist.png",
    alt: "heurist",
  },
  {
    src: "/assets/io-net.png",
    alt: "io-net",
  },
  {
    src: "/assets/inferix.png",
    alt: "inferix",
  },
  {
    src: "/assets/paid.png",
    alt: "paid",
  },
  {
    src: "/assets/poolz.png",
    alt: "poolz",
  },
  {
    src: "/assets/sentient-labs.png",
    alt: "sentient-labs",
  },
];

export default function Index() {
  const heroModelLoaded = useRef(false);
  const [counter, setCounter] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!heroModelLoaded.current) return;
      setCounter((prevCounter) => prevCounter + 1);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderTitle = () => {
    if (counter < TITLE.length) {
      return TITLE.slice(0, counter);
    } else {
      return TITLE;
      // const textAnimationClassName = "text-animation-pulse"
      // return (
      //  <>
      //    U<span className={textAnimationClassName}>NSTOPPABLE</span> O<span className={textAnimationClassName}>PEN</span> M<span className={textAnimationClassName}>ACHINE</span> I<span className={textAnimationClassName}>NTELLIGENCE</span>
      //  </>
      // )
    }
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center"
        style={{
          opacity: heroModelLoaded.current ? 0 : 1,
          transition: "all 0.5s",
          zIndex: heroModelLoaded.current ? -1 : 100,
        }}
      >
        <div className="loader">
          <div></div>
          <div></div>
        </div>
      </div>
      <div
        className="flex-1 flex flex-col relative w-full"
        style={{
          opacity: heroModelLoaded.current ? 1 : 0,
          transition: "opacity 0.5s",
        }}
      >
        <div className="relative justify-center items-center flex px-6 h-[125px]">
          <p
            className={`text-3xl md:text-4xl text-white font-lighter text-center font-mono`}
          >
            {renderTitle()}
          </p>
        </div>

        <Hero3d
          className="relative w-full h-[600px]"
          onModelLoaded={() => {
            heroModelLoaded.current = true;
          }}
        />
      </div>

      {
        //to allow scrolling on mobile
        isMobile && (
          <div className="absolute top-0 left-0 w-full h-[700px] z-10"></div>
        )
      }
      <div className="relative w-full h-screen flex flex-col sm:flex-row justify-center items-center my-52 md:my-1">
        <div className="absolute inset-0 z-0">
          <video
            src="/assets/sfondo-logo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute object-cover w-full h-full"
            style={{
              opacity: 0.55,
            }}
          />
          <div
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 60%)",
            }}
          ></div>
        </div>

        <div className="absolute inset-0 z-10 flex justify-center items-center flex-col gap-6 px-4 py-12 sm:px-6">
          <h1 className="text-xl text-white font-mono text-center mb-10">
            PARTNERSHIPS
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {LOGHI_PARTNER.map((logo, index) => (
              <div
                key={index}
                className={`w-full max-w-[160px] sm:max-w-[200px] md:max-w-[265px] h-auto aspect-w-16 aspect-h-9 bg-[rgba(0,0,0,0.55)] rounded-md flex justify-center items-center p-6 ${
                  logo.src == "/assets/sweat-wallet.png" ||
                  logo.src == "/assets/ethermail.png"
                    ? "sm:px-0 md:px-10"
                    : "sm:px-0 md:px-16"
                }`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-auto max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Slider />
      <ScrollHint />
      <GoogleAnalytics gaId="G-6RC95X38DQ" />
    </>
  );
}

const ScrollHint = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 
                  transition-opacity duration-500 pointer-events-none 
                  ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="bg-black bg-opacity-70 text-white text-lg font-semibold px-4 py-1 rounded flex items-center">
        <span className="material-symbols-outlined animate-bounce text-3xl">
          keyboard_arrow_down
        </span>
      </div>
    </div>
  );
};
