import React from "react";
import Notification from "@/components/section_components/Notification";
import ProductsDisplay from "@/components/section_components/ProductsDisplay";

const ProductSearchPage = ({ params }) => {
  const { query } = params;
  const products = [];
  // MAKE CALL OF PRODUCTS PER QUERY, IF NO RESULTS SHOW NO RESULTS PAGE
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
            <p className="text-xs text-gray-400">1124 Products</p>
          </div>
        </div>
        <ProductsDisplay products={products} />
      </div>
    </div>
  );
};

export default ProductSearchPage;
