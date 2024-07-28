import React from "react";
import PageIcon from "./PageIcon";
import PhoneIcon from "./PhoneIcon";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <div className="h-full p-4 lg:p-6 text-webprimary bg-websecundary flex flex-col items-center lg:items-start justify-between font-light md:font-bold">
      <div className="flex flex-col lg:flex-row items-center lg:gap-3">
        <PageIcon logo="black" />
        <SocialMedia />
        <div className="flex 2xl:static 2xl:hidden text-websecundary font-bold mt-4 lg:mt-0 items-center gap-2 cursor-pointer bg-webprimary px-2 rounded-md">
          <PhoneIcon classname="w-5 h-4 2xl:text-webprimary text-websecundary" />
          <span>8422-6359</span>
        </div>
      </div>
      <div className="flex flex-row items-center text-center text-xs md:text-md mt-4 pb-4 md:pb-0">
        <p>
          © 2024 | Gymshark - CR Local Store | Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
