"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import Spinner from "@/components/icon_components/Spinner";
import Confetti from "react-confetti";

const SuccessContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const orderId = searchParams.get("orderId");

  useEffect(() => {
    if (!orderId) return;

    const timer = setTimeout(() => {
      router.push("/perfil/pedidos/" + orderId);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [orderId, router]);

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-[calc(100vh-180px)]">
      <Confetti width={2000} height={1000} />
      <h1 className="text-6xl text-green-700">Pago Exitoso!</h1>
      <h2 className="text-xl font-medium">
        Tu orden ha sido procesada exito, se ha enviado un correo con los
        detalles de tu orden.
      </h2>
      <h3 className="">
        Serás redirigido a la página de tu orden en 5 segundos...
      </h3>
    </div>
  );
};

const SuccessPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <SuccessContent />
    </Suspense>
  );
};

export default SuccessPage;
