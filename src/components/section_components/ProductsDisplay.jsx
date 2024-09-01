import React from "react";
import ProductCard from "@/components/card_components/ProductCard";
import Link from "next/link";
import FilterMenu from "@/components/menu_components/FilterMenu";
import BackToTop from "@/components/icon_components/BackToTop";
import { wixClientServer } from "@/lib/wixClientServer";

const ProductDisplay = async ({ category_id, limit, searchParams }) => {
  const wixClient = await wixClientServer();

  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", category_id)
    .startsWith("name", searchParams?.query || "")
    .limit(limit || PRODUCT_PER_PAGE)
    .find();

  return (
    <div className="flex flex-col mx-auto">
      {res.items.length > 0 ? (
        <>
          <div className="flex items-center justify-start w-full px-4 md:px-8 2xl:px-16 mb-6 lg:mb-0">
            <p className="text-xs md:text-sm text-gray-600">
              {res._totalCount} products available
            </p>
          </div>

          <div>
            <div className="flex flex-col lg:flex-row py-2 px-2 lg:px-6 2xl:px-16">
              <div className="w-full lg:w-72 flex flex-col items-start pb-6 lg:pb-0 px-2 md:px-6 lg:px-0">
                <div className="w-full lg:sticky h-full lg:overflow-y-auto top-[64px] max-h-[calc(100vh-64px)]">
                  <FilterMenu />
                </div>
              </div>
              <div className="w-full">
                <div
                  className={`grid  md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 grid-cols-2`}
                >
                  {res.items.map((product) => (
                    <div
                      key={product._id}
                      className="h-full text-webprimary flex flex-col justify-around transition-all duration-300 group"
                    >
                      <ProductCard
                        item={product}
                        imageSize={`h-[60vw] md:h-[40vw] lg:h-[30vw] xl:h-[26vw] 2xl:h-[20vw]`}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-center items-center px-2">
                  <button
                    disabled={true}
                    onClick={null}
                    className="w-32 md: py-2 bg-webprimary text-white rounded-full"
                  >
                    Previous
                  </button>
                  <span>{/* {page} of {totalPages} */}</span>
                  <button
                    disabled={true}
                    onClick={null}
                    className="w-32 py-2 bg-webprimary text-white rounded-full"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <BackToTop />
        </>
      ) : (
        <div className="flex flex-col items-center h-full justify-center gap-3 my-32">
          <h2 className="font-bold uppercase">No results found</h2>
          <div className="text-gray-700 text-sm text-center mx-6">
            <span className="block">
              Sorry, we can`t find any products that match your filters.
            </span>
            <span className="block">
              Please clear your selected filters and try again.
            </span>
          </div>
          <Link href="/">
            <button className="text-sm mt-2 w-60 font-bold rounded-full flex items-center justify-center p-3 bg-webprimary text-websecundary uppercase">
              Go Home
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductDisplay;
