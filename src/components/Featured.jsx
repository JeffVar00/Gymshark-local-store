import React from "react";
import ProductCard from "./ProductCard";

const Featured = ({ products, title, subtitle }) => {
  return (
    <div className="w-auto flex flex-col mt-10 mb-10 mx-4 md:mx-12 md:my-24 xl:mx-24 xl:my-20">
      {/* TITLE */}
      <div className="flex-1 flex flex-col items-start text-start px-1 justify-end z-10">
        <h3 className="text-md md:font-bold">{subtitle}</h3>
        <h1 className="text-xl lg:text-2xl font-bold">{title}</h1>
      </div>
      <div className="overflow-x-scroll text-webprimary flex flex-col ">
        {/* WRAPPER */}
        <div className="w-max flex animate-scroll-indicator mt-4">
          {/* SINGLE ITEM */}
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[80vw] mx-1 text-webprimary flex flex-col
          justify-around transition-all duration-300 md:w-[23vw]
          xl:w-[22vw] group"
            >
              <ProductCard
                item={product}
                imageSize="h-[100vw] md:h-[30vw] xl:h-[28vw]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
