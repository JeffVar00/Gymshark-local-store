import React from "react";
import ProductCard from "../card_components/ProductCard";
import { wixClientServer } from "@/lib/wixClientServer";
import Link from "next/link";

const PRODUCT_PER_PAGE = 20;
const Featured = async ({
  categoryName,
  categoryId,
  limit,
  title,
  subtitle,
}) => {
  const wixClient = await wixClientServer();
  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || PRODUCT_PER_PAGE)
    .find();

  return (
    <div className="w-auto flex flex-col mt-10 mb-10 mx-4 md:mx-12 md:my-24 xl:mx-24 xl:my-20">
      {/* TITLE */}
      <div className="flex-1 flex flex-col items-start text-start px-1 justify-end z-10">
        <h1 className="text-xs lg:text-base md:font-bold">{subtitle}</h1>
        <div className="flex flex-row gap-4 items-end">
          <h2 className="text-sm lg:text-2xl font-bold">{title}</h2>
          {categoryName && (
            <Link
              href={`collections?cat=${categoryName}`}
              className="text-xs lg:text-base font-bold underline hover:text-gray-600"
            >
              More {categoryName}
            </Link>
          )}
        </div>
      </div>
      <div className="overflow-x-scroll text-webprimary flex flex-col ">
        {/* WRAPPER */}
        <div className="w-max flex animate-scroll-indicator mt-4">
          {/* SINGLE ITEM */}
          {res.items.map((product) => (
            <div
              key={product._id}
              className="w-[80vw] mx-1 text-webprimary flex flex-col
          justify-around transition-all duration-300 md:w-[23vw]
          xl:w-[22vw] group"
            >
              <ProductCard
                item={product}
                imageSize="h-[113vw] md:h-[33vw] xl:h-[31vw]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
