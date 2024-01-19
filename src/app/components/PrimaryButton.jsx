import React from "react";

export default function PrimaryButton({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        "w-28 h-12 bg-[#29ABC8] rounded-full text-white font-semibold flex justify-center items-center gap-2" +
        className
      }
    >
      {children}
    </button>
  );
}
