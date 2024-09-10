import FeaturedCategories from "../components/section_components/FeaturedCategories";
import Featured from "@/components/section_components/Featured";
import Header from "@/components/section_components/Header";
// import PageDescription from "@/components/section_components/PageDescription";
import Notification from "@/components/section_components/Notification";
import Spinner from "@/components/icon_components/Spinner";
import BackToTop from "@/components/icon_components/BackToTop";

import { Suspense } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Notification message="La moda acaba de llegar" />
      <Header
        details={{
          title: "La moda acaba de llegar",
          description:
            "Todos sabemos lo que vas a usar estos días. Mejor cómpralos ahora.",
          smsrc: "/banner.avif",
          mdsrc: "/banner.avif",
          buttons: [
            {
              text: "Para Hombres",
              ref: "/colecciones?cat=mujer",
            },
            {
              text: "Para Mujeres",
              ref: "/colecciones?cat=hombre",
            },
          ],
        }}
      />

      <Suspense fallback={<Spinner />}>
        <div>
          <Featured
            categoryName="featured"
            title="Nuestros favoritos"
            subtitle="Ve lo que la gente más quiere"
            featured_message="Ver más"
            categoryId={process.env.NEXT_PUBLIC_FEATURED_PRODUCTS_CATEGORY_ID}
            limit={10}
          />
        </div>
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <div>
          <FeaturedCategories title="Lo que estás buscando" />
        </div>
      </Suspense>

      <Header
        details={{
          title: "GYMSHARK",
          description:
            "Para concentrarse. Para la vida. Por el amor al juego. Para subir de nivel. Ve por ello antes de que se acabe.",
          smsrc: "/bannerbottom.avif",
          mdsrc: "/banner2.avif",
          buttons: [
            {
              text: "Descubre más",
              ref: "/colecciones?cat=gymshark",
            },
          ],
        }}
      />

      <Suspense fallback={<Spinner />}>
        <div>
          <Featured
            categoryName="gymshark"
            title="TEMPORADA GYMSHARK"
            subtitle="El favorito de todos"
            featured_message="Ver más"
            categoryId={process.env.NEXT_PUBLIC_SEASON_PRODUCTS_CATEGORY_ID}
            limit={10}
          />
        </div>
      </Suspense>

      <BackToTop />

      <div className="w-full bg-webprimary mt-12 py-28 text-center text-websecundary items-center justify-center">
        <h2 className="text-xl lg:text-3xl font-bold">¿Qué estás esperando?</h2>
        <p className="mt-4 text-center text-sm lg:text-lg px-8">
          Comienza a comprar los mejores productos del mercado.
        </p>
        <Link href={"/collections?cat=all-products"}>
          <button className="text-sm lg:text-base mt-6 font-bold bg-websecundary text-webprimary px-6 lg:px-8 py-2 lg:py-4 rounded-md">
            Nuestros productos
          </button>
        </Link>
      </div>
      {/* <PageDescription /> */}
    </main>
  );
}
