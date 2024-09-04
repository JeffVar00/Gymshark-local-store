"use client";

import { useFormStatus } from "react-dom";

const UpdateButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-webprimary text-websecundary p-2 rounded-md cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed max-w-96"
    >
      {pending ? "Updating..." : "Update"}
    </button>
  );
};

export default UpdateButton;
