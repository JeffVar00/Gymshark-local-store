const FormInput = ({ handleChange, label, type, overlay, required }) => {
  return (
    <div className="mb-2">
      <label className="block text-webprimary font-bold text-sm lg:text-base ">
        {label}
      </label>
      <input
        label={label}
        type={type}
        className="w-full px-4 py-2 border border-double text-sm rounded"
        placeholder={overlay}
        onChange={handleChange}
        required={required}
      />
    </div>
  );
};
export default FormInput;
