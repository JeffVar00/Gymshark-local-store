import React from "react";
import Link from "next/link";

const UserIcon = ({ user }) => {
  return (
    <Link
      href={!user ? "/login" : "/orders"}
      className="flex items-center gap-2"
    >
      <div className="relative w-6 h-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full"
        >
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
    </Link>
  );
};

export default UserIcon;
