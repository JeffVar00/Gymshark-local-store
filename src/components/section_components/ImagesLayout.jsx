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
  }, []);

  return (
    <div className="w-full md:w-1/2 xl:w-5/6 overflow-y-auto md:custom-scrollbar">
      {/* Carousel for small devices */}
      <div
        className="md:hidden relative h-full overflow-x-scroll snap-x snap-mandatory flex"
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
        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {product.imgs.map((_, index) => (
            <span
              key={index}
              className={`block h-2 w-2 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
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
