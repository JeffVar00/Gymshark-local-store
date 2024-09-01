import React, { Suspense } from "react";
import Notification from "@/components/section_components/Notification";
import ProductsDisplay from "@/components/section_components/ProductsDisplay";
import { wixClientServer } from "@/lib/wixClientServer";
import Spinner from "@/components/icon_components/Spinner";

const PRODUCTS_PER_PAGE = 50;

const ProductCategoryPage = async ({ searchParams }) => {
  const wixClient = await wixClientServer();
  const category = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );

  return (
    <div className="flex flex-col mx-auto">
      <Notification />
      <div className="py-4">
        <div className="px-4 md:px-8 2xl:px-16">
          <p className="text-xs font-bold md:py-2 uppercase">
            Category {">"} {category?.collection?.name || "All Products"}
          </p>
          {searchParams.query && (
            <p className="text-xs md:pt-2">
              Search results for{" "}
              <span className="font-bold">{searchParams.query}</span>
            </p>
          )}
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <h1 className="text-xl md:text-4xl font-bold uppercase">
              All Products
            </h1>
          </div>
          <p className="text-xs md:text-sm py-4">
            Stock up on your workout wardrobe or test a fresh `fit. Shop{" "}
            <span className="font-bold">{category.collection?.name}</span>{" "}
            products here.
          </p>
        </div>
        <Suspense fallback={<Spinner />}>
          <ProductsDisplay
            category_id={
              category.collection?._id || "00000000-000000-000000-000000000001"
            }
            limit={PRODUCTS_PER_PAGE}
            searchParams={searchParams}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default ProductCategoryPage;
