"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const subcategories = [
  "Trending",
  "Leggings",
  "Products",
  "Explore",
  "Accessories",
];

const main_categories = [
  { id: 1, name: "Women's", href: "/" },
  { id: 2, name: "Men's", href: "/" },
  { id: 3, name: "Accessories", href: "/" },
];

let Links = [
  { name: "HOME", link: "/" },
  { name: "SERVICE", link: "/" },
  { name: "ABOUT", link: "/" },
  { name: "BLOG'S", link: "/" },
  { name: "CONTACT", link: "/" },
];

const MobileMenu = ({ Icon, toggleMenu }) => {
  return (
    <div>
      <div className="flex justify-end p-4">
        <button onClick={toggleMenu} className="text-gray-700">
          <Icon className="h-6 w-6" />
        </button>
      </div>
      {/* Add your menu content here */}
      <div className="p-4">
        <h2 className="text-2xl font-bold">Menu</h2>
        {/* Add more menu items here */}
      </div>
    </div>
  );
};

export default MobileMenu;
