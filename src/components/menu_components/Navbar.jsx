"use client";

import { useEffect, useState } from "react";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import PageIcon from "@/components/icon_components/PageIcon";
import CartIcon from "@/components/icon_components/CartIcon";
import UserIcon from "@/components/icon_components/UserIcon";
import MobileMenu from "./MobileMenu";
import SearchMenu from "./SearchMenu";
import BagMenu from "./BagMenu";

import { useWixClient } from "@/hooks/useWixClient";
import dynamic from "next/dynamic";
const UserMenu = dynamic(() => import("./UserMenu"), { ssr: false });

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const wixClient = useWixClient();
  const router = useRouter();

  let isLoggedIn = wixClient.auth.loggedIn();
  const handleProfile = () => {
    isLoggedIn = wixClient.auth.loggedIn();
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      toggleProfile();
    }
  };

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
    if (
      isMenuOpen ||
      isSearchOpen ||
      isDesktopSearchOpen ||
      isBagOpen ||
      isProfileOpen
    ) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen, isSearchOpen, isDesktopSearchOpen, isBagOpen, isProfileOpen]);

  return (
    <div>
      <nav
        className={`w-full z-50 flex justify-between items-center text-webprimary bg-websecundary font-bold h-14 px-4 lg:h-16 lg:px-16 fixed top-0 }`}
      >
        {/* MOBILE MENU */}
        <div className="flex gap-4 items-center justify-start flex-1 lg:hidden">
          <button
            onClick={toggleMenu}
            className="rounded-xl text-webprimary hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            aria-label="Abrir menú principal"
          >
            <span className="sr-only">Abrir menú principal</span>
            <Bars3Icon className="block h-6 w-6" />
          </button>
          <button
            onClick={toggleSearch}
            className="rounded-xl text-webprimary hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            aria-label="Abrir menú de búsqueda"
          >
            <span className="sr-only">Abrir menú de búsqueda</span>
            <MagnifyingGlassIcon className="block h-6 w-6" />
          </button>
        </div>

        {/* Left LOGO */}
        <div className="flex-1 justify-center lg:flex lg:justify-start ">
          <PageIcon logo="beige" />
        </div>

        {/* RIGHT LINKS */}
        <div className="flex gap-4 items-center justify-end flex-1">
          <button
            className="hidden lg:flex justify-end xl:justify-start items-center h-12 xl:w-64 xl:p-4 xl:bg-white rounded-md text-start font-normal"
            onClick={toggleDesktopSearch}
          >
            <MagnifyingGlassIcon className="block h-6 w-6" />
            <span className="hidden xl:flex ml-3 text-sm bg-transparent outline-none text-webprimary w-full">
              {searchText ? searchText : "Buscar productos"}
            </span>
          </button>

          <UserIcon onClick={handleProfile} />
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
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out ${
          isProfileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleProfile}
      ></div>
      <div
        className={`fixed w-full lg:w-[40%] xl:w-[30%] inset-y-0 right-0 bg-websecundary z-50 transform ${
          isProfileOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {isProfileOpen && <UserMenu toggleMenu={toggleProfile} />}
      </div>
    </div>
  );
};

export default Navbar;
