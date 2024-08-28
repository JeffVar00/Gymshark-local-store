"use client";

import React, { useState, useEffect, useCallback } from "react";
import { featuredProducts } from "@/data";
import ProductCard from "@/components/card_components/ProductCard";
import Notification from "@/components/section_components/Notification";
import FilterMenu from "@/components/menu_components/FilterMenu";
// import axios from "axios";

const ProductDisplay = ({ products, sub_categories }) => {
  const [currentProducts, setCurrentProducts] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({ sort: "relevancy", categories: [] });

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
  }, [products, page, filters]);

  const handleSortChange = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      sort: value,
    }));
    setPage(1);
  };

  const handleCategoryChange = (value) => {
    setFilters((prevFilters) => {
      const isCategorySelected = prevFilters.categories.includes(value);

      return {
        ...prevFilters,
        categories: isCategorySelected
          ? prevFilters.categories.filter((category) => category !== value)
          : [...prevFilters.categories, value],
      };
    });
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const clearAllFilters = () => {
    setFilters({ sort: "relevancy", categories: [] });
    setPage(1);
  };

  const [isGrid, setIsGrid] = useState(false);
  const [isFilterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isFilterOpen]);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1000) {
        if (window.scrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      } else {
        setShowNavbar(true);
      }
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      window.addEventListener("resize", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
        window.removeEventListener("resize", controlNavbar);
      };
    }
  }, [controlNavbar]);

  return (
    <div className="flex flex-col mx-auto">
      <div>
        <div
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
          <button
            className="w-full py-3 relative text-xs bg-websecundary rounded-full font-bold flex justify-center items-center uppercase"
            onClick={toggleFilter}
          >
            Filter & Sort
          </button>
        </div>

        <div className="flex flex-row py-2 px-2 lg:px-6 2xl:px-16">
          <div className="hidden w-72 lg:flex flex-col items-start mr-2">
            <div
              className="sticky top-0 h-full overflow-y-auto"
              style={{ top: "64px", maxHeight: `calc(100vh - 64px)` }}
            >
              <FilterMenu
                sub_categories={sub_categories}
                filters={filters}
                onSortChange={handleSortChange}
                onCategoryChange={handleCategoryChange}
                clearAllFilters={clearAllFilters}
              />
            </div>
          </div>
          <div className="w-full">
            <div
              className={`grid  md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 ${
                isGrid ? "grid-cols-2" : "grid-cols-1"
              }`}
            >
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="h-full text-webprimary flex flex-col justify-around transition-all duration-300 group"
                >
                  <ProductCard
                    item={product}
                    imageSize={`${
                      isGrid ? "h-[60vw]" : "h-[120vw]"
                    } md:h-[40vw] lg:h-[30vw] xl:h-[26vw] 2xl:h-[20vw]`}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-center items-center px-2">
              <button
                disabled={page === 1}
                onClick={() => handlePageChange(page - 1)}
                className="w-32 md: py-2 bg-webprimary text-white rounded-full"
              >
                Previous
              </button>
              <span>
                {page} of {totalPages}
              </span>
              <button
                disabled={page === totalPages}
                onClick={() => handlePageChange(page + 1)}
                className="w-32 py-2 bg-webprimary text-white rounded-full"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Background Blur */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 transition-opacity duration-300 ease-in-out ${
          isFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } lg:hidden`}
        onClick={toggleFilter}
      ></div>
      {/* Filter Mobile Menu */}
      <div
        className={`fixed lg:hidden inset-x-0 bottom-0 bg-websecundary z-50 transform ${
          isFilterOpen ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 ease-in-out rounded-t-lg`}
        style={{ height: "90%" }}
      >
        <div className="relative h-full overflow-y-auto">
          {isFilterOpen && (
            <div className="p-4">
              <FilterMenu
                sub_categories={sub_categories}
                filters={filters}
                onSortChange={handleSortChange}
                onCategoryChange={handleCategoryChange}
                clearAllFilters={clearAllFilters}
                toggleFilter={toggleFilter}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
