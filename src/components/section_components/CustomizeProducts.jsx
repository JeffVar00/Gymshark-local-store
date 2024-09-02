"use client";

import { products } from "@wix/stores";
import { useEffect, useState } from "react";
import Add from "@/components/menu_components/Add";

const CustomizeProducts = ({ productId, variants, productOptions }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedVariant, setSelectedVariant] = useState();

  useEffect(() => {
    const variant = variants.find((v) => {
      const variantChoices = v.choices;
      if (!variantChoices) return false;
      return Object.entries(selectedOptions).every(
        ([key, value]) => variantChoices[key] === value
      );
    });
    setSelectedVariant(variant);
  }, [selectedOptions, variants]);

  const handleOptionSelect = (optionType, choice) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  const isValidStock = (variant) => {
    if (variant.stock?.inStock) {
      if (variant.stock?.quantity == null) {
        return true;
      } else if (variant.stock.quantity > 0) {
        return true;
      }
    }
    return false;
  };

  const isVariantInStock = (choices) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) && isValidStock(variant)
      );
    });
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center text-center h-full">
      {productOptions.map((option) => (
        <div className="flex flex-col gap-4 " key={option.name}>
          <h4 className="block text-xs font-medium text-gray-500 ml-2">
            Select a {option.name}
          </h4>
          <ul className="flex items-center justify-center text-center rounded-lg border-grey-200 border-2 px-2 py-1">
            {option.choices?.map((choice) => {
              const disabled = !isVariantInStock({
                ...selectedOptions,
                [option.name]: choice.description,
              });

              const selected =
                selectedOptions[option.name] === choice.description;

              const clickHandler = disabled
                ? undefined
                : () => handleOptionSelect(option.name, choice.description);

              return option.name === "Color" ? (
                <li
                  className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative mx-2 my-2 flex flex-row flex-wrap"
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                  key={choice.description}
                >
                  {selected && (
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                  {disabled && (
                    <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </li>
              ) : (
                <li
                  className={`flex items-center justify-center w-[12vw] h-12 md:h-12 md:w-12 lg:w-12 my-1 p-3 text-xs rounded-sm border-webprimary ${
                    disabled
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : selected
                      ? "bg-webprimary text-websecundary"
                      : "bg-white text-webprimary hover:text-websecundary hover:bg-webprimary"
                  }`}
                  style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    boxShadow: disabled ? "none" : "",
                  }}
                  key={choice.description}
                  onClick={clickHandler}
                >
                  {choice.description}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <Add
        productId={productId}
        variantId={
          selectedVariant?._id || "00000000-0000-0000-0000-000000000000"
        }
        stockStatus={
          selectedVariant?.stock?.trackQuantity
            ? true
            : selectedVariant?.stock?.inStock || false
        }
        stockNumber={selectedVariant?.stock?.quantity || 0}
      />
      {/* COLOR SKELETON */}
      {/* 
          <ul className="flex items-center gap-3">
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
              <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500"></li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500">
              <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </li>
          </ul> */}
    </div>
  );
};

export default CustomizeProducts;
