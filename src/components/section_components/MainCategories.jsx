import Link from "next/link";
import Image from "next/image";
import React from "react";

const MainCategories = ({ categories }) => {
  return (
    <div className="p-4 w-auto mt-10 mb-10 md:mx-12 md:my-24 xl:mx-24 xl:my-20 flex flex-col md:flex-row items-center ">
      {categories.map((category) => (
        <div
          key={category.id}
          className="w-[80vw] mx-1 text-webprimary flex flex-col justify-around transition-all duration-300 md:w-[42vw] xl:w-[29vw]"
        >
          {/* IMAGE CONTAINER */}
          <div className="w-full h-[100vw] md:h-[50vw] xl:h-[35vw] rounded-lg m-2">
            {category.imgs && category.imgs.length > 0 ? (
              <div className="relative w-full h-full">
                <Image
                  src={category.imgs[0]}
                  alt={category.title}
                  fill="responsive"
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="flex flex-col absolute bottom-0 left-0 m-6">
                  <Link href={category.ref}>
                    <button className="bg-websecundary text-webprimary rounded-full text-xs py-3 px-6 md:px-2 font-bold md:w-36 mt-4 uppercase">
                      Shop {category.title}
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 bg-noimagebackground flex items-center justify-center">
                {/* Placeholder for no image */}
                <span className="text-webprimary">No Image</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainCategories;
