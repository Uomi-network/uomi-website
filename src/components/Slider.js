import { useState, useEffect } from "react";
import Image from "next/image";
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const quotes = [
    {
      text: "UOMI is a project that you’ll want to keep on your radar.",
      source: "/assets/binance_01.png",
    },
    {
      text: "The Rise of AI Agents: a new frontier is emerging \n UOMI could reshape the entire landscape of digital interactions and transactions.",
      source: "/assets/rollingstone_01.png",
    },
    {
      text: "UOMI is setting new standards for how autonomous AI agents can operate on the blockchain.",
      source: "/assets/business-insider.png",
    },
    {
      text: "UOMI stands out as a disruptive force in the L1 space because it enables the creation of autonomous AI agents.",
      source: "/assets/venturebeat_01.png",
    },
    {
      text: "This economic security supports for the first time the integrity of interactions between AI Agents and smart contracts.",
      source: "/assets/cryptonomist_01.png",
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? quotes.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === quotes.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[400px] sm:h-[350px] overflow-hidden flex items-center justify-center text-white mb-20">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {quotes.map((quote, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex justify-center items-center"
          >
            <div className="text-center px-4 sm:px-12 lg:px-24 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto">
              <p
                className="text-lg sm:text-xl lg:text-3xl"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                &quot;{quote.text}&quot;
              </p>

              <img
                src={quote.source}
                alt="Logo"
                className="h-10 w-auto mx-auto mt-6 sm:mt-8 lg:mt-10"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 text-2xl sm:text-4xl p-2 rounded-full transition"
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "1.5em" }}
        >
          arrow_left
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 text-2xl sm:text-4xl p-2 rounded-full transition"
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "1.5em" }}
        >
          arrow_right
        </span>
      </button>
    </div>
  );
}
