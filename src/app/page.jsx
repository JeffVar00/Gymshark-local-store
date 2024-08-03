"use client";

import { useRef } from "react";

import FeaturedCategories from "@/components/FeaturedCategories";
import Featured from "@/components/Featured";
import Header from "@/components/Header";
import PageDescription from "@/components/PageDescription";

import { featuredProducts, drops, categories, main_categories } from "@/data";
import MainCategories from "@/components/MainCategories";

export default function Home() {
  const nextSectionRef = useRef(null);
  return (
    <main>
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
      />

      <MainCategories categories={main_categories} />

      <PageDescription />
    </main>
  );
}
