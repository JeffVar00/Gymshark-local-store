"use client";

import { useRef } from "react";

import FeaturedCategories from "@/components/FeaturedCategories";
import Featured from "@/components/Featured";
import Header from "@/components/Header";
import PageDescription from "@/components/PageDescription";
import Notification from "@/components/Notification";
import { featuredProducts, categories, main_categories } from "@/data";
import MainCategories from "@/components/MainCategories";

export default function Home() {
  const nextSectionRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <Notification />
      <Header
        details={{
          title: "NEW STUFF JUST DROPPED",
          description:
            "We all know you’re gonna be wearing these next time you go gym. Might as well grab them now.",
          smsrc: "/bannerbottom.jpg",
          mdsrc: "/banner.jpg",
          buttons: [
            {
              text: "Shop Men",
              ref: "/",
            },
            {
              text: "Shop Women",
              ref: "/",
            },
          ],
        }}
        nextSectionRef={nextSectionRef}
      />

      <div ref={nextSectionRef}>
        <Featured
          products={featuredProducts}
          subtitle={"Everybody's Favourite"}
          title={"GYMSHARK SEASON"}
        />
      </div>

      <FeaturedCategories categories={categories} title={"How do you train?"} />

      <Header
        details={{
          title: "GYMSHARK MERCH",
          description:
            "For locking in. For life. For the love of the game. For levelling up. Go get it before it’s gone.",
          smsrc: "/banner.jpg",
          mdsrc: "/banner2.jpg",
          buttons: [
            {
              text: "Shop Now",
              ref: "/",
            },
          ],
        }}
      />

      <MainCategories categories={main_categories} />

      <PageDescription />
      <div className="flex flex-col items-center justify-center">
        <button
          onClick={scrollToTop}
          className="flex items-center mt-4 md:mt-0 font-semibold text-webprimary hover:text-gray-500"
        >
          Back to Top
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            ></path>
          </svg>
        </button>
      </div>
    </main>
  );
}
