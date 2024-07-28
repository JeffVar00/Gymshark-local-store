"use client";

import { useRef } from "react";

import Featured from "@/components/Featured";
import Header from "@/components/Header";
import Offer from "@/components/Offer";

import { featuredProducts } from "@/data";
import { singleProduct } from "@/data";
import { drops } from "@/data";

export default function Home() {
  const nextSectionRef = useRef(null);
  return (
    <main>
      <Header
        smsrc={"/banner.jpg"}
        mdsrc={"/banner2.jpg"}
        nextSectionRef={nextSectionRef}
      />
      <div ref={nextSectionRef}>
        <Featured
          products={featuredProducts}
          subtitle={"Women's"}
          title={"GYMSHARK MERCH"}
        />
      </div>

      <Offer />
      <Featured products={drops} subtitle={""} title={"NEW MONTH, NEW DROPS"} />
      {/* <Categories /> */}
      {/* <PageDescription /> */}
    </main>
  );
}
