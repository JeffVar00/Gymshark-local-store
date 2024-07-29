import React from "react";
import Image from "next/image";

const Featured = ({ products, title, subtitle }) => {
  return (
    <div className="w-auto flex flex-col mt-10 mb-10 mx-4 md:mx-12 md:my-24 xl:mx-24 xl:my-20">
      {/* TITLE */}
      <div className="flex-1 flex flex-col items-start text-start px-1 justify-end z-10">
        <h3 className="text-md md:font-bold">{subtitle}</h3>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="overflow-x-scroll text-webprimary flex flex-col ">
        {/* WRAPPER */}
        <div className="w-max flex animate-scroll-indicator mt-4">
          {/* SINGLE ITEM */}
          {products.map((item) => (
            <div
              key={item.id}
              className="w-[80vw] mx-1 text-webprimary flex flex-col justify-around transition-all duration-300 md:w-[23vw] xl:w-10/11"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative w-full h-[100vw] md:h-[30vw] xl:h-[35vw]">
                {item.img ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill="responsive"
                      className="w-full h-full object-cover"
                    />
                    {item.isNew && (
                      <div className="absolute bottom-0 left-0 bg-gray-800 text-white text-xs md:text-md px-2 py-1 rounded-md mb-2 ml-2">
                        NEW
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-gray-400 flex items-center justify-center">
                    {/* Placeholder for no image */}
                    <span className="text-gray-600">No Image</span>
                  </div>
                )}
              </div>

              {/* TEXT CONTAINER */}
              <div className="text-start my-4">
                <h2 className="text-xs xl:text-lg mt-2">{item.title}</h2>
                <p className="text-xs  xl:text-lg text-gray-400">{item.desc}</p>
                <p className="text-md xl:text-xl font-bold">US${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
