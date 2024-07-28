import { products } from "@/data";
import Link from "next/link";
import React from "react";

const ProductsPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center ">
      {products.map((category) => (
        <Link
          href={`/collections/all-products/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover md:h-1/2"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className=" font-bold text-2xl p-8">{category.title}</h1>

            <button
              className={`hidden 2xl:block bg-${category.color} text-${
                category.color === "webprimary" ? "websecundary" : "webprimary"
              } py-2 px-4 rounded-md font-bold ml-5`}
            >
              Explorar
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsPage;
