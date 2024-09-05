"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

function ListToBottomList({ title, references }) {
  const [isMdOrSmaller, setIsMdOrSmaller] = useState(false);

  useEffect(() => {
    // Check screen size on the client side only
    const handleResize = () => setIsMdOrSmaller(window.innerWidth <= 1025);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [pagesOpen, setPagesOpen] = useState(false);

  const togglePages = () => setPagesOpen(!pagesOpen);

  return (
    <div className="w-full lg:w-auto border-b-2 lg:border-0 lg:pr-4">
      <div
        className="flex justify-between items-center cursor-pointer lg:cursor-default py-4 lg:py-0 no-tap-highlight"
        onClick={isMdOrSmaller ? togglePages : undefined}
      >
        <h1 className="text-sm font-bold lg:mb-4">{title}</h1>
        <span className="text-xl font-bold lg:hidden">
          {pagesOpen ? "-" : "+"}
        </span>
      </div>
      <ul
        className={`text-sm font-semibold text-gray-500 space-y-2 transition-all duration-300 ease-in-out ${
          pagesOpen
            ? "max-h-screen mb-4 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        } lg:max-h-screen lg:opacity-100`}
      >
        {references.map((reference) => (
          <li key={reference.id}>
            <Link href={reference.link} className="hover:text-webprimary">
              {reference.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListToBottomList;
