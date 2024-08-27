import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const FilterButton = ({ label, value, selected, onClick }) => {
  return (
    <button
      onClick={() => onClick(value)}
      className={`px-4 py-2 rounded-md mx-1 no-tap-highlight  ${
        selected
          ? "bg-black text-white"
          : "bg-gray-200 text-black hover:border-2 hover:border-webprimary"
      }`}
    >
      {label}
    </button>
  );
};

const getSubCategories = async () => {
  //needs to receive the parent category
  const res = await fetch("https://localhost:3000/api/subCategories", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product types");
  }

  return res.json();
};

export const FilterMenu = async ({
  filters,
  onSortChange,
  onCategoryChange,
  clearAllFilters,
  toggleFilter,
}) => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const toggleCategories = () => setCategoryOpen(!categoryOpen);
  const toggleSort = () => setSortOpen(!sortOpen);

  // const categories = await getSubCategories();

  return (
    <aside className="text-webprimary w-full lg:pr-10">
      <div className="flex flex-row items-center justify-between text-sm pb-6 lg:py-6 border-gray-200 ">
        <button
          className="lg:hidden text-webprimary z-50"
          onClick={toggleFilter}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <h2 className="font-bold uppercase">Filter & Sort</h2>
        <button
          className={`text-webprimary ${
            filters.categories.length === 0
              ? "cursor-not-allowed opacity-50"
              : ""
          }`}
          disabled={filters.categories.length === 0}
          onClick={clearAllFilters}
        >
          Clear All
        </button>
      </div>

      <div className="flex flex-col">
        <div className="w-full border-b lg:border-y">
          <div
            className="flex justify-between items-center cursor-pointer py-4 no-tap-highlight"
            onClick={toggleSort}
          >
            <h4 className="text-sm font-bold uppercase">Sort by</h4>
            <span className="text-xl font-bold ">{sortOpen ? "-" : "+"}</span>
          </div>
          <div
            className={`flex flex-col lg:flex-wrap lg:flex-row text-sm font-semibold text-gray-500 space-y-2 transition-all duration-300 ease-in-out ${
              sortOpen
                ? "max-h-screen mb-4 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <FilterButton
              label="Price: Low to High"
              value="priceLowHigh"
              selected={filters.sort === "priceLowHigh"}
              onClick={onSortChange}
            />
            <FilterButton
              label="Price: High to Low"
              value="priceHighLow"
              selected={filters.sort === "priceHighLow"}
              onClick={onSortChange}
            />
            <FilterButton
              label="Relevancy"
              value="relevancy"
              selected={filters.sort === "relevancy"}
              onClick={onSortChange}
            />
            <FilterButton
              label="Newest"
              value="newest"
              selected={filters.sort === "newest"}
              onClick={onSortChange}
            />
          </div>
        </div>
        <div className="w-full border-b">
          <div
            className="flex justify-between items-center cursor-pointer py-4 no-tap-highlight"
            onClick={toggleCategories}
          >
            <h4 className="text-sm font-bold uppercase">Product Type</h4>
            <span className="text-xl font-bold ">
              {categoryOpen ? "-" : "+"}
            </span>
          </div>
          <div
            className={`text-sm flex flex-col font-semibold text-gray-500 space-y-2 transition-all duration-300 ease-in-out ${
              categoryOpen
                ? "max-h-screen mb-4 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            } lg:flex-wrap lg:flex-row`}
          >
            <FilterButton
              label="Category 1"
              value="category1"
              selected={filters.categories.includes("category1")}
              onClick={onCategoryChange}
            />
            <FilterButton
              label="Category 2"
              value="category2"
              selected={filters.categories.includes("category2")}
              onClick={onCategoryChange}
            />
            <FilterButton
              label="Category 3"
              value="category3"
              selected={filters.categories.includes("category3")}
              onClick={onCategoryChange}
            />
            <FilterButton
              label="Category 4"
              value="category4"
              selected={filters.categories.includes("category4")}
              onClick={onCategoryChange}
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterMenu;
