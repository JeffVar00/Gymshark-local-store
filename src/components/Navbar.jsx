"use client";

import { useEffect, useState, useCallback } from "react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import PageIcon from "./PageIcon";
import CartIcon from "./CartIcon";
import UserIcon from "./UserIcon";
import MobileMenu from "./MobileMenu";
import SearchMenu from "./SearchMenu";
import { main_categories } from "@/data";

const Navbar = ({ user }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1000) {
        if (window.scrollY > lastScrollY) {
          // Scroll down
          setShowNavbar(false);
        } else {
          // Scroll up
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

  // SEARCH MENU LOGIC

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // MOBILE MENU LOGIC
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // SHARED MENU LOGIC

  useEffect(() => {
    if (isMenuOpen || isSearchOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen, isSearchOpen]);

  return (
    <div>
      <nav
        className={`w-full  z-50 flex justify-between items-center text-webprimary bg-websecundary font-bold h-14 px-4 lg:h-16 lg:px-20 xl:px-32 transition-transform duration-300 fixed top-0 ${
          showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        {/* MOBILE MENU */}
        <div className="flex gap-4 items-center justify-start flex-1 md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-xl text-webprimary hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="block h-6 w-6" />
          </button>
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="rounded-xl text-webprimary hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open search menu</span>
            <MagnifyingGlassIcon className="block h-6 w-6" />
          </button>
        </div>

        {/* Left LOGO */}
        <div className="flex-1 justify-center md:flex md:justify-start ">
          <PageIcon logo="black" />
        </div>

        {/* CENTER HUB */}
        <div className="hidden text-sm md:flex gap-8 flex-1 justify-center uppercase">
          {main_categories.map((category) => (
            <Link
              key={category.id}
              href={category.ref}
              className="text-webprimary relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[3px] after:bg-webprimary after:rounded-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {category.title}
            </Link>
          ))}
        </div>

        {/* RIGHT LINKS */}
        <div className="flex gap-4 items-center justify-end flex-1 ">
          <UserIcon />
          <CartIcon />
        </div>
      </nav>
      <div
        className={`fixed inset-0 bg-websecundary z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } ${
          isSearchOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {isMenuOpen && <MobileMenu Icon={XMarkIcon} toggleMenu={toggleMenu} />}
        {isSearchOpen && (
          <SearchMenu Icon={XMarkIcon} toggleMenu={toggleSearch} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
