import Image from "next/image";
import React from "react";

const Offer = () => {
  return (
    <div className="bg-black w-screen min-h-screen md:min-h-[70vh] lg:min-h-[80vh] xl:min-h-[90vh] 2xl:min-h-screen flex flex-col md:items-center md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:bg-cover md:bg-center">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col items-start text-start gap-4 md:gap-8 px-6 md:px-20">
        <h1 className="text-websecundary text-2xl md:text-4xl font-bold xl:text-6xl break-all">
          GYMSHARK MERCH
        </h1>
        <p className="text-websecundary xl:text-xl break-words">
          For locking in. For life. For the love of the game. For levelling up.
          Go get it before it's gone.
        </p>
        <button className="bg-websecundary text-webprimary rounded-md py-3 px-6 font-bold w-full md:w-32">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Offer;
