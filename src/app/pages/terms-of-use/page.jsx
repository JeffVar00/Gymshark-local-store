const LASTUPDATED = "6 Sep 2024";
const TermsOfUse = () => {
  return (
    <div className="flex flex-col items-center px-4 py-12 lg:px-20 lg:py-16 h-auto mt-12 mx-6">
      <div></div>

      <div className="flex flex-col items-center py-12 lg:py-40">
        <h1 className="text-2xl font-bold text-center lg:text-8xl ">
          TERMS OF USE
        </h1>
        <div className="flex flex-row mt-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 h-4 w-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <p className="text-sm text-gray-500">Last updated: {LASTUPDATED}</p>
        </div>
      </div>
      <div className="max-w-6xl mt-18 space-y-8 text-left text-gray-800">
        {/* What are cookies? Section */}
        <div>
          <h2 className="text-lg font-bold">Title here</h2>
          <p className="mt-4 text-sm md:text-base">Text here.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
