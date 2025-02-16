"use client";

import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import { useState } from "react";
import Spinner from "@/components/icon_components/Spinner";

const Add = ({ productId, variantId, stockNumber }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && (stockNumber ? quantity < stockNumber : isValidStock)) {
      setQuantity((prev) => prev + 1);
    }
  };

  const isValidStock = () => {
    if (stockNumber > 0) {
      return true;
    }
    if (stockNumber === null) {
      return true;
    }
    return false;
  };

  const wixClient = useWixClient();
  const { addItem, isLoading } = useCartStore();

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col ">
        <div className="flex flex-col items-center gap-4">
          <div
            className={`bg-websecundary text-webprimary py-2 px-4 rounded-3xl flex items-center justify-between w-32 ${
              isValidStock() ? "opacity-100" : "opacity-50"
            } `}
          >
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("d")}
              disabled={quantity === 1}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("i")}
              disabled={
                stockNumber ? quantity === stockNumber : !isValidStock()
              }
            >
              +
            </button>
          </div>
          {stockNumber && stockNumber < 1 ? (
            <div className="text-xs">Product is out of stock</div>
          ) : (
            stockNumber > 0 && (
              <div className="text-xs">
                {stockNumber === 1 ? "Queda" : "Quedan"}{" "}
                <span className="text-webprimary">
                  {stockNumber} {stockNumber === 1 ? "unidad" : "unidades"}
                </span>{" "}
                <br /> No te quedes sin el tuyo.
              </div>
            )
          )}
        </div>
        {!isLoading ? (
          <button
            onClick={() => addItem(wixClient, productId, variantId, quantity)}
            disabled={isValidStock() ? false : true || isLoading}
            className="w-full mt-8 p-4 text-xs bg-webprimary text-white font-bold rounded-full mb-2 uppercase justify-center lg:mb-6 md:mx-auto md:w-[98%] disabled:bg-gray-200 disabled:ring-0 disabled:text-white disabled:ring-none"
          >
            Agregar al carrito
          </button>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Add;
