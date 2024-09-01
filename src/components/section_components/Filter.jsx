import React, { useState, useEffect, useCallback } from "react";
import FilterMenu from "@/components/menu_components/FilterMenu";

const Filter = ({ searchParams }) => {
  const [isFilterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isFilterOpen]);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1000) {
        if (window.scrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      } else {
        setShowNavbar(true);
      }
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      window.addEventListener("resize", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
        window.removeEventListener("resize", controlNavbar);
      };
    }
  }, [controlNavbar]);
  const [filters, setFilters] = useState({
    genre: "unisex",
    sort: "relevancy",
    categories: [],
  });
  return (
    <div className="flex flex-col mx-auto">
      <div
        className={`flex flex-row sticky z-20 bg-white py-4 justify-between lg:hidden px-2 gap-2 transition-transform duration-300 ease-in-out`}
        style={{
          top: showNavbar ? `55px` : `20px`,
          transform: showNavbar ? "translateY(0)" : "translateY(-20px)",
        }}
      >
        <button
          className="w-full py-3 relative text-xs bg-websecundary rounded-full font-bold flex justify-center items-center uppercase"
          onClick={toggleFilter}
        >
          Filter & Sort
        </button>
      </div>
      {/* Background Blur */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 transition-opacity duration-300 ease-in-out ${
          isFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } lg:hidden`}
        onClick={toggleFilter}
      ></div>
      {/* Filter Mobile Menu */}
      <div
        className={`fixed lg:hidden inset-x-0 bottom-0 bg-websecundary z-50 transform ${
          isFilterOpen ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 ease-in-out rounded-t-lg`}
        style={{ height: "90%" }}
      >
        <div className="relative h-full overflow-y-auto">
          {isFilterOpen && (
            <div className="p-4">
              <FilterMenu
                sub_categories={sub_categories}
                filters={filters}
                onGenreChange={handleGenreChange}
                onSortChange={handleSortChange}
                onCategoryChange={handleCategoryChange}
                clearAllFilters={clearAllFilters}
                toggleFilter={toggleFilter}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
