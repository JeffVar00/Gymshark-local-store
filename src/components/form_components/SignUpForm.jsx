import FormInput from "@/components/form_components/FormInput";

const SingUpForm = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  error,
  handleSignUp,
}) => {
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
          className="w-full py-2 text-sm md:text-base bg-webprimary text-websecundary rounded-full font-bold"
        >
          SIGN UP
        </button>
        {error && <p className="text-red-500 font-semibold mt-4">*{error}*</p>}
      </div>
    </form>
  );
};

export default SingUpForm;
