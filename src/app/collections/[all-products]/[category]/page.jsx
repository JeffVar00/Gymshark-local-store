import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-barriosecundary border-t-2 border-barriosecundary border-l-2">
      {pizzas.map((item) => (
        <Link
          className="w-full h-[40vh] border-r-2 border-b-2 border-barriosecundary sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">₡{item.price}</h2>
            <button className="hidden group-hover:block font-bold text-sm text-barrioprimary bg-barriosecundary p-2 rounded-md">
              Agregar al carrito
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
