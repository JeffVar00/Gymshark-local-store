"use client";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { WixClientContext } from "@/context/wixContext";
import { XMarkIcon } from "@heroicons/react/24/outline";

import Image from "next/image";

const UserMenu = ({ toggleMenu }) => {
  const wixClient = useContext(WixClientContext);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    setIsLoading(false);
    router.push(logoutUrl);
  };

  const handleProfile = () => {
    router.push("/profile");
    toggleMenu();
  };

  const handleOrders = () => {
    router.push("/profile/orders");
    toggleMenu();
  };

  const OPTIONS = [
    {
      _id: "1",
      name: "Your Profile",
      onClick: handleProfile,
      img: "/banner.jpg",
    },
    {
      _id: "2",
      name: "Your Orders",
      onClick: handleOrders,
      img: "/banner2.jpg",
    },
    {
      _id: "3",
      name: "Logout",
      onClick: handleLogout,
      img: "/banner3.jpg",
      disabled: isLoading,
    },
  ];

  return (
    <div className="flex flex-col h-full overflow-y-auto ">
      <div className="sticky top-0 bg-white z-20">
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-gray-700">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-4 items-center">
        <h2 className="text-lg font-bold uppercase text-webprimary">
          User Central
        </h2>
      </div>

      <div className="px-4 scrollbar-hide flex flex-col gap-6 justify-evenly bg-white pb-4 pt-6 bg-gradient-to-b from-gray-200 via-transparent to-transparent">
        {OPTIONS.map((option) => (
          <button
            key={option._id}
            href={option.slug}
            onClick={option.onClick}
            disabled={option.disabled}
            className="group relative block w-full h-36 overflow-hidden rounded-lg"
          >
            <div
              className={`absolute inset-0 bg-cover bg-center filter blur-0 group-hover:blur-0 transition duration-300 ease-in-out `}
            >
              {option.img ? (
                <Image
                  src={option.img}
                  alt={option.name}
                  fill="responsive"
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <div className="w-full h-full bg-noimagebackground flex items-center justify-center">
                  {/* Placeholder for no image */}
                </div>
              )}
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition duration-300 ease-in-out"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                {option.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserMenu;
