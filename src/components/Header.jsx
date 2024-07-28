"use client";

const Header = () => {
  return (
    <div className="flex flex-col w-screen h-[calc(100vh-6rem)] md:h-auto md:aspect-[21/9] bg-cover bg-center md:flex-row bg-[url('/banner.png')] md:bg-[url('/banner.png')] md:items-center relative">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col items-start text-start gap-4 pb-24 px-6 md:pb-0 md:px-14 justify-end relative z-10">
        <h1 className="text-websecundary text-2xl md:text-3xl max-w-md md:max-w-xl font-bold xl:text-6xl">
          GYMSHARK MERCH
        </h1>
        <p className="text-websecundary text-sm md:text-md xl:text-xl break-words max-w-sm xl:max-w-xl">
          For locking in. For life. For the love of the game. For levelling up.
          Go get it before it's gone.
        </p>
        <button className="bg-websecundary text-webprimary rounded-full py-3 px-6 font-bold w-full md:w-48">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Header;
