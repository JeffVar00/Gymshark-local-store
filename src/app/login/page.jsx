"use client";

// pages/auth.js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import SignUpForm from "@/components/SignUpForm";
import LoginForm from "@/components/LoginForm";
import Image from "next/image";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  // const router = useRouter();

  useEffect(() => {
    // Redirect if already logged in
    const userLoggedIn = false; // Replace with actual login check
    if (userLoggedIn) {
      // router.push("/profile");
    }
  }, []);

  return (
    <div className="h-screen flex lg:flex-row">
      <div
        className="bg-cover hidden lg:flex flex-1 bg-center "
        style={{ backgroundImage: "url(/banner.jpg)" }}
      >
        <div className="w-full flex items-center justify-start h-full bg-webprimary bg-opacity-50">
          <div className="text-white ml-8 xl:ml-12">
            <p className="text-xs mb-4">Your account. Your rules.</p>
            <h1 className="text-4xl xl:text-5xl font-bold">
              SAVE WHAT YOU SEE
            </h1>
            <p className="text-sm mt-4">
              Save your most-loved activewear pieces to build your perfect
              outfit
            </p>
          </div>
        </div>
      </div>

      <div className="w-full  flex flex-1 justify-center items-center">
        <div className="w-96 flex flex-col gap-6 justify-center ">
          <div className="flex flex-col gap-4 items-center justify-center ">
            <div className="hidden lg:flex relative w-16 h-16">
              <Image
                src="/pageiconblack.png"
                alt="Page icon"
                fill="responsive"
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-center text-xl font-bold uppercase">
              My Gymshark
            </h2>
            <div className="flex justify-center bg-websecundary rounded-full relative w-3/4 text-center items-center">
              <div
                className={`absolute z-10 bottom-0 mb-1 left-0 w-1/2 h-8 bg-white rounded-full shadow transition-transform duration-300 ${
                  isLogin
                    ? "transform translate-x-0 ml-1"
                    : "transform translate-x-full"
                }`}
              ></div>
              <div className="flex flex-row w-full">
                <button
                  className={`w-full py-3 text-xs font-bold relative focus:outline-none flex justify-center ${
                    isLogin ? "text-webprimary" : "text-gray-700"
                  }`}
                  onClick={() => setIsLogin(true)}
                >
                  <span className="z-20">LOG IN</span>
                </button>
                <button
                  className={`w-full  py-3 relative text-xs font-bold focus:outline-none flex justify-center ${
                    !isLogin ? "text-webprimary" : "text-gray-700"
                  }`}
                  onClick={() => setIsLogin(false)}
                >
                  <span className="z-20">SIGN UP</span>
                </button>
              </div>
            </div>
          </div>
          <div className={isLogin ? "hidden" : ""}>
            <LoginForm />
          </div>
          <div className={isLogin ? "" : "hidden"}>
            <SignUpForm />
          </div>
          <div className="flex items-center justify-between my-4">
            <hr className="w-full border-t border-gray-300" />
            <span className="mx-4">OR</span>
            <hr className="w-full border-t border-gray-300" />
          </div>
          <div className="flex flex-col justify-center font-semibold gap-3 text-websecundary">
            <button className="flex items-center px-2 py-2 gap-3 border rounded-md bg-google ">
              <div className="p-2 bg-white rounded-lg mr-1">
                <Image
                  src="/google.png"
                  alt="Google"
                  width={25}
                  height={25}
                  className="object-contain "
                />
              </div>
              Continue with Google
            </button>
            <button className="flex items-center px-2 py-2 gap-3 border rounded-md bg-facebook">
              <div className="p-2 bg-white rounded-lg mr-1">
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={25}
                  height={25}
                  className="object-contain "
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
