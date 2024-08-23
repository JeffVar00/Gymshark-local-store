"use client";

import React, { useState } from "react";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const DesktopSearchMenu = ({ toggleMenu, searchText, handleSearch }) => {
  return (
    <div>
      <div className="flex justify-start items-center h-12 w-1/3 p-4 rounded-md text-start font-normal bg-gray-200 focus-within:border-2 focus-within:border-webprimary">
        <MagnifyingGlassIcon className="block h-6 w-6" />
        <input
          id="search_input"
          type="text"
          placeholder={searchText}
          onChange={handleSearch}
          className="flex ml-3 text-sm bg-transparent outline-none text-gray-500 w-full"
        />
        <label
          htmlFor="search_input"
          className="my-3 ml-9 text-sm absolute bg-transparent outline-none text-gray-500 pointer-events-none"
        >
          {searchText ? "" : "Search for a Product"}
        </label>
      </div>
      <div className="flex justify-end p-4">
        <button onClick={toggleMenu} className="text-gray-700">
          <XMarkIcon className="h-8 w-8" />
        </button>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
        />
      </svg>

      {/* Add your menu content here */}
      <div className="p-4">
        <h2 className="text-2xl font-bold">Search Menu</h2>
        {/* Add more menu items here */}
      </div>
    </div>
  );
};

export default DesktopSearchMenu;
