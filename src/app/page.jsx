import FeaturedCategories from "../components/section_components/FeaturedCategories";
import Featured from "@/components/section_components/Featured";
import Header from "@/components/section_components/Header";
import PageDescription from "@/components/section_components/PageDescription";
import Notification from "@/components/section_components/Notification";
import { featuredProducts, categories, main_categories } from "@/data";
import MainCategories from "@/components/section_components/MainCategories";

const getCategories = async () => {
  const res = await fetch("https://localhost:3000/api/categories", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};

export default async function Home() {
  // const MainCategories = await getCategories();
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

      <div>
        <Featured
          products={featuredProducts}
          subtitle={"Everybody's Favorite"}
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
              ref: "/collections/men",
            },
          ],
        }}
      />

      <MainCategories categories={main_categories} />

      <PageDescription />
    </main>
  );
}
