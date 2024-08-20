"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ProductCarousel from "@/components/section_components/ImagesLayout";

// Your Product Page Component
const ProductPage = ({ params }) => {
  const { id } = params;

  const product = {
    id: 4,
    title: "Contour Heart Seamless Tank",
    desc: "Black/Asphalt Grey",
    price: 55,
    products: [
      {
        title: "Flare Orange/Sorbet Orange",
        imgs: [
          "/clothexample5.avif",
          "/clothexample5.avif",
          "/clothexample5.avif",
          "/clothexample5.avif",
          "/clothexample5.avif",
        ],
        availableSizes: ["XS", "S", "M", "XL", "L", "XXL", "3XL"],
        isNew: true,
      },
      {
        title: "Contour Heart Seamless Tank",
        imgs: [
          "/clothexample5.avif",
          "/clothexample5.avif",
          "/clothexample5.avif",
          "/clothexample5.avif",
          "/clothexample5.avif",
        ],
        availableSizes: ["XS", "S", "M", "XL", "L", "XXL", "3XL"],
        isNew: true,
      },
    ],
  };

  // handle product change
  const handleProductChange = (index) => {
    console.log("Product changed to: ", product.products[index]);
  };

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      // On mobile devices, open the native share menu
      if (navigator.share) {
        navigator
          .share({
            title: document.title,
            url: window.location.href,
          })
          .catch(console.error);
      } else {
        alert("Share not supported");
      }
    } else {
      // On larger screens, copy the link to the clipboard
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 5000); // Hide the tooltip after 2 seconds
        })
        .catch((err) => console.error("Failed to copy text: ", err));
    }
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  const handleSizeClick = (size) => {
    if (selectedSize === size) {
      setSelectedSize(null); // Deselect the size if it's already selected
    } else {
      setSelectedSize(size); // Select the new size
      setShowWarning(false);
    }
  };

  const handleAddToBag = () => {
    if (!selectedSize) {
      setShowWarning(true);
    } else {
      // Proceed with adding the product to the bag using the selected size
    }
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        setIsSticky(window.scrollY > 200); // Adjust the scrollY value based on when you want to trigger stickiness
      } else {
        setIsSticky(false); // Reset sticky state for larger screens
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col md:flex-row md:pr-4 pt-8 md:pt-6 lg:pt-8 md:mt-8 mb-4 md:mb-0">
      {/* Left Section - Image Grid */}
      <ProductCarousel product={product.products[0]} />

      {/* Right Section - Product Details */}
      <div className="flex flex-col w-full md:w-1/2 md:pl-4 items-center justify-evenly">
        <div className="flex flex-col justify-center items-center gap-2 my-10">
          {product.products[0].isNew && (
            <div className="flex bg-websecundary text-webprimary font-bold text-xs md:text-md px-2 py-1 rounded-md">
              NEW
            </div>
          )}
          <h1 className="text-xl md:text-2xl font-bold">{product.title}</h1>
          <p className="text-sm text-gray-500">{product.desc}</p>
          <p className="text-sm text-webprimary font-bold">
            US${product.price}
          </p>
          <div className="flex space-x-4 mt-4">
            <div className="relative">
              <button
                onClick={handleCopyLink}
                className="font-bold px-3 py-1 rounded-xl hover:bg-gray-200 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isCopied && !window.matchMedia("(max-width: 768px)").matches && (
                <div
                  className={`absolute w-32 left-1/2 transform -translate-x-1/2 -top-14 bg-black text-white text-sm px-3 py-1 rounded opacity-0 animate-fadeInOut`}
                >
                  <div className="relative p-2 w-full">
                    Link copied!
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-8 w-2.5 h-2.5 bg-black rotate-45"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Related Products */}
          <div className="flex flex-col gap-0 justify-center items-center mt-8">
            <div className="flex flex-row justify-center items-center">
              {product.products.map((relatedProduct, index) => (
                <div key={index} className="flex w-16 h-16 relative">
                  <Image
                    src={relatedProduct.imgs[0]}
                    alt={relatedProduct.title}
                    fill="responsive"
                    sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                    objectFit="contain"
                    className="rounded-md"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs mt-4 text-gray-500 ">{product.desc}</p>
          </div>
        </div>

        {/* Size Selector */}
        <div className="w-full lg:w-auto flex flex-col mb-4 text-start px-1 md:mx-2">
          {/* Size Label */}
          <label className="block mb-2 text-xs font-medium text-gray-500 ml-2">
            Select a size
          </label>

          {/* Size Buttons */}
          <div className="flex flex-row justify-evenly px-1 md:px-3 py-1 gap-2 border-2 rounded-sm border-gray-100 items-center text-center">
            {["XXS", "XS", "S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                className={`flex items-center justify-center w-[12vw] h-12 md:h-12 md:w-12 lg:w-12 my-1 p-3 text-xs rounded-sm border-webprimary ${
                  product.products[0].availableSizes.includes(size)
                    ? selectedSize === size
                      ? "bg-webprimary text-websecundary"
                      : "bg-white text-webprimary hover:text-websecundary hover:bg-webprimary"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!product.products[0].availableSizes.includes(size)}
                onClick={() => handleSizeClick(size)}
              >
                <span>{size}</span>
              </button>
            ))}
          </div>

          {/* Warning Message */}
          {showWarning && (
            <div className="text-red-500 font-bold text-xs mt-2 ml-2">
              Please select a size.
            </div>
          )}
          <button className="mt-8 py-5 text-sm bg-webprimary text-websecundary hidden md:flex justify-center font-bold rounded-full mb-6 uppercase">
            Add to Bag
          </button>
        </div>
      </div>
      <button className="my-3 py-5 text-xs bg-webprimary text-websecundary font-bold rounded-full mb-6 uppercase sticky bottom-2 w-[98%] px-4 mx-auto md:hidden">
        Add to Bag
      </button>
    </div>
  );
};

export default ProductPage;
