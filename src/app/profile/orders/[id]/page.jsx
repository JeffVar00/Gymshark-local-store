import { wixClientServer } from "@/lib/wixClientServer";
import Link from "next/link";
import { notFound } from "next/navigation";

const OrderPage = async ({ params }) => {
  const id = params.id;

  const wixClient = await wixClientServer();

  let order;
  try {
    order = await wixClient.orders.getOrder(id);
  } catch (err) {
    return notFound();
  }

  // const order = {
  //   _id: "123",
  //   billingInfo: {
  //     contactDetails: {
  //       firstName: "John",
  //       lastName: "Doe",
  //     },
  //     address: {
  //       addressLine1: "123 Main St",
  //       city: "New York",
  //     },
  //   },
  //   buyerInfo: {
  //     email: "",
  //   },
  // };

  return (
    <div className="flex flex-col h-screen items-center justify-center ">
      <div className="md:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] md:mt-20 lg:mt-10 px-10 md:px-40 py-20">
        <h1 className="text-xl font-bold">Order Details</h1>
        <div className="mt-12 flex flex-col gap-6">
          <div className="">
            <span className="font-medium">Order Id: </span>
            <span>{order._id}</span>
          </div>
          <div className="">
            <span className="font-medium">Receiver Name: </span>
            <span>
              {order.billingInfo?.contactDetails?.firstName + " "}
              {order.billingInfo?.contactDetails?.lastName}
            </span>
          </div>
          <div className="">
            <span className="font-medium">Receiver Email: </span>
            <span>{order.buyerInfo?.email}</span>
          </div>
          <div className="">
            <span className="font-medium">Price: </span>
            <span>{order.priceSummary?.subtotal?.amount}</span>
          </div>
          <div className="">
            <span className="font-medium">Payment Status: </span>
            <span>{order.paymentStatus}</span>
          </div>
          <div className="">
            <span className="font-medium">Order Status: </span>
            <span>{order.status}</span>
          </div>
          <div className="">
            <span className="font-medium">Delivery Address: </span>
            <span>
              {order.billingInfo?.address?.addressLine1 + " "}
              {order.billingInfo?.address?.city}
            </span>
          </div>
        </div>
      </div>
      <Link href="/profile/orders" className="mt-6 flex font-bold">
        {"<-"} Go back to your orders
      </Link>
      <Link href="/pages/contact-us" className="underline mt-6">
        Have a problem? Contact us
      </Link>
    </div>
  );
};

export default OrderPage;
