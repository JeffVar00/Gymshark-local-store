"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { featuredProducts } from "@/data";
import ProductCard from "@/components/ProductCard";
import Notification from "@/components/Notification";
// import axios from "axios";

const ProductPage = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({ sort: "relevancy" });

  const itemsPerPage = 50; // Adjust as necessary

  useEffect(() => {
    // const fetchProducts = async () => {
    //   try {
    //     const response = await axios.get("/api/products", {
    //       params: {
    //         category,
    //         page,
    //         ...filters,
    //       },
    //     });
    //     setProducts(response.data.products);
    //     setTotalPages(response.data.totalPages);
    //     setFilteredProducts(response.data.products);
    //   } catch (error) {
    //     console.error("Error fetching products:", error);
    //   }
    // };
    // fetchProducts();
  }, [category, page, filters]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="flex flex-col mx-auto">
      <Notification />
      <div className="py-4">
        <div className="px-4 md:px-8 2xl:px-16">
          <p className="text-xs font-bold md:py-2 uppercase">Mens</p>
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <h1 className="text-xl md:text-4xl font-bold uppercase">
              All Products
            </h1>
            <p className="text-xs text-gray-400">1124 Products</p>
          </div>
          <p className="text-xs md:text-sm py-4">
            Stock up on your workout wardrobe or test a fresh `fit. Shop all
            men`s Gymshark products here.
          </p>
        </div>

        <div className="flex flex-row py-2 px-2 lg:px-6 2xl:px-16">
          <aside className="hidden w-72 lg:flex p-4 flex-col items-start">
            <h2 className="font-bold uppercase">Filter & Sort</h2>
            <div className="flex flex-col">
              <label>
                <input
                  type="radio"
                  name="sort"
                  value="priceLowHigh"
                  onChange={handleFilterChange}
                />
                Price: Low to High
              </label>
              <label>
                <input
                  type="radio"
                  name="sort"
                  value="priceHighLow"
                  onChange={handleFilterChange}
                />
                Price: High to Low
              </label>
              <label>
                <input
                  type="radio"
                  name="sort"
                  value="relevancy"
                  onChange={handleFilterChange}
                  defaultChecked
                />
                Relevancy
              </label>
              <label>
                <input
                  type="radio"
                  name="sort"
                  value="newest"
                  onChange={handleFilterChange}
                />
                Newest
              </label>
            </div>
          </aside>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="h-full text-webprimary flex flex-col justify-around transition-all duration-300 group"
                >
                  <ProductCard
                    item={product}
                    imageSize="h-[100vw] md:h-[40vw] lg:h-[30vw] xl:h-[26vw] 2xl:h-[20vw]"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                disabled={page === 1}
                onClick={() => handlePageChange(page - 1)}
              >
                Previous
              </button>
              <span>
                Page {page} of {totalPages}
              </span>
              <button
                disabled={page === totalPages}
                onClick={() => handlePageChange(page + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
