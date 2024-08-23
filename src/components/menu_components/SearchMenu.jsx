"use client";

import React, { useState } from "react";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchMenu = ({ toggleMenu }) => {
  return (
    <div>
      <div className="flex justify-end p-4">
        <button onClick={toggleMenu} className="text-gray-700">
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
      {/* Add your menu content here */}
      <div className="p-4">
        <h2 className="text-2xl font-bold">Search Menu</h2>
        {/* Add more menu items here */}
      </div>
    </div>
  );
};

export default SearchMenu;
