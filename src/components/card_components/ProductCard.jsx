import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ item, imageSize }) => {
  return (
    <div className="h-full">
      {/* IMAGE CONTAINER */}
      <div className={`relative w-full ${imageSize}`}>
        {item.imgs && item.imgs.length > 0 ? (
          <div className={`relative w-full h-full`}>
            <Link href={`/products/${item.id}`}>
              <Image
                src={item.imgs[0]}
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
            </Link>

            {/* SIZE SELECTION */}
            <div
              className={`hidden absolute bottom-0 left-0 w-full bg-opacity-100 bg-websecundary lg:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            >
              {item.availableSizes.length === 0 ? (
                <button className="m-4 w-full font-bold rounded-xl flex items-center justify-center p-3 bg-webprimary text-websecundary">
                  Add to Bag
                </button>
              ) : (
                <div className="grid grid-cols-4 xl:grid-cols-5 gap-2 m-4 z-50">
                  {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((size) => (
                    <button
                      key={size}
                      className={`flex items-center justify-center p-3 text-xs sm:text-sm md:text-base rounded-sm ${
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
              )}
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
      <Link href={`/products/${item.id}`}>
        <div className="text-start py-4">
          <h2 className="text-xs md:text-md">{item.title}</h2>
          <p className="text-xs  text-gray-400">{item.desc}</p>
          <p className="text-xs md:text-md font-bold">US${item.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
