import React from "react";
import Notification from "@/components/section_components/Notification";
import ProductsDisplay from "@/components/section_components/ProductsDisplay";

const getSubCategories = async (category) => {
  const res = await fetch(
    `http://localhost:3000/api/sub_categories?cat=${category}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch featured sub_categories");
  }

  return res.json();
};

const getProducts = async (cat) => {
  const res = await fetch(`http://localhost:3000/api/products?cat=${cat}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch featured products");
  }

  return res.json();
};

const ProductCategoryPage = async ({ params }) => {
  const { category } = params;
  const sub_categories = await getSubCategories(category);
  const products = await getProducts(category);

  console.log(products);
  return (
    <div className="flex flex-col mx-auto">
      <Notification />
      <div className="py-4">
        <div className="px-4 md:px-8 2xl:px-16">
          <p className="text-xs font-bold md:py-2 uppercase">{category}</p>
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <h1 className="text-xl md:text-4xl font-bold uppercase">
              All Products
            </h1>
            <p className="text-xs text-gray-500">{products.total} products</p>
          </div>
          <p className="text-xs md:text-sm py-4">
            Stock up on your workout wardrobe or test a fresh `fit. Shop all
            men`s Gymshark products here.
          </p>
        </div>
        <ProductsDisplay products={products} sub_categories={sub_categories} />
      </div>
    </div>
  );
};

export default ProductCategoryPage;
