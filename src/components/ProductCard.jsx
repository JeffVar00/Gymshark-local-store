import React, { useState } from "react";
import Image from "next/image";

const ProductCard = ({ item, imageSize }) => {
  return (
    <div className="h-full">
      {/* IMAGE CONTAINER */}
      <div className={`relative w-full ${imageSize}`}>
        {item.img ? (
          <div className={`relative w-full h-full`}>
            <Image
              src={item.img}
              alt={item.title}
              fill="responsive"
              sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full h-full object-cover"
            />
            {item.isNew && (
              <div className="absolute bottom-0 left-0 bg-gray-800 text-white text-xs md:text-md px-2 py-1 rounded-md mb-2 ml-2">
                NEW
              </div>
            )}
            {/* SIZE SELECTION */}
            <div className="hidden absolute bottom-0 left-0 w-full h-1/3 bg-opacity-100 bg-websecundary lg:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 ">
              <div className="grid grid-cols-4 gap-2 w-full">
                {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((size) => (
                  <button
                    key={size}
                    className={`p-2 xl:p-4 text-xs lg:text-sm ${
                      item.availableSizes.includes(size)
                        ? "bg-white text-webprimary hover:text-websecundary hover:bg-webprimary"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={!item.availableSizes.includes(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-noimagebackground flex items-center justify-center">
            {/* Placeholder for no image */}
            <span className="text-webprimary">No Image</span>
          </div>
        )}
      </div>

      {/* TEXT CONTAINER */}
      <div className="text-start my-4">
        <h2 className="text-xs md:text-md">{item.title}</h2>
        <p className="text-xs  text-gray-400">{item.desc}</p>
        <p className="text-xs md:text-md font-bold">US${item.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
