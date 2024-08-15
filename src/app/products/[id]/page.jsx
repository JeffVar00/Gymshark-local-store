"use client";

import React, { useState } from "react";
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

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col md:flex-row md:pr-4 pt-8 md:pt-16">
      {/* Left Section - Image Grid */}
      <ProductCarousel product={product.products[0]} />

      {/* Right Section - Product Details */}
      <div className="flex flex-col w-full md:w-1/2 lg:pl-8 items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-2 my-10">
          {product.isNew && (
            <div className="flex bg-websecundary text-webprimary font-bold text-xs md:text-md px-2 py-1 rounded-md">
              NEW
            </div>
          )}
          <h1 className="text-xl md:text-2xl font-bold">{product.title}</h1>
          <p className="text-sm text-gray-500">{product.desc}</p>
          <p className="text-sm text-webprimary font-bold">
            US${product.price}
          </p>
        </div>

        {/* Related Products */}
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

        {/* Size Selector */}
        <div className="w-full md:w-auto flex flex-col mb-4 text-start px-4">
          <label className="block mb-2 text-xs font-medium text-gray-500 ml-2">
            Select a size
          </label>

          <div className="flex flex-row justify-evenly px-2 gap-2 border-2 rounded-xl border-gray-200 items-center text-center">
            {["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL"].map((size) => (
              <button
                key={size}
                className={`flex items-center justify-center w-[10vw] h-12 md:w-10 my-1 p-3 text-xs rounded-sm border-webprimary ${
                  product.products[0].availableSizes.includes(size)
                    ? "bg-white text-webprimary hover:text-websecundary hover:bg-webprimary"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!product.products[0].availableSizes.includes(size)}
              >
                <span>{size}</span>
              </button>
            ))}
          </div>

          <button className="mt-8 py-5 text-sm bg-webprimary text-websecundary font-bold rounded-full mb-6 uppercase">
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
