import FormInput from "@/components/form_components/FormInput";
import { useState } from "react";

const CheckoutForm = ({ showPopup, shippingMethod }) => {
  //Personal Information
  const [personalInfo, setPersonalInfo] = useState({
    email: "",
    name: "",
    lastName: "",
    phoneNumber: "",
  });
  //Shipping Information
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    lastName: "",
    address: "",
    city: "",
    state: "Alajuela",
    zipCode: "",
    country: "Costa Rica",
  });

  const [paymentMethod, setPaymentMethod] = useState("SINPE");
  const [error, setError] = useState(null);

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      showPopup();
      // await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form
      className="h-screen w-full overflow-y-auto transition-opacity duration-300 flex flex-col pt-16 pb-64 lg:pb-32"
      onSubmit={handleCheckout}
    >
      <div className="mb-4 font-bold uppercase text-center">
        Personal Information
      </div>
      <FormInput
        label="Email Address"
        type="email"
        overlay="Enter your email"
        handleChange={(e) =>
          setPersonalInfo({ ...personalInfo, email: e.target.value })
        }
        required={true}
      />
      <FormInput
        label="Name"
        type="text"
        overlay="Enter your name"
        handleChange={(e) =>
          setPersonalInfo({ ...personalInfo, name: e.target.value })
        }
        required={true}
      />
      <FormInput
        label="Last Name"
        type="text"
        overlay="Enter your last name"
        handleChange={(e) =>
          setPersonalInfo({ ...personalInfo, lastName: e.target.value })
        }
        required={true}
      />
      <FormInput
        label="Phone Number"
        type="number"
        overlay="Enter your phone number"
        handleChange={(e) =>
          setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value })
        }
        required={true}
      />
      <div className="mb-4 font-bold uppercase text-center">
        Shipping Information
      </div>
      <FormInput
        label="Name"
        type="text"
        overlay="Enter your name"
        handleChange={(e) =>
          setShippingInfo({ ...shippingInfo, name: e.target.value })
        }
        required={true}
      />
      <FormInput
        label="Last Name"
        type="text"
        overlay="Enter your last name"
        handleChange={(e) =>
          setShippingInfo({ ...shippingInfo, lastName: e.target.value })
        }
        required={true}
      />

      <div className="mb-4">
        <label className="block text-webprimary font-bold text-sm lg:text-base ">
          Country
        </label>
        <select
          className="w-full p-2 border border-gray-200 rounded"
          value={shippingInfo.country}
          onChange={(e) =>
            setShippingInfo({ ...shippingInfo, country: e.target.value })
          }
        >
          <option value="Costa Rica">Costa Rica</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-webprimary font-bold text-sm lg:text-base ">
          State
        </label>
        <select
          className="w-full p-2 border border-gray-200 rounded"
          onChange={(e) =>
            setShippingInfo({ ...shippingInfo, state: e.target.value })
          }
          value={shippingInfo.state}
        >
          <option value="Alajuela">Alajuela</option>
          <option value="San Jose">San Jose</option>
          <option value="Cartago">Cartago</option>
          <option value="Heredia">Heredia</option>
          <option value="Guanacaste">Guanacaste</option>
          <option value="Puntarenas">Puntarenas</option>
          <option value="Limon">Limon</option>
        </select>
      </div>
      <FormInput
        label="City"
        type="text"
        overlay="Enter your city"
        handleChange={(e) =>
          setShippingInfo({ ...shippingInfo, city: e.target.value })
        }
        required={true}
      />
      <FormInput
        label="Address"
        type="text"
        overlay="Enter your address"
        handleChange={(e) =>
          setShippingInfo({ ...shippingInfo, address: e.target.value })
        }
        required={true}
      />
      <FormInput
        label="Zip Code"
        type="number"
        overlay="Enter your zip code"
        handleChange={(e) =>
          setShippingInfo({ ...shippingInfo, zipCode: e.target.value })
        }
        required={true}
      />
      <div className="mb-4 font-bold uppercase text-center">Payment Method</div>
      <select
        className="w-full p-2 border border-gray-200 rounded"
        value={paymentMethod}
        onChange={handlePaymentChange}
      >
        <option value="SINPE">SINPE</option>
        <option value="Bank">Bank Transfer</option>
        <option value="Paypal">Paypal</option>
      </select>

      <div
        className={`bg-white absolute bottom-0 left-0 w-full flex items-center justify-center`}
      >
        <button className="m-4 w-full font-bold rounded-xl flex items-center justify-center p-3 bg-webprimary text-websecundary">
          Finish Checkout
        </button>
      </div>

      {error && <p className="text-red-500 font-semibold mt-4">*{error}*</p>}
    </form>
  );
};

export default CheckoutForm;
