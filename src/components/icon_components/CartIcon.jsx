import React, { useEffect, useState } from "react";
import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";

const CartIcon = ({ onClick }) => {
  const wixClient = useWixClient();
  const { counter, getCart } = useCartStore();
  useEffect(() => {
    try {
      getCart(wixClient);
    } catch (e) {
      null;
    }
  }, [wixClient, getCart]);
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2"
      aria-label="Cart"
    >
      <div className="relative w-6 h-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        <div className="absolute -top-1 -right-2 w-4 h-4 bg-webprimary rounded-full text-websecundary text-xs flex items-center justify-center z-50">
          {counter}
        </div>
      </div>
    </button>
  );
};

export default CartIcon;
