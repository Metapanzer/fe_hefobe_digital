import React from "react";

export default function PrimaryButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        "w-24 h-8 bg-[#29ABC8] hover:bg-[#239EBA] active:bg-[#1F8FA8] rounded-full text-white font-semibold flex justify-center items-center gap-2"
      }
    >
      {children}
    </button>
  );
}
