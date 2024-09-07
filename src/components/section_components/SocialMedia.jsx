import React from "react";
import Image from "next/image";
import Link from "next/link";

import { socials } from "@/data";

const SocialMedia = () => {
  return (
    <div className="flex flex-row gap-1">
      {socials.map((social, index) => (
        <Link
          href={social.link}
          key={index}
          className="flex items-center "
          passHref
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className={social.size}>
            <Image
              src={social.icon}
              alt={social.name}
              fill="responsive"
              sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
