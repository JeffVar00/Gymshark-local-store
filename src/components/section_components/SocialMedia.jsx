import React from "react";
import Image from "next/image";
import Link from "next/link";

import { socials } from "@/data";

const SocialMedia = () => {
  return (
    <div className="flex flex-row gap-1 ">
      {socials.map((social, index) => (
        <Link
          href={social.link}
          key={index}
          className="flex flex-row items-center "
          passHref
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            alt={social.name}
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path d={social.icon}></path>
          </svg>
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
