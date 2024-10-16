import React from "react";
import ProductCard from "@/components/card_components/ProductCard";
import Link from "next/link";
import FilterMenu from "@/components/menu_components/FilterMenu";
import BackToTop from "@/components/icon_components/BackToTop";
import Pagination from "@/components/section_components/Pagination";
import { wixClientServer } from "@/lib/wixClientServer";

const PRODUCT_PER_PAGE = 30;

const ProductDisplay = async ({ category_id, limit, searchParams }) => {
  const wixClient = await wixClientServer();

  const collectionNames = searchParams?.collections
    ? searchParams.collections.split(",")
    : [];
  let collectionIds = [];

  if (collectionNames.length > 0) {
    const collections = await wixClient.collections
      .queryCollections()
      .hasSome("name", collectionNames)
      .find();
    collectionIds = collections.items.map((collection) => collection._id);
  }

  let productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.query || "")
    .eq("collectionIds", category_id)
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
        : 0
    );

  let productCollectionsQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.query || "")
    .eq("collectionIds", category_id)
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(100);

  if (collectionIds.length > 0) {
    productQuery = productQuery.hasSome("collectionIds", collectionIds);
    productCollectionsQuery = productCollectionsQuery.hasSome(
      "collectionIds",
      collectionIds
    );
  }

  // Determine sorting based on `searchParams.sort`
  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");
    if (sortType === "asc") {
      productQuery = productQuery.ascending(sortBy);
    } else if (sortType === "desc") {
      productQuery = productQuery.descending(sortBy);
    }
  } else {
    productQuery = productQuery.ascending("name");
  }

  const res = await productQuery.find();
  const allCollectionsQuery = await productCollectionsQuery.find();

  const allCollectionIds = allCollectionsQuery.items.map(
    (item) => item.collectionIds
  );
  const flattenedCollectionIds = allCollectionIds.flat();
  const uniqueCollectionIds = [...new Set(flattenedCollectionIds)];

  const collections = await wixClient.collections
    .queryCollections()
    .hasSome("_id", uniqueCollectionIds)
    .find();

  const namesToRemove = [
    "All-Products",
    "Destacado",
    searchParams?.cat || "",
  ].map((name) => name.toLowerCase());

  const filter_collectionNames = collections.items
    .map((collection) => collection.name)
    .filter(
      (name) => !namesToRemove.includes(name.toLowerCase().replace(" ", "-"))
    );

  console.log(collections.items);

  const totalPages = Math.max(
    1,
    Math.ceil(res._totalCount / (limit || PRODUCT_PER_PAGE))
  );

  return (
    <div className="flex flex-col mx-auto">
      {res.items.length > 0 ? (
        <>
          <div className="flex items-center justify-start w-full px-4 md:px-8 2xl:px-16 mb-6 lg:mb-0">
            <p className="text-xs md:text-sm text-gray-600">
              {res._totalCount} productos disponibles
            </p>
          </div>

          <div>
            <div className="flex flex-col lg:flex-row py-2 px-2 lg:px-6 2xl:px-16">
              <div className="w-full lg:w-72 flex flex-col items-start pb-6 lg:pb-0 px-2 md:px-6 lg:px-0">
                <div className="w-full lg:sticky h-full lg:overflow-y-auto top-[64px] max-h-[calc(100vh-64px)]">
                  <FilterMenu sub_categories={filter_collectionNames} />
                </div>
              </div>
              <div className="w-full">
                <div
                  className={`grid md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 grid-cols-2`}
                >
                  {res.items.map((product) => (
                    <Link
                      href={`/products/${product.slug}`}
                      key={product._id}
                      className="h-full text-webprimary flex flex-col justify-around transition-all duration-300 group"
                    >
                      <ProductCard
                        item={product}
                        imageSize={`h-[67vw] md:h-[45vw] lg:h-[35vw] xl:h-[27.6vw] 2xl:h-[22.5vw]`}
                      />
                    </Link>
                  ))}
                </div>
                {searchParams?.cat || searchParams?.name ? (
                  <Pagination
                    currentPage={res.currentPage || 0}
                    totalPages={totalPages}
                    hasPrev={res.hasPrev()}
                    hasNext={res.hasNext()}
                  />
                ) : null}
              </div>
            </div>
          </div>
          <BackToTop />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 my-32">
          <h2 className="font-bold uppercase">Sin resultados.</h2>
          <div className="text-gray-700 text-sm text-center mx-6">
            <span className="block">
              No encontramos productos que coincidan con tu búsqueda.
            </span>
            <span className="block">
              Intenta con otros criterios de búsqueda.
            </span>
          </div>
          <Link href="/">
            <button className="text-sm mt-2 w-60 font-bold rounded-full flex items-center justify-center p-3 bg-webprimary text-white uppercase">
              Ir al inicio
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductDisplay;
