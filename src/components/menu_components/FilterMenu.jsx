"use client";

import React, { useState } from "react";
import FormInput from "@/components/form_components/FormInput";

const FilterButton = ({ label, value, selected, onClick }) => {
  return (
    <button
      onClick={() => onClick(value)}
      className={`w-full px-4 py-2 rounded-md m-1 no-tap-highlight  ${
        selected
          ? "bg-black text-white"
          : "bg-gray-200 text-black hover:border-2 hover:border-webprimary"
      }`}
    >
      {label}
    </button>
  );
};

export const FilterMenu = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [sizeOpen, setsizeOpen] = useState(false);

  const sub_categories = [];

  const toggleCategories = () => setCategoryOpen(!categoryOpen);
  const toggleSort = () => setSortOpen(!sortOpen);
  const toggleSizes = () => setsizeOpen(!sizeOpen);

  const [filters, setFilters] = useState({
    genre: "unisex",
    sort: "relevancy",
    categories: [],
  });

  // const categories = await getSubCategories();

  return (
    <aside className="text-webprimary w-full lg:pr-10">
      <div className="flex flex-row items-center justify-between text-sm pb-4 lg:py-6 border-gray-200 ">
        <h2 className="font-bold uppercase">Filter & Sort</h2>
        <button
          className={`text-webprimary ${
            filters?.categories.length === 0
              ? "cursor-not-allowed opacity-50"
              : ""
          }`}
          disabled={filters?.categories.length === 0}
          onClick={null}
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
            className={`flex flex-col lg:flex-wrap lg:flex-row text-sm font-semibold text-gray-500 transition-all duration-300 ease-in-out ${
              sortOpen
                ? "max-h-screen mb-4 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <FilterButton
              label="Price: Low to High"
              value="priceLowHigh"
              selected={filters?.sort === "priceLowHigh"}
              onClick={null}
            />
            <FilterButton
              label="Price: High to Low"
              value="priceHighLow"
              selected={filters?.sort === "priceHighLow"}
              onClick={null}
            />
            <FilterButton
              label="Relevancy"
              value="relevancy"
              selected={filters?.sort === "relevancy"}
              onClick={null}
            />
            <FilterButton
              label="Newest"
              value="newest"
              selected={filters?.sort === "newest"}
              onClick={null}
            />
            <div className="mt-2">
              <FormInput
                label=""
                type="number"
                overlay="Min Price"
                handleChange={null}
                required={false}
              />
              <FormInput
                label=""
                type="number"
                overlay="Max Price"
                handleChange={null}
                required={false}
              />
            </div>
          </div>
        </div>
        <div className="w-full border-b lg:border-y">
          <div
            className="flex justify-between items-center cursor-pointer py-4 no-tap-highlight"
            onClick={toggleSizes}
          >
            <h4 className="text-sm font-bold uppercase">Size</h4>
            <span className="text-xl font-bold ">{sizeOpen ? "-" : "+"}</span>
          </div>
          <div
            className={`flex  flex-col lg:flex-wrap lg:flex-row text-sm font-semibold text-gray-500 transition-all duration-300 ease-in-out gap-1 ${
              sizeOpen
                ? "max-h-screen mb-4 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            {["XXS", "XS", "S", "M", "L", "XL", "XXL"].map((size) => (
              <div key={size}>
                <FilterButton
                  label={size}
                  value={size}
                  selected={filters?.genre === "unisex"}
                  onClick={null}
                />
              </div>
            ))}
          </div>
        </div>
        {sub_categories.length > 0 && (
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
              className={`text-sm flex flex-col font-semibold text-gray-500 transition-all duration-300 ease-in-out ${
                categoryOpen
                  ? "max-h-screen mb-4 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              } lg:flex-wrap lg:flex-row`}
            >
              {sub_categories.map((sub_category) => (
                <FilterButton
                  key={sub_category.id}
                  label={sub_category.title}
                  value={sub_category.title}
                  selected={filters?.categories.includes(sub_category.title)}
                  onClick={onCategoryChange}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default FilterMenu;
