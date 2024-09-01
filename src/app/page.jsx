import FeaturedCategories from "../components/section_components/FeaturedCategories";
import Featured from "@/components/section_components/Featured";
import Header from "@/components/section_components/Header";
import PageDescription from "@/components/section_components/PageDescription";
import Notification from "@/components/section_components/Notification";
import MainCategories from "@/components/section_components/MainCategories";
import Spinner from "@/components/icon_components/Spinner";

import { Suspense } from "react";

export default async function Home() {
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
              ref: "/collections/men",
            },
            {
              text: "Shop Women",
              ref: "/collections/women",
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
          <FeaturedCategories title={"How do you train?"} />
        </div>
      </Suspense>

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
              ref: "/collections/clothes?brand=Gymshark",
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
