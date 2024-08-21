"use client";

import React from "react";
import Notification from "@/components/section_components/Notification";
import ProductsDisplay from "@/components/section_components/ProductsDisplay";

const ProductPage = ({ category }) => {
  return (
    <div className="flex flex-col mx-auto">
      <Notification />
      <div className="py-4">
        <div className="px-4 md:px-8 2xl:px-16">
          <p className="text-xs font-bold md:py-2 uppercase">Mens</p>
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <h1 className="text-xl md:text-4xl font-bold uppercase">
              All Products
            </h1>
            <p className="text-xs text-gray-400">1124 Products</p>
          </div>
          <p className="text-xs md:text-sm py-4">
            Stock up on your workout wardrobe or test a fresh `fit. Shop all
            men`s Gymshark products here.
          </p>
        </div>
        <ProductsDisplay category={category} />
      </div>
    </div>
  );
};

export default ProductPage;
