import SocialMedia from "./SocialMedia";
import PhoneIcon from "@/components/icon_components/PhoneIcon";
import PageIcon from "../icon_components/PageIcon";

import { contact } from "@/data";

const Contact = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-2 justify-center items-center md:items-start lg:items-end text-sm text-black">
      <div className="flex-1 justify-center lg:flex lg:justify-start ">
        <PageIcon logo="iso_beige" />
      </div>
      <div className="text-center md:text-start lg:text-end">
        <p>{contact.address}</p>
        <p>{contact.state}</p>
        <p>
          {contact.zipCode}
          {contact.country}
        </p>
      </div>
      <span className="font-semibold">{contact.email}</span>
      <div className="flex text-sm text-white font-bold mt-2 md:mt-0 lg:mt-0 items-center gap-2 cursor-pointer bg-black py-1 px-2 rounded-md">
        <PhoneIcon classname="w-5 h-4 text-white" />
        <span>{contact.phone}</span>
      </div>
      <SocialMedia />
    </div>
  );
};

export default Contact;
