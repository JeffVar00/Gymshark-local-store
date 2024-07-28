import React from "react";
import Image from "next/image";
import { featuredProducts } from "@/data";

const Featured = () => {
  return (
    <div className="w-auto flex flex-col mt-10 mb-10 ml-4 md:ml-12 md:my-24 xl:ml-24 xl:my-20">
      {/* TITLE */}
      <div className="flex-1 flex flex-col items-start text-start px-1 justify-end relative z-10">
        <h3 className="text-md md:font-bold">Women's</h3>
        <h1 className="text-xl font-bold">GYMSHARK MERCH</h1>
      </div>
      <div className="overflow-x-scroll text-webprimary flex flex-col ">
        {/* WRAPPER */}
        <div className="w-max flex animate-scroll-indicator mt-4">
          {/* SINGLE ITEM */}
          {featuredProducts.map((item) => (
            <div
              key={item.id}
              className="w-[80vw] mx-1 bg-gray-600 h-[80vh] flex flex-col items-center justify-around  transition-all duration-300 md:h-[40vh] md:w-[23vw] xl:w-10/11 xl:h-[65vh] border-x-2 border-webprimary"
            >
              {/* IMAGE CONTAINER */}
              {item.img && (
                <div className="relative flex-1 w-full mt-4 ">
                  <Image
                    src={item.img}
                    alt="food"
                    fill
                    className="object-contain"
                  ></Image>
                </div>
              )}

              {/* TEXT CONTAINER */}
              <div className="flex-1 flex flex-col gap-4 items-center text-center justify-center p-4">
                <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                  {item.title}
                </h1>
                <span className="text-xl font-bold">₡ {item.price}</span>
                <button className="bg-websecundary text-webprimary rounded-md py-3 px-6 font-bold">
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
