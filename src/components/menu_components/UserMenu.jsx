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
    router.push("/perfil");
    toggleMenu();
  };

  const handleOrders = () => {
    router.push("/perfil/pedidos");
    toggleMenu();
  };

  const OPTIONS = [
    {
      _id: "1",
      name: "Mi Perfil",
      onClick: handleProfile,
      img: "/banner.avif",
    },
    {
      _id: "2",
      name: "Mis Ordenes",
      onClick: handleOrders,
      img: "/banner2.avif",
    },
    {
      _id: "3",
      name: "Cerrar Sesión",
      onClick: handleLogout,
      img: "/banner3.avif",
      disabled: isLoading,
    },
  ];

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-white">
      <div className="bg-white border-b-2 border-webprimary w-full fixed px-6 flex flex-row justify-between gap-6 py-4 z-50 items-center">
        <div className="flex font-bold text-xl"></div>
        <div className="flex font-bold uppercase text-webprimary">
          Central de usuario
        </div>
        <div className="flex justify-end">
          <button onClick={toggleMenu} className="text-gray-700">
            <XMarkIcon className="h-8 w-8" />
          </button>
        </div>
      </div>

      <div className="mt-14 px-4 scrollbar-hide flex flex-col gap-6 justify-evenly bg-white pb-4 pt-6 bg-gradient-to-b from-gray-200 via-transparent to-transparent">
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
                  priority={true}
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
