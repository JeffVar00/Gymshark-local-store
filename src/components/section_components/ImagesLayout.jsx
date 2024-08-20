"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ProductCarousel = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const width = carouselRef.current.clientWidth;
        const index = Math.round(scrollLeft / width);
        setCurrentIndex(index);
      }
    };

    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener("scroll", handleScroll);

      return () => {
        carouselElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, [currentIndex]);

  return (
    <div className="w-full md:w-1/2 overflow-y-auto mt-6 md:mt-0">
      <div className="relative h-full overflow-hidden">
        {/* Carousel */}
        <div
          className="md:hidden relative flex h-full whitespace-nowrap overflow-auto scrollbar-hide snap-x snap-mandatory"
          ref={carouselRef}
        >
          {product.imgs.map((image, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-full h-[120vw] relative"
            >
              <Image
                src={image}
                alt={`Product Image ${index + 1}`}
                fill="responsive"
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div
          className={`absolute bottom-4 rounded-lg left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 px-4 py-1 transition-all ${
            currentIndex === 0
              ? "bg-transparent bg-fade-out"
              : "bg-websecundary bg-fade-in"
          }`}
        >
          {product.imgs.map((_, index) => (
            <span
              key={index}
              className={`block h-1 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-webprimary w-4" : "bg-gray-400 w-1"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Grid for medium and up */}
      <div className="hidden md:grid grid-cols-1 h-screen md:grid-cols-2 gap-1">
        {product.imgs.length > 0 ? (
          product.imgs.map((image, index) => (
            <div
              key={index}
              className={`w-full h-[120vw] relative ${
                (index + 1) % 3 === 0
                  ? "md:col-span-2 xl:h-[73vw] md:h-[59vw]"
                  : "xl:h-[36vw] md:h-[30vw]"
              }`}
            >
              <Image
                src={image}
                alt={`Product Image ${index + 1}`}
                fill="responsive"
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-full object-cover"
              />
            </div>
          ))
        ) : (
          <div className="absolute inset-0 bg-noimagebackground flex items-center justify-center">
            {/* Placeholder for no image */}
            <span className="text-webprimary">No Image</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCarousel;
