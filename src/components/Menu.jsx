"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { id: 1, name: "Inicio", path: "/" },
  { id: 2, name: "Productos", path: "/collections/all-products" },
  { id: 3, name: "Horario", path: "/" },
  { id: 4, name: "Contacto", path: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;

  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt="Product display"
          width={40}
          height={40}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt="Product display"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div className="absolute left-0 top-28 h-[calc(100vh-6rem)] flex flex-col gap-8 w-full items-center justify-center text-3xl z-10 text-webprimary bg-websecundary ">
          {links.map((link) => (
            <div key={link.id}>
              <Link
                href={link.path}
                className="hover:border-b-4 border-webprimary transition-all duration-100"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </div>
          ))}

          {!user ? (
            <Link
              className=" hover:border-b-4 border-webprimary transition-all duration-100"
              href="/login"
              onClick={() => setOpen(false)}
            >
              Iniciar Sesión
            </Link>
          ) : (
            <div>
              <Link
                className=" hover:border-b-4 border-webprimary transition-all duration-100"
                href="/orders"
                onClick={() => setOpen(false)}
              >
                Ordenes
              </Link>
              <Link
                className=" hover:border-b-4 border-webprimary transition-all duration-100"
                href="logout"
                onClick={() => setOpen(false)}
              >
                Logout
              </Link>
            </div>
          )}

          <Link
            className=" hover:border-b-4 border-webprimary transition-all duration-100"
            href="/cart"
            onClick={() => setOpen(false)}
          >
            Carrito
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
