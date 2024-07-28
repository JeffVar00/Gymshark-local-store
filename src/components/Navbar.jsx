"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PhoneIcon from "./PhoneIcon";
import PageIcon from "./PageIcon";
import CartIcon from "./CartIcon";

const Navbar = ({ user }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const navbarReferencePoint = document.getElementById(
        "navbar-reference-point"
      );
      const referencePointOffset =
        navbarReferencePoint?.getBoundingClientRect().top;

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
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      window.addEventListener("resize", controlNavbar);

      // Cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
        window.removeEventListener("resize", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`w-full z-50 h-16 p-4 flex justify-between items-center text-websecundary bg-webprimary font-bold lg:h-20 lg:px-20 xl:px-32 transition-transform duration-300 ${
        isSticky ? `fixed top-0` : ""
      } ${
        showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      {/* LEFT LINKS */}
      <div className="hidden lg:flex gap-4 flex-1">
        <Link href="/">Inicio</Link>
        <Link href="/collections/all-products">Productos</Link>
        <Link href="/">Contactanos</Link>
        <div className="hidden 2xl:static 2xl:flex items-center gap-2 cursor-pointer bg-webprimary 2xl:bg-websecundary 2xl:text-webprimary px-2 rounded-md">
          <PhoneIcon classname="w-5 h-4 2xl:text-webprimary text-websecundary" />
          <span>8422-6359</span>
        </div>
      </div>

      {/* LOGO */}
      <div className="flex-1 lg:flex lg:justify-center">
        <PageIcon logo="white" />
      </div>

      {/* MOBILE MENU */}
      {/* <div className="md:hidden">
        <Menu />
      </div> */}

      {/* RIGHT LINKS */}
      <div className="hidden lg:flex gap-4 items-center justify-end flex-1">
        {!user ? (
          <Link href="/login">Iniciar Sesión</Link>
        ) : (
          <div>
            <Link href="/orders">Mis ordenes</Link>
          </div>
        )}

        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
