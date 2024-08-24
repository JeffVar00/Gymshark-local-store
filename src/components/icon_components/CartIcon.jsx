import React from "react";

const CartIcon = ({ onClick }) => {
  return (
    <button onClick={onClick} className="flex items-center gap-2">
      <div className="relative w-6 h-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-full h-full text-webprimary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H19m-4 8v6a2 2 0 11-4 0v-6m4 0H7m0 0v6a2 2 0 11-4 0v-6m4 0H3"
          />
        </svg>
      </div>
    </button>
  );
};

export default CartIcon;
