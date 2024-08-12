"use client";

import React, { useEffect, useState } from "react";

const props = {
  price: 50,
  id: 123,
  options: [
    { title: "Opción 1", additionalPrice: 10 },
    { title: "Opción 2", additionalPrice: 15 },
  ],
};

const Price = ({ price, id, options = [] }) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">₡{total.toFixed()}</h2>
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className={`min-w-[6rem] p-2 ring-1 ring-${
              selected === index ? "barriosecundary" : "barrioprimary"
            } rounded-md`}
            style={{
              background: selected === index ? "rgb(231 182 004)" : "white",
              color: selected === index ? "black" : "black",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex justify-between items-center">
        {/* QUANTITY */}
        <div className="flex justify-between w-full p-3 ring-1 ring-barrioprimary ">
          <span>Cantidad</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button className="w-56 text-barrioprimary bg-barriosecundary font-bold p-3 ring-1 ring-barrioprimary">
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Price;
