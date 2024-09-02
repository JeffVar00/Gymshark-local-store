"use client";

// import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import { useState } from "react";

const Add = ({ productId, variantId, stockStatus, stockNumber }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && (quantity < stockNumber || stockStatus === true)) {
      setQuantity((prev) => prev + 1);
    }
  };

  const isValidStock = () => {
    if (stockStatus) {
      if (stockNumber == null) {
        return true;
      } else if (stockNumber > 0) {
        return true;
      }
    }
    return false;
  };

  const wixClient = useWixClient();

  //const { addItem, isLoading } = useCartStore();

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col ">
        <div className="flex flex-col items-center gap-4">
          <div
            className={`bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32 ${
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
              disabled={quantity === stockNumber || isValidStock() === false}
            >
              +
            </button>
          </div>
          {stockNumber < 1 && stockStatus === false ? (
            <div className="text-xs">Product is out of stock</div>
          ) : (
            stockNumber > 0 && (
              <div className="text-xs">
                Only{" "}
                <span className="text-orange-500">{stockNumber} items</span>{" "}
                left!
                <br /> {"Don't"} miss it
              </div>
            )
          )}
        </div>
        <button
          onClick={null}
          disabled={isValidStock() ? false : true}
          className="w-full mt-8 p-5 text-sm bg-webprimary text-websecundary font-bold rounded-full mb-6 uppercase justify-center  md:mb-6 md:mx-auto md:w-[98%] disabled:bg-gray-200 disabled:ring-0 disabled:text-white disabled:ring-none"
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default Add;
