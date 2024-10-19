"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { recomendedSearches } from "@/data";
import ProductCard from "@/components/card_components/ProductCard";
import Link from "next/link";
import Spinner from "@/components/icon_components/Spinner";
import { WixClientContext } from "@/context/wixContext";

const SEARCH_LIMIT = 4;

const SearchMenu = ({ toggleMenu, historySearch, setGlobalSearch }) => {
  const inputRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (historySearch) {
      setSearchText(historySearch);
    }
  }, [historySearch]);

  const clearSearch = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      setSearch({ target: { value: "" } });
      setSearchResults([]);
      setNoResults(false);
    }
  };

  const autocompleteSearch = (e) => {
    if (inputRef.current) {
      inputRef.current.value = e;
      setSearch({ target: { value: e } });
    }
  };

  const setSearch = (e) => {
    setSearchText(e.target.value);
    setGlobalSearch(e.target.value);
  };

  const wixClient = useContext(WixClientContext);

  const handleSearch = useCallback(() => {
    const getProducts = async () => {
      const res = await wixClient.products
        .queryProducts()
        .startsWith("name", searchText || "")
        .limit(SEARCH_LIMIT)
        .find();
      setSearchResults(res.items);

      if (res.items.length === 0) {
        setNoResults(true);
      }

      setLoading(false);
    };
    getProducts();
  }, [wixClient, searchText]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchText !== "") {
        setLoading(true);
        handleSearch();
      }
    }, 600);
    return () => clearTimeout(delayDebounceFn);
  }, [searchText, handleSearch]);

  if (loading === true) {
    return <Spinner></Spinner>;
  }

  return (
    <div
      className={`bg-white h-screen lg:h-auto flex flex-col lg:mt-8 items-center lg:gap-4`}
    >
      <div className="sticky w-full flex flex-row justify-between gap-6 py-3 lg:py-6 px-4 lg:p-6  border-b border-webprimary items-center bg-websecundary">
        <div className="hidden lg:flex font-bold text-xl"></div>
        <div className="lg:ml-8 flex justify-start items-center h-11 w-full lg:w-96 p-4 rounded-md text-start font-normal bg-white focus-within:border-2 focus-within:border-webprimary">
          <MagnifyingGlassIcon className="block h-6 w-6 text-webprimary" />
          <input
            id="search_input"
            type="text"
            ref={inputRef}
            value={searchText}
            onChange={setSearch}
            className="flex ml-3 text-sm bg-transparent outline-none text-webprimary w-full"
          />
          <label
            htmlFor="search_input"
            className="my-3 ml-9 text-sm absolute bg-transparent outline-none text-webprimary pointer-events-none"
          >
            {searchText ? "" : "Buscar productos"}
          </label>
          <div className={`flex justify-end ${searchText ? "" : "hidden"}`}>
            <button
              onClick={clearSearch}
              className="text-white bg-gray-300 rounded-full w-5 h-5 flex items-center justify-center"
            >
              {searchText ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                </svg>
              ) : (
                <></>
              )}
            </button>
          </div>
        </div>

        <div className="flex justify-end ">
          <button onClick={toggleMenu} className="text-gray-700">
            <XMarkIcon className="h-8 w-8" />
          </button>
        </div>
      </div>

      {/* TRENDING SEARCHES */}
      {/* <div
        className={`px-4 w-full lg:w-2/3 flex flex-row ${
          searchText === "" ? "" : "hidden"
        } justify-start items-center gap-4`}
      >
        <h2 className="text-sm uppercase font-bold text-start my-4">
          Trending Searches
        </h2>
      </div>
      <div
        className={`px-4 w-full lg:w-2/3 flex flex-row ${
          searchText === "" ? "" : "hidden"
        } justify-start items-center gap-2 mb-8 md:mb-36`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
            clipRule="evenodd"
          />
        </svg>

        <div className="flex flex-row gap-2 overflow-x-auto scrollbar-hide">
          {recomendedSearches.map((search, index) => (
            <button
              key={index}
              className="p-2 text-xs w-full uppercase font-bold bg-websecundary rounded-lg whitespace-nowrap text-center"
              onClick={() => autocompleteSearch(search)}
            >
              {search}
            </button>
          ))}
        </div>
      </div> */}

      {searchResults.length > 0 ? (
        <div
          className={`w-full px-3 h-full overflow-y-auto lg:overflow-y-none lg:w-auto text-webprimary flex flex-col  ${
            searchText === "" ? "hidden" : ""
          }`}
        >
          <div className={`py-2 px-1 w-full flex justify-start items-center`}>
            <h2 className="text-sm uppercase font-bold text-start mt-3">
              Resultados de la busqueda
            </h2>
          </div>
          {/* WRAPPER */}
          <div className="mr-2 grid grid-cols-2 gap-2 lg:gap-0 lg:flex lg:pt-4 border-b lg:border-y border-gray-300 ">
            {/* SINGLE ITEM */}
            {searchResults.map((product) => (
              <Link
                key={product._id}
                href={`/products/${product.slug}`}
                onClick={toggleMenu}
                className="mx-1 text-webprimary flex flex-col justify-around w-full lg:w-[22vw] xl:w-[18vw] group"
              >
                <ProductCard
                  item={product}
                  imageSize="h-[60vw] md:h-[60vw] lg:h-[30vw] xl:h-[22vw] 2xl:h-[24vw]"
                />
              </Link>
            ))}
          </div>
          <div
            className={`pb-8 mb-8 my-4 w-full flex justify-end items-center ${
              searchText === "" ? "hidden" : ""
            }`}
          >
            <Link
              href={`/collections?query=${searchText}`}
              className="text-sm text-webpimary"
              onClick={toggleMenu}
            >
              Buscar más{" "}
              <span className="underline font-bold">{searchText}</span>
            </Link>
          </div>
        </div>
      ) : noResults ? (
        <div className="flex flex-col items-center h-full justify-center gap-3 my-32 text-webprimary">
          <h2 className="font-bold uppercase">No se encontraron resultados.</h2>
          <div className="text-black text-sm text-center mx-6">
            <span className="block">
              Parece que no hay productos que coincidan con tu búsqueda.
            </span>
            <span className="block">
              Por favor intenta con otra palabra clave.
            </span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchMenu;
