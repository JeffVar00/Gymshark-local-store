import React from "react";
import Image from "next/image";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="flex flex-row">
      <Link
        href="https://www.facebook.com/profile.php?id=100087813451202"
        className="flex items-center gap-2"
        passHref
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="relative w-6 h-6 md:w-8 md:h-8">
          <Image src="/facebook.svg" alt="facebook" fill />
        </div>
      </Link>

      <Link
        href="https://www.instagram.com/elbarriocr/"
        className="flex items-center gap-2"
        passHref
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="relative w-6 h-6 md:w-8 md:h-8">
          <Image src="/instagram.png" alt="instagram" fill />
        </div>
      </Link>
    </div>
  );
};

export default SocialMedia;
