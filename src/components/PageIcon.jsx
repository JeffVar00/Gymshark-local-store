import React from "react";
import Image from "next/image";
import Link from "next/link";

const PageIcon = ({ logo }) => {
  const logoSrc =
    logo === "white" ? "/pageiconwhite.png" : "/pageiconblack.png";

  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative w-16 h-16 lg:w-24 lg:h-24">
        <Image
          src={logoSrc}
          alt="Page icon"
          fill
          objectFit="contain"
          className="w-full h-full"
        />
      </div>
    </Link>
  );
};

export default PageIcon;
