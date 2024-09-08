"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ProductCarousel = ({ imgs }) => {
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
    <div className="w-full md:w-1/2 mt-6 md:mt-0">
      {/* Carousel */}
      <div className="md:hidden w-full relative h-full overflow-hidden lg:items-center lg:justify-center">
        <div
          className="relative flex h-full whitespace-nowrap overflow-auto scrollbar-hide snap-x snap-mandatory"
          ref={carouselRef}
        >
          {imgs.map((image, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-full h-[142vw] relative"
            >
              <Image
                priority={true}
                src={image.image.url}
                alt={`Product Image ${index + 1}`}
                fill="responsive"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Indicators */}
        {imgs.length > 1 ? (
          <div
            className={`absolute bottom-4 rounded-lg left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 px-4 py-1 transition-all ${
              currentIndex === 0
                ? "bg-transparent bg-fade-out"
                : "bg-websecundary bg-fade-in"
            }`}
          >
            {imgs.map((_, index) => (
              <span
                key={index}
                className={`block h-1 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-webprimary w-4"
                    : "bg-gray-400 w-1"
                }`}
              ></span>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>

      {/* Grid for medium and up */}

      {imgs.length > 2 ? (
        <div className="hidden overflow-y-auto md:grid grid-cols-1 max-h-[calc(100vh-4rem)] lg:grid-cols-2 gap-1 mt-6 lg:mt-8">
          {imgs.map((image, index) => (
            <div
              key={index}
              className={`w-full h-[69vw] relative ${
                (index + 1) % 3 === 0
                  ? "lg:col-span-2 h-[69vw]"
                  : "lg:h-[34.6vw]"
              }`}
            >
              <Image
                src={image.image.url}
                alt={`Product Image ${index + 1}`}
                fill="responsive"
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      ) : imgs.length > 0 ? (
        <div
          className={`h-[calc(100vh)] overflow-y-auto overflow-x-hidden items-center hidden md:grid md:grid-cols-1 gap-1 ${
            imgs.length == 2 ? "mt-6 lg:mt-8" : "overflow-y-hidden"
          } `}
        >
          {imgs.map((image, index) => (
            <div
              key={index}
              className={`w-auto ${
                imgs.length == 2
                  ? "h-[70vw] lg:[76vw] xl:h-[70vw] 2xl:h-[68vw]"
                  : "max-h-[calc(100vh-6rem)] mx-6 h-[61vw] lg:h-[55vw] xl:h-[45vw]"
              } relative`}
            >
              <Image
                src={image.image.url}
                alt={`Product Image ${index + 1}`}
                fill="responsive"
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                className={
                  imgs.length == 2
                    ? "object-cover"
                    : "object-cover lg:object-contain lg:ml-12"
                }
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="absolute inset-0 bg-noimagebackground flex items-center justify-center">
          {/* Placeholder for no image */}
          <span className="text-webprimary">No Image Found</span>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
