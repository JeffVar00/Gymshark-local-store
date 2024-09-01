"use client";

import React from "react";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <button
        onClick={scrollToTop}
        className="flex items-center mt-4 md:mt-0 font-semibold text-webprimary hover:text-gray-500"
      >
        Back to Top
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default BackToTop;
