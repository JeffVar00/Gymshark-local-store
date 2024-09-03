"use client";

import { useContext, useEffect, useState, useCallback } from "react";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/outline";
import PageIcon from "../icon_components/PageIcon";
import CartIcon from "../icon_components/CartIcon";
import UserIcon from "../icon_components/UserIcon";
import MobileMenu from "./MobileMenu";
import SearchMenu from "./SearchMenu";
import BagMenu from "./BagMenu";

import { WixClientContext } from "@/context/wixContext";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  const wixClient = useContext(WixClientContext);
  useEffect(() => {
    const getCategories = async () => {
      const res = await wixClient.collections.queryCollections().find();
      setCategories(res.items);
    };
    getCategories();
  }, [wixClient]);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
  const [isDesktopSearchOpen, setIsDesktopSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleDesktopSearch = () => {
    setIsDesktopSearchOpen(!isDesktopSearchOpen);
  };

  const setGlobalSearch = (e) => {
    setSearchText(e);
  };

  // MOBILE MENU LOGIC
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // MOBILE MENU LOGIC
  const [isBagOpen, setIsBagOpen] = useState(false);

  const toggleBag = () => {
    setIsBagOpen(!isBagOpen);
  };

  // SHARED MENU LOGIC
  useEffect(() => {
    if (isMenuOpen || isSearchOpen || isDesktopSearchOpen || isBagOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen, isSearchOpen, isDesktopSearchOpen, isBagOpen]);

  return (
    <div>
      <nav
        className={`w-full z-50 flex justify-between items-center text-webprimary bg-websecundary font-bold h-14 px-4 lg:h-16 lg:px-16 transition-transform duration-300 fixed top-0 ${
          showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        {/* MOBILE MENU */}
        <div className="flex gap-4 items-center justify-start flex-1 lg:hidden">
          <button
            onClick={toggleMenu}
            className="rounded-xl text-webprimary hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="block h-6 w-6" />
          </button>
          <button
            onClick={toggleSearch}
            className="rounded-xl text-webprimary hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open search menu</span>
            <MagnifyingGlassIcon className="block h-6 w-6" />
          </button>
        </div>

        {/* Left LOGO */}
        <div className="flex-1 justify-center lg:flex lg:justify-start ">
          <PageIcon logo="black" />
        </div>

        {/* CENTER HUB
        <div className="hidden text-sm lg:flex gap-8 flex-1 justify-center uppercase">
          {main_categories.map((category) => (
            <Link
              key={category.id}
              href={`/collections/${category.slug}`}
              className="text-webprimary relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[3px] after:bg-webprimary after:rounded-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {category.title}
            </Link>
          ))}
        </div> */}

        {/* RIGHT LINKS */}
        <div className="flex gap-4 items-center justify-end flex-1">
          <button
            className="hidden lg:flex justify-end xl:justify-start items-center h-12 xl:w-64 xl:p-4 xl:bg-gray-200 rounded-md text-start font-normal"
            onClick={toggleDesktopSearch}
          >
            <MagnifyingGlassIcon className="block h-6 w-6" />
            <span className="hidden xl:flex ml-3 text-sm bg-transparent outline-none text-gray-500 w-full">
              {searchText ? searchText : "Search for a Product"}
            </span>
          </button>
          <UserIcon />
          <CartIcon onClick={toggleBag} />
        </div>
      </nav>
      <div
        className={`fixed  lg:hidden inset-0 bg-websecundary z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {isMenuOpen && (
          <MobileMenu
            categories={categories}
            toggleMenu={toggleMenu}
            searchText={searchText}
            toggleSearch={toggleSearch}
          />
        )}
      </div>
      <div
        className={`fixed lg:hidden inset-0 bg-websecundary z-50 transform ${
          isSearchOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {isSearchOpen && (
          <SearchMenu
            toggleMenu={toggleSearch}
            historySearch={searchText}
            setGlobalSearch={setGlobalSearch}
          />
        )}
      </div>
      <div
        className={`hidden lg:fixed lg:block inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out ${
          isDesktopSearchOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDesktopSearch}
      ></div>
      <div
        className={`hidden lg:fixed lg:block inset-x-0 top-0 bg-websecundary z-50 transform ${
          isDesktopSearchOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out rounded-b-lg`}
      >
        {isDesktopSearchOpen && (
          <SearchMenu
            toggleMenu={toggleDesktopSearch}
            historySearch={searchText}
            setGlobalSearch={setGlobalSearch}
          />
        )}
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out ${
          isBagOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleBag}
      ></div>
      <div
        className={`h-full fixed ${
          isBagOpen
            ? "top-0 right-0 translate-x-0"
            : "top-0 right-[-100%] translate-x-full"
        } w-full lg:w-[40%] xl:w-[30%] bg-white z-50 transition-transform duration-300 ease-in-out`}
      >
        <div className="relative h-full">
          {isBagOpen && (
            <div className="p-4">
              <BagMenu toggleMenu={toggleBag} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
