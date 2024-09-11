"use client";

import { useState } from "react";
import Image from "next/image";
import { useWixClient } from "@/hooks/useWixClient";
import { LoginState } from "@wix/sdk";
import { useRouter } from "next/navigation";
import FormInput from "@/components/form_components/FormInput";
import Cookies from "js-cookie";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [emailCode, setEmailCode] = useState("");
  const [message, setMessage] = useState("");

  const handlePassword = (password) => {
    let error = "";

    if (password.length < 8) {
      error = "La contraseña debe tener al menos 8 caracteres";
    }
    if (!/[A-Z]/.test(password)) {
      error = "La contraseña debe incluir al menos una letra mayúscula";
    }
    if (!/[a-z]/.test(password)) {
      error = "La contraseña debe incluir al menos una letra minúscula";
    }
    if (!/\d/.test(password)) {
      error = "La contraseña debe incluir al menos un número";
    }
    if (error) {
      setError(error);
    } else {
      setPassword(password);
      setError("");
    }
  };

  const buttonTitle =
    mode === MODE.SIGNIN
      ? "Login"
      : mode === MODE.SIGNUP
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
    setError("");
    setMessage("");
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
        case MODE.SIGNUP:
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
          setMessage(
            "Email para restablecer contraseña enviado. Revisa tu correo electrónico."
          );
          break;
        case MODE.EMAIL_VERIFICATION:
          response = await wixClient.auth.processVerification({
            verificationCode: emailCode,
          });
          break;
        default:
          break;
      }

      if (response?.loginState === LoginState.SUCCESS) {
        setMessage("Exito, redirigiendo...");
        const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
          response.data.sessionToken
        );
        Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
          expires: 2,
        });
        wixClient.auth.setTokens(tokens);
        router.push("/");
      } else if (response?.loginState === LoginState.FAILURE) {
        if (
          response.errorCode === "invalidEmail" ||
          response.errorCode === "invalidPassword"
        ) {
          setError("La contraseña o el correo electrónico son incorrectos");
        } else if (response.errorCode === "emailAlreadyExists") {
          setError("El correo electrónico ya está registrado");
        } else if (response.errorCode === "resetPassword") {
          setError("Necesitas restablecer tu contraseña");
        } else {
          setError("Algo salió mal");
        }
      } else if (
        response?.loginState === LoginState.EMAIL_VERIFICATION_REQUIRED
      ) {
        setMode(MODE.EMAIL_VERIFICATION);
        setMessage(
          "Tu cuenta necesita ser verificada. Por favor, revisa tu correo electrónico."
        );
      } else if (response?.loginState === LoginState.OWNER_APPROVAL_REQUIRED) {
        setMessage("Tu cuenta necesita ser aprobada por el administrador.");
      } else {
      }
    } catch (err) {
      setError("Algo salió mal");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen h-full flex flex-col lg:flex-row">
      <div
        className="bg-cover hidden lg:flex flex-1 bg-center"
        style={{ backgroundImage: "url(/banner.avif)" }}
      >
        <div className="w-full flex items-center justify-start h-full bg-black bg-opacity-50 p-4">
          <div className="text-white ml-8 xl:ml-12">
            <p className="text-xs mb-4">Tu cuenta. Tus reglas.</p>
            <h1 className="text-3xl xl:text-4xl font-bold">
              Agiliza tus compras
            </h1>
            <p className="text-sm mt-4">
              Crea una cuenta para acceder a tu información, historial de
              compras y más.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-1 justify-center items-center p-4">
        <div className="w-full max-w-md flex flex-col gap-4 justify-center mx-6">
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="hidden xl:flex relative w-16 h-16">
              <Image
                src="/icons/iso_beige.avif"
                alt="Icono de la tienda"
                fill="responsive"
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-center text-lg font-bold uppercase text-webprimary">
              Cuenta M&M
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
                      isLogin ? "text-webprimary" : "text-black"
                    }`}
                    onClick={() => handleChangeLogin("signIn")}
                  >
                    <span className="z-20">Iniciar Sesión</span>
                  </button>
                  <button
                    className={`w-full py-3 relative text-xs font-bold no-tap-highlight flex justify-center ${
                      !isLogin ? "text-webprimary" : "text-black"
                    }`}
                    onClick={() => handleChangeLogin("signOut")}
                  >
                    <span className="z-20">Registrarse</span>
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
                    label="Nombre de Usuario"
                    type="text"
                    name="username"
                    overlay="Ingresa tu nombre de usuario"
                    handleChange={(e) => setUsername(e.target.value)}
                    required={true}
                  />
                  <FormInput
                    label="Dirección de Correo Electrónico"
                    type="email"
                    name="email"
                    overlay="Ingresa tu correo electrónico"
                    handleChange={(e) => setEmail(e.target.value)}
                    required={true}
                  />
                  <FormInput
                    label="Contraseña"
                    type="password"
                    overlay="Ingresa tu contraseña"
                    handleChange={(e) => handlePassword(e.target.value)}
                    required={true}
                  />

                  <div className="flex flex-col items-center mt-8">
                    <button
                      type="submit"
                      className="w-full py-2 text-sm md:text-base bg-webprimary text-websecundary rounded-full font-bold"
                    >
                      {isLoading ? "Cargando..." : buttonTitle}
                    </button>
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
                    label="Dirección de Correo Electrónico"
                    type="email"
                    name="email"
                    overlay="Ingresa tu correo electrónico"
                    handleChange={(e) => setEmail(e.target.value)}
                    required={true}
                  />
                  <FormInput
                    label="Contraseña"
                    type="password"
                    overlay="Ingresa tu contraseña"
                    handleChange={(e) => setPassword(e.target.value)}
                    required={true}
                  />

                  <div className="flex flex-col items-center mt-8">
                    <div className="text-right mb-4">
                      <a
                        onClick={() => setMode(MODE.RESET_PASSWORD)}
                        className="text-sm text-webprimary underline font-bold cursor-pointer"
                      >
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full text-sm md:text-base py-2 bg-webprimary text-websecundary rounded-full font-bold"
                    >
                      {isLoading ? "Cargando..." : buttonTitle}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : null}
          {mode === MODE.RESET_PASSWORD ? (
            <div className="relative flex-col flex items-center justify-center">
              <div className="flex w-3/4 bg-websecundary py-1 rounded-full items-center text-center justify-center mb-4">
                <h1 className="text-sm font-bold w-[96%] px-1 py-1 bg-white rounded-full text-webprimary">
                  Restablecer Contraseña
                </h1>
              </div>
              <form onSubmit={handleSubmit} className="w-full">
                <FormInput
                  label="Dirección de Correo Electrónico"
                  type="email"
                  name="email"
                  overlay="Ingresa tu correo electrónico"
                  handleChange={(e) => setEmail(e.target.value)}
                  required={true}
                />
                <div className="flex flex-col items-center mt-8">
                  <div
                    className="text-sm underline font-bold cursor-pointer mb-4 text-webprimary"
                    onClick={() => setMode(MODE.SIGNIN)}
                  >
                    {"<-"} Regresar
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 text-sm md:text-base bg-webprimary text-websecundary rounded-full font-bold"
                  >
                    {isLoading ? "Cargando..." : buttonTitle}
                  </button>
                </div>
              </form>
            </div>
          ) : null}
          {mode === MODE.EMAIL_VERIFICATION ? (
            <div className="relative flex-col flex items-center justify-center">
              <div className="flex w-3/4 bg-websecundary py-1 rounded-full items-center text-center justify-center mb-4">
                <h1 className="text-sm font-bold w-[96%] px-1 py-1 bg-white rounded-full text-webprimary">
                  Verificación de Correo Electrónico
                </h1>
              </div>
              <form onSubmit={handleSubmit} className="w-full">
                <FormInput
                  label="Código de Verificación"
                  type="text"
                  name="emailCode"
                  overlay="Ingresa el código de verificación"
                  handleChange={(e) => setEmailCode(e.target.value)}
                  required={true}
                />
                <div className="flex flex-col items-center mt-8">
                  <button
                    type="submit"
                    className="w-full py-2 text-sm md:text-base bg-webprimary text-websecundary rounded-full font-bold"
                  >
                    {isLoading ? "Cargando..." : buttonTitle}
                  </button>
                </div>
              </form>
            </div>
          ) : null}
          {error && (
            <p className="text-red-500 font-semibold mt-2 text-center">
              *{error}*
            </p>
          )}
          {message && (
            <div className="text-green-800 text-sm font-semibold text-center mt-4">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
