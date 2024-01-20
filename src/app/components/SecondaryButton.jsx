import React from "react";

export default function SecondaryButton({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        "w-28 h-10 bg-[#A8CB45] hover:bg-[#B5D051] active:bg-[#829E35] rounded-full text-white font-semibold" +
        className
      }
    >
      {children}
    </button>
  );
}
