"use client";

// pages/auth.js
import React, { useState } from "react";
import Image from "next/image";
import { useWixClient } from "@/hooks/useWixClient";
import { useRouter } from "next/navigation";
import FormInput from "@/components/form_components/FormInput";

const MODE = {
  SIGNIN: "SIGNIN",
  SIGNUP: "SIGNUP",
  RESET_PASSWORD: "RESET_PASSWORD",
  EMAIL_VERIFICATION: "EMAIL_VERIFICATION",
};

const AuthPage = ({ searchParams }) => {
  const wixClient = useWixClient();
  const router = useRouter();

  const mode_param = searchParams.mode?.toUpperCase();
  const isLoggedIn = wixClient.auth.loggedIn();

  if (isLoggedIn) {
    router.push("/");
  }

  const [isLogin, setIsLogin] = useState(
    MODE[mode_param] ? (MODE[mode_param] === "SIGNIN" ? true : false) : true
  );
  const [mode, setMode] = useState(MODE[mode_param] || MODE.SIGNIN);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [emailCode, setEmailCode] = useState("");
  const [message, setMessage] = useState("");

  const buttonTitle =
    mode === MODE.SIGNIN
      ? "Login"
      : mode === MODE.REGISTER
      ? "Register"
      : mode === MODE.RESET_PASSWORD
      ? "Reset"
      : "Verify";

  const handleChangeLogin = (e) => {
    if (e === "signIn") {
      setMode(MODE.SIGNIN);
    } else {
      setMode(MODE.SIGNUP);
    }
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      let response;

      switch (mode) {
        case MODE.SIGNIN:
          response = await wixClient.auth.login({
            email,
            password,
          });
          break;
        case MODE.REGISTER:
          response = await wixClient.auth.register({
            email,
            password,
            profile: { nickname: username },
          });
          break;
        case MODE.RESET_PASSWORD:
          response = await wixClient.auth.sendPasswordResetEmail(
            email,
            window.location.href
          );
          setMessage("Password reset email sent. Please check your e-mail.");
          break;
        case MODE.EMAIL_VERIFICATION:
          response = await wixClient.auth.processVerification({
            verificationCode: emailCode,
          });
          break;
        default:
          break;
      }

      switch (response?.loginState) {
        case LoginState.SUCCESS:
          setMessage("Successful! You are being redirected.");
          const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
            response.data.sessionToken
          );

          Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
            expires: 2,
          });
          wixClient.auth.setTokens(tokens);
          router.push("/");
          break;
        case LoginState.FAILURE:
          if (
            response.errorCode === "invalidEmail" ||
            response.errorCode === "invalidPassword"
          ) {
            setError("Invalid email or password!");
          } else if (response.errorCode === "emailAlreadyExists") {
            setError("Email already exists!");
          } else if (response.errorCode === "resetPassword") {
            setError("You need to reset your password!");
          } else {
            setError("Something went wrong!");
          }
        case LoginState.EMAIL_VERIFICATION_REQUIRED:
          setMode(MODE.EMAIL_VERIFICATION);
        case LoginState.OWNER_APPROVAL_REQUIRED:
          setMessage("Your account is pending approval");
        default:
          break;
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

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
            {mode === MODE.SIGNIN || mode === MODE.SIGNUP ? (
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
                    onClick={() => handleChangeLogin("signIn")}
                  >
                    <span className="z-20">LOG IN</span>
                  </button>
                  <button
                    className={`w-full py-3 relative text-xs font-bold no-tap-highlight flex justify-center ${
                      !isLogin ? "text-webprimary" : "text-gray-700"
                    }`}
                    onClick={() => handleChangeLogin("signOut")}
                  >
                    <span className="z-20">SIGN UP</span>
                  </button>
                </div>
              </div>
            ) : null}
          </div>
          {mode === MODE.SIGNIN || mode === MODE.SIGNUP ? (
            <div className="relative">
              <div
                className={`transition-opacity transition-max-height duration-1000 ease-in-out overflow-hidden ${
                  isLogin ? "opacity-0 max-h-0" : "opacity-100 max-h-screen"
                }`}
              >
                <form
                  className="transition-opacity duration-300"
                  onSubmit={handleSubmit}
                >
                  <FormInput
                    label="Username"
                    type="text"
                    name="username"
                    overlay="Enter your username"
                    handleChange={(e) => setUsername(e.target.value)}
                  />
                  <FormInput
                    label="Email Address"
                    type="email"
                    name="email"
                    overlay="Enter your email"
                    handleChange={(e) => setEmail(e.target.value)}
                  />
                  <FormInput
                    label="Password"
                    type="password"
                    overlay="Enter your password"
                    handleChange={(e) => setPassword(e.target.value)}
                    required={true}
                  />

                  <div className="flex flex-col items-center mt-8">
                    <button
                      type="submit"
                      className="w-full py-2 text-sm md:text-base bg-webprimary text-websecundary rounded-full font-bold"
                    >
                      {isLoading ? "Loading..." : buttonTitle}
                    </button>
                    {error && (
                      <p className="text-red-500 font-semibold mt-4">
                        *{error}*
                      </p>
                    )}
                  </div>
                </form>
              </div>
              <div
                className={`transition-opacity transition-max-height duration-1000 ease-in-out overflow-hidden ${
                  isLogin ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
                }`}
              >
                <form
                  className="transition-opacity duration-300"
                  onSubmit={handleSubmit}
                >
                  <FormInput
                    label="Email Address"
                    type="email"
                    overlay="Enter your email"
                    handleChange={(e) => setEmail(e.target.value)}
                    required={true}
                  />
                  <FormInput
                    label="Password"
                    type="password"
                    overlay="Enter your password"
                    handleChange={(e) => setPassword(e.target.value)}
                    required={true}
                  />

                  <div className="flex flex-col items-center mt-8">
                    <div className="text-right mb-4">
                      <a
                        onClick={() => setMode(MODE.RESET_PASSWORD)}
                        className="text-sm text-webprimary underline font-bold"
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full text-sm md:text-base py-2 bg-webprimary text-websecundary rounded-full font-bold"
                    >
                      {isLoading ? "Loading..." : buttonTitle}
                    </button>
                    {error && (
                      <p className="text-red-500 font-semibold mt-4">
                        *{error}*
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          ) : null}
          {mode === MODE.RESET_PASSWORD ? (
            <div className="relative">
              <form onSubmit={handleSubmit}>
                <h1 className="text-xl font-semibold mb-4">
                  Reset Your Password
                </h1>
                <FormInput
                  label="Email Address"
                  type="email"
                  overlay="Enter your email"
                  handleChange={(e) => setEmail(e.target.value)}
                />
                <div className="flex flex-col items-center mt-8">
                  <div
                    className="text-sm underline font-bold cursor-pointer mb-4"
                    onClick={() => setMode(MODE.SIGNIN)}
                  >
                    Go back to Login
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 text-sm md:text-base bg-webprimary text-websecundary rounded-full font-bold"
                  >
                    {isLoading ? "Loading..." : buttonTitle}
                  </button>

                  {error && (
                    <p className="text-red-500 font-semibold mt-4">*{error}*</p>
                  )}
                </div>
              </form>
            </div>
          ) : null}
          {mode === MODE.EMAIL_VERIFICATION ? (
            <div className="relative">
              <form onSubmit={handleSubmit}>
                <h1 className="text-xl font-semibold mb-4">
                  Email Verification
                </h1>
                <FormInput
                  label="Email Code"
                  type="text"
                  name="emailCode"
                  overlay="Enter your code"
                  handleChange={(e) => setEmailCode(e.target.value)}
                />
                <div className="flex flex-col items-center mt-8">
                  <button
                    type="submit"
                    className="w-full py-2 text-sm md:text-base bg-webprimary text-websecundary rounded-full font-bold"
                  >
                    {isLoading ? "Loading..." : buttonTitle}
                  </button>
                  {error && (
                    <p className="text-red-500 font-semibold mt-4">*{error}*</p>
                  )}
                </div>
              </form>
            </div>
          ) : null}
          {message && <div className="text-green-600 text-sm">{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
