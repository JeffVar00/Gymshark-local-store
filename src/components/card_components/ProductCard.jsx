import React from "react";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

const ProductCard = ({ item, imageSize }) => {
  const sizes = item.productOptions.find(
    (option) => option.name === "Size"
  )?.choices;

  console.log(item.media?.mainMedia?.image?.url); //static.wixstatic.com

  return (
    <div className="h-full">
      {/* IMAGE CONTAINER */}
      <div className={`relative w-full ${imageSize}`}>
        {item.media?.mainMedia?.image?.url ? (
          <Link href={`/products/${item.slug}`}>
            <div className={`relative w-full h-full`}>
              <Image
                src={item.media?.mainMedia?.image?.url}
                alt={item.name}
                fill="responsive"
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-full object-cover"
              />
              {item.ribbon && (
                <div className="absolute bottom-0 left-0 bg-gray-800 text-white text-xs md:text-md px-2 py-1 rounded-md mb-2 ml-2">
                  {item.ribbon}
                </div>
              )}
            </div>

            {/* SIZE SELECTION FOR FUTURE */}
            {/* <div
              className={`hidden absolute bottom-0 left-0 w-full bg-opacity-100 bg-websecundary lg:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            >
              {!sizes ? (
                <button className="m-4 w-full font-bold rounded-xl flex items-center justify-center p-3 bg-webprimary text-websecundary">
                  Add to Bag
                </button>
              ) : (
                <div className="grid grid-cols-4 xl:grid-cols-5 gap-2 m-4 z-50">
                  {["XXS", "XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      className={`flex items-center justify-center p-3 text-xs sm:text-sm md:text-base rounded-sm ${
                        sizes.find((s) => s.value === size)
                          ? "bg-white text-webprimary hover:text-websecundary hover:bg-webprimary"
                          : "bg-gray-200 text-gray-500 cursor-not-allowed"
                      }`}
                      disabled={!sizes.find((s) => s.value === size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              )}
            </div> */}
          </Link>
        ) : (
          <div className="absolute inset-0 bg-noimagebackground flex items-center justify-center">
            {/* Placeholder for no image */}
            <span className="text-webprimary">No Image</span>
          </div>
        )}
      </div>

      {/* TEXT CONTAINER */}
      <Link href={`/products/${item.slug}`}>
        <div className="text-start py-4">
          <h2 className="text-xs md:text-md">{item.name}</h2>
          <div
            className="text-xs  text-gray-400"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(item.description),
            }}
          ></div>
          <div
            className="text-xs  text-gray-400"
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
      </Link>
    </div>
  );
};

export default ProductCard;
