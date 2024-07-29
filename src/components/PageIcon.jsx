import React from "react";
import Image from "next/image";
import Link from "next/link";

const PageIcon = ({ logo }) => {
  const logoSrc =
    logo === "white" ? "/pageiconwhite.png" : "/pageiconblack.png";

  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative w-12 h-12 lg:w-16 lg:h-16">
        <Image
          src={logoSrc}
          alt="Page icon"
          fill="responsive"
          className="w-full h-full object-contain"
        />
      </div>
    </Link>
  );
};

export default PageIcon;
