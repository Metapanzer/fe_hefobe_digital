import React from "react";

export default function Card({ children, size, className }) {
  if (size === "small") {
    return (
      <div
        className={
          "w-3/5 h-24 px-12 shadow-md shadow-[#29ABC8] flex justify-between items-center rounded-full" +
          className
        }
      >
        {children}
      </div>
    );
  }
  if (size === "medium") {
    return (
      <div
        className={
          "w-3/5 h-52 px-12 pt-8 pb-4 shadow-md shadow-[#29ABC8] rounded-3xl flex flex-col justify-between" +
          className
        }
      >
        {children}
      </div>
    );
  }
  if (size === "large") {
    return (
      <div
        className={
          "w-3/5 h-[80vh] px-12 pt-8 pb-4 shadow-md shadow-[#29ABC8] rounded-3xl flex flex-col justify-between" +
          className
        }
      >
        {children}
      </div>
    );
  }
}
