import FormInput from "@/components/FormInput";
import { useState } from "react";

const SingUpForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="transition-opacity duration-300" onSubmit={handleSignUp}>
      <FormInput
        label="Full Name"
        type="text"
        overlay="Enter your full name"
        handleChange={(e) => setName(e.target.value)}
        required={true}
      />
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
        <button
          type="submit"
          className="w-full py-2 bg-webprimary text-websecundary rounded-full font-bold"
        >
          SIGN UP
        </button>
        {error && <p className="text-red-500 font-semibold mt-4">*{error}*</p>}
      </div>
    </form>
  );
};

export default SingUpForm;
