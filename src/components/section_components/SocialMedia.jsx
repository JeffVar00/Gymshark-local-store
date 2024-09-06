import React from "react";
import Image from "next/image";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="flex flex-row gap-1">
      <Link
        href="https://www.facebook.com/profile.php?id=100087813451202"
        className="flex items-center "
        passHref
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="relative w-6 h-6 lg:w-7 lg:h-7">
          <Image
            src="/facebook.avif"
            alt="facebook"
            fill="responsive"
            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </Link>

      <Link
        href="https://www.instagram.com/elbarriocr/"
        className="flex items-center "
        passHref
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="relative w-7 h-7 lg:w-8 lg:h-8">
          <Image
            src="/instagram.avif"
            alt="instagram"
            fill="responsive"
            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </Link>
    </div>
  );
};

export default SocialMedia;
