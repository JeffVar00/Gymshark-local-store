import React from "react";
import Notification from "@/components/section_components/Notification";
import ProductsDisplay from "@/components/section_components/ProductsDisplay";

const getProducts = async (query) => {
  const res = await fetch(
    `http://localhost:3000/api/products?search=${query}`,
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch featured products");
  }

  return res.json();
};

const ProductSearchPage = async ({ params }) => {
  const { query } = params;
  const products = await getProducts(query);
  return (
    <div className="flex flex-col mx-auto">
      <Notification />
      <div className="py-4">
        <div className="px-4 md:px-8 2xl:px-16">
          <p className="text-xs font-bold md:pt-2">Search results for</p>
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <h1 className="text-lg font-bold uppercase">
              <q>{query}</q>
            </h1>
            <p className="text-xs text-gray-400">{products.total} Products</p>
          </div>
        </div>
        <ProductsDisplay products={products} sub_categories={[]} />
      </div>
    </div>
  );
};

export default ProductSearchPage;
