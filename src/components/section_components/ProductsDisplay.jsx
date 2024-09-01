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
    .limit(limit || PRODUCT_PER_PAGE)
    .find();

  return (
    <div className="flex flex-col mx-auto">
      {res.items.length > 0 ? (
        <>
          <div className="flex items-center justify-start w-full px-4 lg:px-8 2xl:px-16">
            <p className="text-xs md:text-sm text-gray-600">
              {/* {totalCount} products available */}
            </p>
          </div>

          <div>
            {/* <div
              className={`flex flex-row sticky z-20 bg-white py-4 justify-between lg:hidden px-2 gap-2 transition-transform duration-300 ease-in-out`}
              style={{
                top: showNavbar ? `55px` : `20px`,
                transform: showNavbar ? "translateY(0)" : "translateY(-20px)",
              }}
            >
              <div className="flex md:hidden justify-center bg-websecundary rounded-full relative w-full text-center items-center">
                <div
                  className={`absolute z-10 bottom-0 mb-1 left-0 w-1/2 h-10 bg-white rounded-full shadow transition-transform duration-300 ${
                    isGrid
                      ? "transform translate-x-0 ml-1"
                      : "transform translate-x-97"
                  }`}
                ></div>
                <div className="flex flex-row w-full">
                  <button
                    className={`w-full py-3 text-xs font-bold relative no-tap-highlight flex justify-center ${
                      isGrid ? "text-webprimary" : "text-websecundary"
                    }`}
                    onClick={() => setIsGrid(true)}
                  >
                    <span className="z-20 uppercase h-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentcolor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="black"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                        />
                      </svg>
                    </span>
                  </button>
                  <button
                    className={`w-full py-3 relative text-xs font-bold no-tap-highlight flex justify-center ${
                      !isGrid ? "text-webprimary" : "text-websecundary"
                    }`}
                    onClick={() => setIsGrid(false)}
                  >
                    <span className="z-20 uppercase h-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentcolor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="black"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div> */}

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
