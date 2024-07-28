import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/* BOX */}
      <div className=" h-auto shadow-2xl rounded-lg flex flex-col lg:flex-row lg:h-[70%] lg:w-[90%] xl:w-[75%] 2xl:w-[60%]">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2 bg-black rounded-lg">
          <Image
            src="/gymsharkbanner.jpg"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>
        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-4 lg:w-1/2 bg-websecundary text-webprimary justify-center rounded-lg ">
          <h1 className="font-bold text-xl lg:text-3xl">Inicia sesión</h1>
          <button className="flex gap-4 p-4 ring-1 ring-red-500 rounded-md bg-white">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="text-webprimary">Ingresa con Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-500 rounded-md bg-white">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="text-webprimary">Ingresa con Facebook</span>
          </button>
          <p className="text-sm">
            Tienes problemas para iniciar sesión?{" "}
            <Link className="underline" href="/">
              Contactanos
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
