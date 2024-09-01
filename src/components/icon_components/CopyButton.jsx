"use client";

import React, { useState } from "react";

const CopyButton = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      // On mobile devices, open the native share menu
      if (navigator.share) {
        navigator
          .share({
            title: document.title,
            url: window.location.href,
          })
          .catch(console.error);
      } else {
        alert("Share not supported");
      }
    } else {
      // On larger screens, copy the link to the clipboard
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 5000); // Hide the tooltip after 2 seconds
        })
        .catch((err) => console.error("Failed to copy text: ", err));
    }
  };

  return (
    <div className="flex space-x-4 mt-4">
      <div className="relative">
        <button
          onClick={handleCopyLink}
          className="font-bold px-3 py-1 rounded-xl hover:bg-gray-200 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isCopied && !window.matchMedia("(max-width: 768px)").matches && (
          <div
            className={`absolute w-32 left-1/2 transform -translate-x-1/2 -top-14 bg-black text-white text-sm px-3 py-1 rounded opacity-0 animate-fadeInOut`}
          >
            <div className="relative p-2 w-full font-bold">
              Link copied!
              <div className="absolute left-1/2 transform -translate-x-1/2 top-8 w-2.5 h-2.5 bg-black rotate-45"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CopyButton;
