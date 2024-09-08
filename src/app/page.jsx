import FeaturedCategories from "../components/section_components/FeaturedCategories";
import Featured from "@/components/section_components/Featured";
import Header from "@/components/section_components/Header";
// import PageDescription from "@/components/section_components/PageDescription";
import Notification from "@/components/section_components/Notification";
import Spinner from "@/components/icon_components/Spinner";
import BackToTop from "@/components/icon_components/BackToTop";

import { Suspense } from "react";
import Link from "next/link";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main>
      <Notification />
      <Header
        details={{
          title: t("header.title"),
          description: t("header.description"),
          smsrc: t("header.smsrc"),
          mdsrc: t("header.mdsrc"),
          buttons: [
            {
              text: t("header.button_1"),
              ref: t("header.ref_1"),
            },
            {
              text: t("header.button_2"),
              ref: t("header.ref_2"),
            },
          ],
        }}
      />

      <Suspense fallback={<Spinner />}>
        <div>
          <Featured
            categoryName={"featured"}
            title={t("featured.title")}
            subtitle={t("featured.subtitle")}
            categoryId={process.env.NEXT_PUBLIC_FEATURED_PRODUCTS_CATEGORY_ID}
            limit={10}
          />
        </div>
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <div>
          <FeaturedCategories title={t("categories.title")} />
        </div>
      </Suspense>

      <Header
        details={{
          title: t("feature_header.title"),
          description: t("feature_header.description"),
          smsrc: "/bannerbottom.avif",
          mdsrc: "/banner2.avif",
          buttons: [
            {
              text: t("feature_header.button"),
              ref: "/collections?cat=gymshark",
            },
          ],
        }}
      />

      <Suspense fallback={<Spinner />}>
        <div>
          <Featured
            categoryName={"gymshark"}
            title={t("gymshark_season.title")}
            subtitle={t("gymshark_season.subtitle")}
            categoryId={process.env.NEXT_PUBLIC_GYMSHARK_PRODUCTS_CATEGORY_ID}
            limit={10}
          />
        </div>
      </Suspense>

      <BackToTop />

      <div className="w-full bg-webprimary mt-12 py-28 text-center text-websecundary items-center justify-center">
        <h2 className="text-xl lg:text-3xl font-bold">{t("cta.title")}</h2>
        <p className="mt-4 text-center text-sm lg:text-lg px-8">
          {t("cta.subtitle")}
        </p>
        <Link href={"/collections?cat=all-products"}>
          <button className="text-sm lg:text-base mt-6 font-bold bg-websecundary text-webprimary px-6 lg:px-8 py-2 lg:py-4 rounded-md">
            {t("cta.button")}
          </button>
        </Link>
      </div>
      {/* <PageDescription /> */}
    </main>
  );
}
