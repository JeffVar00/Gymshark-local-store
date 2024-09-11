import { wixClientServer } from "@/lib/wixClientServer";
import { members } from "@wix/members";
import Link from "next/link";
import { format } from "timeago.js";

const OrdersPage = async () => {
  const wixClient = await wixClientServer();
  let user;
  try {
    user = await wixClient.members.getCurrentMember({
      fieldsets: [members.Set.FULL],
    });
  } catch (error) {
    return (
      <div className="relative h-screen flex flex-col items-center justify-center mt-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/banner2.avif')",
            filter: "blur(1px)",
            zIndex: -10,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Optional overlay for better text readability */}
        <div className="relative flex flex-col items-center h-full justify-center gap-3 mb-20">
          <h2 className="font-bold text-2xl uppercase text-websecundary mb-12">
            No has iniciado sesión
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-bold uppercase text-websecundary">
                ¿Ya tienes una cuenta?
              </h2>
              <Link href="/iniciar-sesion">
                <button className="text-sm mt-2 w-60 font-bold rounded-full flex items-center justify-center p-3 bg-websecundary text-webprimary uppercase">
                  Iniciar Sesión
                </button>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-bold uppercase text-websecundary">
                ¿No tienes una cuenta?
              </h2>
              <Link href="/iniciar-sesion?mode=signUp">
                <button className="text-sm mt-2 w-60 font-bold rounded-full flex items-center justify-center p-3 bg-websecundary text-webprimary uppercase">
                  Registrate
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const orderRes = await wixClient.orders.searchOrders({
    search: {
      filter: { "buyerInfo.contactId": { $eq: user.member?.contactId } },
    },
  });

  return (
    <div className="flex flex-col gap-12 pt-28 md:pt-44 h-screen items-center px-2 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="w-full">
        <div className="flex justify-start">
          <Link
            href="/perfil"
            className="text-webprimary font-bold hover:underline"
          >
            {"<-"} Tu perfil
          </Link>
        </div>
        <h1 className="text-xl md:text-2xl font-bold">Tus Pedidos</h1>

        {/* Header Section */}
        {orderRes.orders.length > 0 && (
          <div className="mt-6 flex justify-between px-2 py-3 font-bold border-b text-sm md:text-base">
            <span className="w-1/4">Order ID</span>
            <span className="w-1/4">Subtotal</span>
            <span className="w-1/4">Fecha</span>
            <span className="w-1/4">Estado</span>
          </div>
        )}

        {/* Orders List */}
        <div className="mt-4 flex flex-col overflow-y-auto h-[60%] md:h-96 my-12">
          {orderRes.orders.length > 0 ? (
            orderRes.orders.map((order) => (
              <Link
                href={`/perfil/pedidos/${order._id}`}
                key={order._id}
                className="flex justify-between px-2 py-4 rounded-md hover:bg-gray-100 even:bg-slate-100 text-sm md:text-base"
              >
                <span className="w-1/4">
                  {order._id?.substring(0, 4)}
                  <span className="hidden sm:inline">
                    {order._id?.substring(4, 10)}
                  </span>
                  ...
                </span>
                <span className="w-1/4">
                  ${order.priceSummary?.subtotal?.amount}
                </span>
                {order._createdDate && (
                  <span className="w-1/4">{format(order._createdDate)}</span>
                )}
                <span className="w-1/4">{order.status}</span>
              </Link>
            ))
          ) : (
            <div className="flex flex-col items-center h-screen justify-center gap-3">
              <h2 className="font-bold uppercase text-center">
                No haz realizado compras aún.
              </h2>
              <p className="text-gray-700 text-sm text-center">
                Descubre nuestras colecciones y encuentra lo que necesitas.
              </p>
              <Link href="/colecciones?cat=all-products">
                <button className="text-sm w-60 font-bold rounded-full flex items-center justify-center p-3 bg-webprimary text-white uppercase">
                  Nuestros Productos
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
