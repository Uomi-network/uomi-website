import React, { useRef, useEffect } from "react";
import localFont from "next/font/local";
import Link from "next/link";

const druk = localFont({
  variable: "--font-druk",
  display: "swap",
  src: [
    {
      path: "../assets/druk.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function Hero() {
  const videoContainerRef = useRef(null);
  const videoTagRef = useRef(null);

  useEffect(() => {
    if (!videoContainerRef.current || !videoTagRef.current) return;

    // set video tag width and height to match the container size and mantain the 16:9 aspect ratio
    const containerWidth = videoContainerRef.current.offsetWidth;
    const containerHeight = videoContainerRef.current.offsetHeight;
    const containerAspectRatio = containerWidth / containerHeight;
    const videoAspectRatio = 16 / 9;

    if (containerAspectRatio > videoAspectRatio) {
      videoTagRef.current.style.width = `${containerWidth}px`;
      videoTagRef.current.style.height = `${containerWidth / videoAspectRatio}px`;
    } else {
      videoTagRef.current.style.width = `${containerHeight * videoAspectRatio}px`;
      videoTagRef.current.style.height = `${containerHeight}px`;
    }
  }, [])

  const textAnimationClassName = "Hero__text-animation";
  return (
    <div className="flex-1 relative pt-6 md:pt-12 w-full h-full">
      <div className="relative justify-center flex">
        <p className={`z-10 text-3xl md:text-4xl text-white font-extrabold text-center absolute ${druk.className}`}>
          U<span className={textAnimationClassName}>NSTOPPABLE</span> O<span className={textAnimationClassName}>PEN</span> <br /> M<span className={textAnimationClassName}>ACHINE</span> I<span className={textAnimationClassName}>NTELLIGENCE</span>
        </p>
      </div>

      <div
        ref={videoContainerRef}
        className="absolute left-0 w-full overflow-hidden bottom-[-57px]"
        style={{ height: "calc(100% + 57px)" }}
      >
        <video
          ref={videoTagRef}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover absolute top-[100px] md:top-0 left-1/2 transform -translate-x-1/2"
        >
          <source src="/assets/video-home-bg.mp4" type="video/mp4" />
        </video>
       </div>

      {/* <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <Link
          href="/abstract"
          className="bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-primary hover:text-white"
        >
          Discover more
        </Link>
      </div> */}
    </div>
  )
}