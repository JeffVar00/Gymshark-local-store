import FormInput from "@/components/form_components/FormInput";

const SignInForm = ({
  email,
  setEmail,
  password,
  setPassword,
  error,
  handleLogin,
}) => {
  return (
    <form className="transition-opacity duration-300" onSubmit={handleLogin}>
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
          <a href="#" className="text-sm text-webprimary underline font-bold">
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-sm md:text-base py-2 bg-webprimary text-websecundary rounded-full font-bold"
        >
          LOG IN
        </button>
        {error && <p className="text-red-500 font-semibold mt-4">*{error}*</p>}
      </div>
    </form>
  );
};

export default SignInForm;
