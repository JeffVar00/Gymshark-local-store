import React from "react";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

const ProductCard = ({ item, imageSize }) => {
  // const sizes = item.productOptions.find(
  //   (option) => option.name === "Size"
  // )?.choices;

  return (
    <div className="h-full">
      {/* IMAGE CONTAINER */}
      <div className={`relative w-full ${imageSize} `}>
        {item.media?.mainMedia?.image?.url ? (
          <div className={`relative w-full h-full rounded-lg`}>
            <Image
              src={item.media?.mainMedia?.image?.url}
              alt={item.name}
              fill="responsive"
              sizes="100vw"
              className="w-full h-full object-contain rounded-lg"
              loading="lazy"
              priority={false}
            />
            {item.ribbon && (
              <div className="absolute bottom-0 left-0 bg-gray-800 text-white text-xs md:text-md px-2 py-1 rounded-md mb-2 ml-2">
                {item.ribbon}
              </div>
            )}
          </div>
        ) : (
          <div className="absolute inset-0 bg-noimagebackground flex items-center justify-center">
            {/* Placeholder for no image */}
            <span className="text-webprimary">No Image</span>
          </div>
        )}
      </div>

      {/* TEXT CONTAINER */}

      <div className="text-start py-4">
        <h2 className="text-xs md:text-md font-bold">{item.name}</h2>
        <div
          className="text-xs  text-gray-600"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(item.description),
          }}
        ></div>
        <div
          className="text-xs  text-gray-600"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              item.additionalInfoSections.find(
                (section) => section.title === "appearance"
              )?.description || ""
            ),
          }}
        ></div>
        <p className="text-xs md:text-md font-bold">
          {item.price?.formatted?.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
