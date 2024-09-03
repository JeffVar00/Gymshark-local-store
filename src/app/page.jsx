import FeaturedCategories from "../components/section_components/FeaturedCategories";
import Featured from "@/components/section_components/Featured";
import Header from "@/components/section_components/Header";
import PageDescription from "@/components/section_components/PageDescription";
import Notification from "@/components/section_components/Notification";
import Spinner from "@/components/icon_components/Spinner";

import { Suspense } from "react";

const SEARCH_CATEGORIES = [
  "Accessories",
  "Home",
  "Men",
  "Women",
  "Kids",
  "All Products",
];

export default async function Home() {
  return (
    <main>
      <Notification />
      <Header
        details={{
          title: "Fashion just arrived",
          description:
            "We all know you’re gonna be wearing this days. Might as well grab them now.",
          smsrc: "/banner.jpg",
          mdsrc: "/banner.jpg",
          buttons: [
            {
              text: "Shop Men",
              ref: "/collections?cat=men",
            },
            {
              text: "Shop Women",
              ref: "/collections?cat=women",
            },
          ],
        }}
      />

      <Suspense fallback={<Spinner></Spinner>}>
        <div>
          <Featured
            title={"Our favorites"}
            subtitle={"See what the people wants the most"}
            categoryId={process.env.NEXT_PUBLIC_FEATURED_PRODUCTS_CATEGORY_ID}
            limit={10}
          />
        </div>
      </Suspense>

      <Suspense fallback={<Spinner></Spinner>}>
        <div>
          <FeaturedCategories
            title={"What you are looking for"}
            search_categories={SEARCH_CATEGORIES}
          />
        </div>
      </Suspense>

      <Header
        details={{
          title: "GYMSHARK MERCH",
          description:
            "For locking in. For life. For the love of the game. For levelling up. Go get it before it’s gone.",
          smsrc: "/bannerbottom.jpg",
          mdsrc: "/banner2.jpg",
          buttons: [
            {
              text: "Shop Now",
              ref: "/collections?cat=gymshark",
            },
          ],
        }}
      />

      <Suspense fallback={<Spinner></Spinner>}>
        <div>
          <Featured
            title={"GYMSHARK SEASON"}
            subtitle={"Everybody's Favorite"}
            categoryId={process.env.NEXT_PUBLIC_GYMSHARK_PRODUCTS_CATEGORY_ID}
            limit={10}
          />
        </div>
      </Suspense>

      <PageDescription />
    </main>
  );
}
