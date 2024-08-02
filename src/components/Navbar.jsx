"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import PageIcon from "./PageIcon";
import CartIcon from "./CartIcon";
import UserIcon from "./UserIcon";

const Navbar = ({ user }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      const navbarReferencePoint = document.getElementById(
        "navbar-reference-point"
      );
      const referencePointOffset =
        navbarReferencePoint?.getBoundingClientRect().bottom;

      if (referencePointOffset !== undefined) {
        if (referencePointOffset <= 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }

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

  return (
    <div
      className={`w-full z-50 p-4 flex justify-between items-center text-webprimary bg-websecundary font-bold h-14 px-16 lg:h-16 lg:px-20 xl:px-32 transition-transform duration-300 ${
        isSticky ? `fixed top-0` : ""
      } ${
        showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      {/* Left LOGO */}
      <div className="flex-1 justify-center md:flex md:justify-start ">
        <PageIcon logo="black" />
      </div>

      {/* CENTER HUB */}
      <div className="hidden text-sm md:flex gap-8 flex-1 justify-center">
        <Link href="/">WOMEN`S</Link>
        <Link href="/">MEN`S</Link>
        <Link href="/">ACCESORIES`S</Link>
      </div>

      {/* MOBILE MENU */}
      {/* <div className="md:hidden">
        <Menu />
      </div> */}

      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <UserIcon />
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
