"use client";

import React from "react";
import Link from "next/link";
import { main_categories } from "@/data";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const subcategories = [
  "Trending",
  "Leggings",
  "Products",
  "Explore",
  "Accessories",
];

let Links = [
  { name: "HOME", link: "/" },
  { name: "SERVICE", link: "/" },
  { name: "ABOUT", link: "/" },
  { name: "BLOG'S", link: "/" },
  { name: "CONTACT", link: "/" },
];

const MobileMenu = ({ toggleMenu, searchText, toggleSearch }) => {
  return (
    <div className="flex flex-col justify-center ">
      <div className="flex justify-end p-4">
        <button onClick={toggleMenu} className="text-gray-700">
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
      {/* Add your menu content here */}
      <div className="p-4 flex flex-col gap-4">
        <h2 className="text-lg font-bold uppercase">Shop</h2>
        <button
          className="flex items-center w-full p-4 bg-gray-200 rounded-md text-start"
          onClick={toggleSearch}
        >
          <MagnifyingGlassIcon className="block h-6 w-6" />
          <span className="ml-3 text-sm bg-transparent outline-none text-gray-600 w-full">
            {searchText ? searchText : "Search for a Product"}
          </span>
        </button>
      </div>
      <div className="px-4 mt-2 overflow-x-auto scrollbar-hide flex gap-6 justify-evenly bg-white pb-4 pt-6 bg-gradient-to-b from-gray-200 via-transparent to-transparent">
        {main_categories.map((category) => (
          <Link
            key={category.id}
            href={category.ref}
            onClick={toggleMenu}
            className=" text-webprimary font-bold relative after:content-[''] after:absolute after:left-0 after:bottom-[-16px] after:w-full after:h-[3px] after:bg-webprimary after:rounded-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
