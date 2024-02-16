import React from "react";

export default function Card({ children, size }) {
  if (size === "small") {
    return (
      <div className="w-3/5 h-24 px-12 shadow-md shadow-[#29ABC8] bg-white flex justify-between items-center rounded-full">
        {children}
      </div>
    );
  }
  if (size === "medium") {
    return (
      <div className="w-3/5 h-52 px-12 pt-8 pb-4 shadow-md shadow-[#29ABC8] bg-white rounded-3xl flex flex-col justify-between">
        {children}
      </div>
    );
  }
  if (size === "large") {
    return (
      <div className="w-3/5 h-[80vh] px-12 pt-8 pb-4 shadow-md shadow-[#29ABC8] bg-white rounded-3xl flex flex-col justify-between">
        {children}
      </div>
    );
  }
}
