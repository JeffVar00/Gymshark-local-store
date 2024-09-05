"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: undefined });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const Header = ({ details }) => {
  const { width } = useWindowSize();
  return (
    <div className="flex flex-col h-[calc(80vh-6rem)] md:h-auto md:aspect-[21/9] bg-cover bg-center md:flex-row md:items-center relative">
      <Image
        src={width >= 768 ? details.mdsrc : details.smsrc}
        alt="Background Image"
        fill="responsive"
        className="absolute inset-0 z-0 object-cover"
        priority={true}
        sizes="(max-width: 1080px) 100vw, 768px"
      />
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col items-start bg-gradient-to-t md:bg-gradient-to-r via-80%  from-webprimary via-transparent to-transparent text-start gap-4 p-6 justify-end md:justify-center md:pb-0 md:px-14 relative z-10 h-full">
        <h1 className="text-websecundary text-2xl font-bold md:text-3xl md:max-w-xl xl:text-6xl">
          {details.title}
        </h1>
        <p className="text-websecundary break-words md:max-w-sm text-md xl:max-w-xl xl:text-xl">
          {details.description}
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-2 lg:mt-6 w-full">
          {details.buttons.map((button, index) => (
            <Link key={index} href={button.ref}>
              <button className="bg-websecundary text-sm text-webprimary rounded-full py-3 px-8 font-bold w-full lg:w-48 uppercase">
                {button.text}
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* ANIMATED ARROW */}
      <div className="hidden md:absolute md:flex bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce text-websecundary cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
