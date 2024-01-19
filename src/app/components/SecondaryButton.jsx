import React from "react";

export default function SecondaryButton({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        "w-28 h-12 bg-[#A8CB45] rounded-full text-white font-semibold" +
        className
      }
    >
      {children}
    </button>
  );
}
