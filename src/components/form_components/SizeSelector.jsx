"use client";

import React, { useState } from "react";

const SizeSelector = ({ availableSizes }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const handleSizeClick = (size) => {
    if (selectedSize === size) {
      setSelectedSize(null); // Deselect the size if it's already selected
    } else {
      setSelectedSize(size); // Select the new size
      //setShowWarning(false);
    }
  };
  return (
    <div className="flex flex-row justify-evenly px-1 md:px-3 py-1 gap-2 border-2 rounded-sm border-gray-100 items-center text-center">
      {["XXS", "XS", "S", "M", "L", "XL", "XXL"].map((size) => (
        <button
          key={size}
          className={`flex items-center justify-center w-[12vw] h-12 md:h-12 md:w-12 lg:w-12 my-1 p-3 text-xs rounded-sm border-webprimary ${
            availableSizes.find((s) => s.value === size)
              ? selectedSize === size
                ? "bg-webprimary text-websecundary"
                : "bg-white text-webprimary hover:text-websecundary hover:bg-webprimary"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!availableSizes.find((s) => s.value === size)}
          onClick={() => handleSizeClick(size)}
        >
          <span>{size}</span>
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
