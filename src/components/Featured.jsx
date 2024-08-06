import React from "react";
import Image from "next/image";

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
          {products.map((item) => (
            <div
              key={item.id}
              className="w-[80vw] mx-1 h-full text-webprimary flex flex-col justify-around transition-all duration-300 md:w-[23vw] xl:w-[22vw] group"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative w-full h-[100vw] md:h-[30vw] xl:h-[28vw]">
                {item.img ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={item.img}
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
                    {/* SIZE SELECTION */}
                    <div className="hidden absolute bottom-0 left-0 w-full h-1/3 bg-opacity-100 bg-websecundary lg:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 ">
                      <div className="grid grid-cols-4 gap-2 w-full">
                        {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map(
                          (size) => (
                            <button
                              key={size}
                              className={`p-2 xl:p-4 text-xs lg:text-sm ${
                                item.availableSizes.includes(size)
                                  ? "bg-white text-webprimary hover:text-websecundary hover:bg-webprimary"
                                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
                              }`}
                              disabled={!item.availableSizes.includes(size)}
                            >
                              {size}
                            </button>
                          )
                        )}
                      </div>
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
              <div className="text-start my-4">
                <h2 className="text-xs md:text-md">{item.title}</h2>
                <p className="text-xs  text-gray-400">{item.desc}</p>
                <p className="text-md font-bold">US${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
