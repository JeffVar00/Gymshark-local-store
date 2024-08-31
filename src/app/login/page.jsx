"use client";

// pages/auth.js
import React, { useState } from "react";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import SignUpForm from "@/components/form_components/SignUpForm";
import LoginForm from "@/components/form_components/LoginForm";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const { status } = useSession();

  if (status === "loading") {
    <p>Loading...</p>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="min-h-screen h-full flex flex-col lg:flex-row">
      <div
        className="bg-cover hidden lg:flex flex-1 bg-center"
        style={{ backgroundImage: "url(/banner.jpg)" }}
      >
        <div className="w-full flex items-center justify-start h-full bg-webprimary bg-opacity-50 p-4">
          <div className="text-white ml-8 xl:ml-12">
            <p className="text-xs mb-4">Your account. Your rules.</p>
            <h1 className="text-3xl xl:text-4xl font-bold">
              SAVE WHAT YOU SEE
            </h1>
            <p className="text-sm mt-4">
              Save your most-loved activewear pieces to build your perfect
              outfit
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-1 justify-center items-center p-4">
        <div className="w-full max-w-md flex flex-col gap-4 justify-center mx-6">
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="hidden xl:flex relative w-16 h-16">
              <Image
                src="/pageiconblack.png"
                alt="Page icon"
                fill="responsive"
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-center text-lg font-bold uppercase">
              My Gymshark
            </h2>
            <div className="flex justify-center bg-websecundary rounded-full relative w-3/4 text-center items-center">
              <div
                className={`absolute z-10 bottom-0 mb-1 left-0 w-1/2 h-8 bg-white rounded-full shadow transition-transform duration-300 ${
                  isLogin
                    ? "transform translate-x-0 ml-1"
                    : "transform translate-x-97"
                }`}
              ></div>
              <div className="flex flex-row w-full">
                <button
                  className={`w-full py-3 text-xs font-bold relative no-tap-highlight flex justify-center ${
                    isLogin ? "text-webprimary" : "text-gray-700"
                  }`}
                  onClick={() => setIsLogin(true)}
                >
                  <span className="z-20">LOG IN</span>
                </button>
                <button
                  className={`w-full py-3 relative text-xs font-bold no-tap-highlight flex justify-center ${
                    !isLogin ? "text-webprimary" : "text-gray-700"
                  }`}
                  onClick={() => setIsLogin(false)}
                >
                  <span className="z-20">SIGN UP</span>
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className={`transition-opacity transition-max-height duration-1000 ease-in-out overflow-hidden ${
                isLogin ? "opacity-0 max-h-0" : "opacity-100 max-h-screen"
              }`}
            >
              <SignUpForm />
            </div>
            <div
              className={`transition-opacity transition-max-height duration-1000 ease-in-out overflow-hidden ${
                isLogin ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
              }`}
            >
              <LoginForm />
            </div>
          </div>
          <div className="flex items-center justify-between my-2">
            <hr className="w-full border-t border-gray-300" />
            <span className="mx-2 text-sm">OR</span>
            <hr className="w-full border-t border-gray-300" />
          </div>
          <div className="flex flex-col justify-center font-semibold gap-2 text-webprimary">
            <button
              className="flex text-sm items-center px-2 py-2 gap-2 border-2  rounded-md bg-white border-webprimary"
              onClick={() => signIn("google")}
            >
              <div className="p-1">
                <Image
                  src="/google.png"
                  alt="Google"
                  width={23}
                  height={23}
                  className="object-contain"
                />
              </div>
              Continue with Google
            </button>
            <button
              className="flex text-sm items-center px-2 py-2 gap-2 border-2 rounded-md bg-white border-webprimary"
              onClick={() => signIn("facebook")}
            >
              <div className="p-1">
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={23}
                  height={23}
                  className="object-contain"
                />
              </div>
              Continue with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
