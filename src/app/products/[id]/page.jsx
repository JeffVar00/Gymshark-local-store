import React from "react";
import ProductCarousel from "@/components/section_components/ProductCarousel";
import CopyButton from "@/components/icon_components/CopyButton";
import CustomizeProducts from "@/components/section_components/CustomizeProducts";
import Add from "@/components/menu_components/Add";
import DOMPurify from "isomorphic-dompurify";
import { notFound } from "next/navigation";

import { wixClientServer } from "@/lib/wixClientServer";

const ProductPage = async ({ params }) => {
  const wixClient = await wixClientServer();

  const id = decodeURIComponent(params.id);
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", id)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];

  if (!product) {
    return <div>No encontramos el producto.</div>;
  }

  return (
    <div className="flex flex-col md:flex-row md:h-auto md:pr-4 mt-8 mb-4 md:mb-0">
      {/* Left Section - Image Grid */}
      <ProductCarousel imgs={product.media?.items} />

      {/* Right Section - Product Details */}
      <div className="flex flex-col w-full md:w-1/2 md:pl-4 items-center justify-evenly">
        <div className="flex flex-col justify-center items-center gap-2 my-10 w-1/2">
          {product.ribbon && (
            <div className="flex bg-websecundary text-webprimary font-bold text-xs md:text-md px-2 py-1 rounded-md">
              {product.ribbon}
            </div>
          )}
          <h1 className="text-xl md:text-2xl font-bold text-center text-webprimary">
            {product.name}
          </h1>
          <div
            className="text-sm text-gray-500  text-center"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(product.description),
            }}
          ></div>
          {product.priceData?.price === product.priceData?.discountedPrice ? (
            <h2 className="text-sm text-webprimary font-bold">
              {product.priceData?.formatted?.price}
            </h2>
          ) : (
            <div className="flex items-center gap-4">
              <h3 className="text-sm text-webprimary font-bold line-through">
                {product.priceData?.formatted?.price}
              </h3>
              <h2 className="text-sm text-webprimary font-bold">
                {product.priceData?.formatted?.discountedPrice}
              </h2>
            </div>
          )}
          <CopyButton />

          {product.variants && product.productOptions.length > 0 ? (
            <CustomizeProducts
              productId={product._id}
              variants={product.variants}
              productOptions={product.productOptions}
            />
          ) : (
            <Add
              productId={product._id}
              variantId="00000000-0000-0000-0000-000000000000"
              stockNumber={
                product.stock?.trackInventory
                  ? product.stock?.quantity || 0
                  : null
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
