"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = ({ details, nextSectionRef }) => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState("");

  useEffect(() => {
    const updateUrls = () => {
      if (window.innerWidth >= 768) {
        // For medium and larger screens
        setBackgroundImageUrl(details.mdsrc);
      } else {
        // For small screens
        setBackgroundImageUrl(details.smsrc);
      }
    };
    updateUrls();
    window.addEventListener("resize", updateUrls);

    return () => window.removeEventListener("resize", updateUrls);
  }, [details.smsrc, details.mdsrc]);

  const handleArrowClick = () => {
    if (nextSectionRef && nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="flex flex-col w-screen h-[calc(100vh-6rem)] md:h-auto md:aspect-[21/9] bg-cover bg-center md:flex-row bg-[url({smsrc}')] md:bg-[url('/banner.png')] md:items-center relative"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col items-start text-start gap-4 pb-24 px-6 md:pb-0 md:px-14 justify-end relative z-10">
        <h1 className="text-websecundary text-2xl md:text-3xl max-w-md md:max-w-xl font-bold xl:text-6xl">
          {details.title}
        </h1>
        <p className="text-websecundary text-sm md:text-md xl:text-xl break-words max-w-sm xl:max-w-xl">
          {details.description}
        </p>
        <div className="flex flex-row gap-4">
          {details.buttons.map((button, index) => (
            <Link key={index} href={button.ref}>
              <button
                backgroundimage={button.color}
                className="bg-websecundary text-webprimary rounded-full py-3 px-6 font-bold w-full md:w-48"
              >
                {button.text}
              </button>
            </Link>
          ))}
        </div>
      </div>
      {/* ANIMATED ARROW */}
      <div className="hidden md:absolute md:flex bottom-6 left-1/2 transform -translate-x-1/2">
        <div
          className="animate-bounce text-websecundary cursor-pointer"
          onClick={handleArrowClick}
        >
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
