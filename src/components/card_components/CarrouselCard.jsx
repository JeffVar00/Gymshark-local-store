"use client";

import { useEffect } from "react";
import Image from "next/image"; // Make sure to import Image from next/image if you're using Next.js

const Carousel = ({ imgs }) => {
  useEffect(() => {
    // Initialize carousel functionality (basic example)
    const slides = document.querySelectorAll("#default-carousel .slide");
    const totalSlides = slides.length;
    let currentIndex = 0;

    const updateSlides = () => {
      slides.forEach((slide, index) => {
        slide.classList.toggle("block", index === currentIndex);
        slide.classList.toggle("hidden", index !== currentIndex);
      });

      document
        .querySelectorAll("[data-carousel-slide-to]")
        .forEach((button, index) => {
          button.setAttribute(
            "aria-current",
            index === currentIndex ? "true" : "false"
          );
        });
    };

    document
      .querySelector("[data-carousel-prev]")
      .addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlides();
      });

    document
      .querySelector("[data-carousel-next]")
      .addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlides();
      });

    document
      .querySelectorAll("[data-carousel-slide-to]")
      .forEach((button, index) => {
        button.addEventListener("click", () => {
          currentIndex = index;
          updateSlides();
        });
      });

    updateSlides(); // Initialize the carousel
  }, [imgs]);

  return (
    <div className="flex flex-col md:flex-row text-center">
      {/* Left Section - Image Grid */}
      <div
        id="default-carousel"
        className="h-screen relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-full overflow-hidden rounded-lg ">
          {imgs.length > 0 ? (
            imgs.map((image, index) => (
              <div
                key={index}
                className={`slide hidden duration-700 ease-in-out`}
              >
                <Image
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  fill="responsive"
                  className="absolute block w-full h-full object-contain"
                  Sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))
          ) : (
            <div className="slide hidden duration-700 ease-in-out">
              <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-noimagebackground items-center justify-center">
                <span className="text-webprimary">No Image</span>
              </div>
            </div>
          )}
        </div>

        {imgs.length > 1 && (
          <div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              {imgs.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label={`Slide ${index + 1}`}
                  data-carousel-slide-to={index}
                ></button>
              ))}
            </div>

            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
