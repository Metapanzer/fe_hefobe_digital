import React from "react";
import PrimaryButton from "./PrimaryButton";
import { useRouter } from "next/navigation";

export default function Modal({ isOpen, onClose, children }) {
  const router = useRouter();
  if (!isOpen) {
    return null;
  }
  return (
    <div
      onClick={onClose}
      className="fixed left-0 top-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center z-50"
    >
      <div className="w-1/3 h-52 px-12 pt-8 pb-4 shadow-md shadow-[#29ABC8] bg-white rounded-3xl flex flex-col justify-between items-center z-10">
        <div className="flex justify-center items-center h-4/5">{children}</div>
        <div className="flex items-center justify-end gap-4 w-full">
          <PrimaryButton onClick={router.push("/payment")}>
            Buy Quota
          </PrimaryButton>
          <PrimaryButton onClick={onClose}>OK</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
