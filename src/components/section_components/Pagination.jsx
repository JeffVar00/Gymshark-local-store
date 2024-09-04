"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ currentPage, totalPages, hasPrev, hasNext }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const createPageUrl = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-12 flex justify-between w-full items-center">
      <button
        className="rounded-md bg-webprimary text-white p-2 text-sm w-20 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300"
        disabled={!hasPrev}
        onClick={() => createPageUrl(currentPage - 1)}
      >
        {"< Prev"}
      </button>
      Page {currentPage + 1} of {totalPages}
      <button
        className="rounded-md bg-webprimary text-white p-2 text-sm w-20 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300"
        disabled={!hasNext}
        onClick={() => createPageUrl(currentPage + 1)}
      >
        {"Next >"}
      </button>
    </div>
  );
};

export default Pagination;
