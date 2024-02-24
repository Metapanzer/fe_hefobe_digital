"use client";
import React from "react";
import Modal from "../components/Modal";

export default function Page() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      upload
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <span className="font-bold text-[#156779] text-2xl">
          You Don&apos;t Have E-Meterai
        </span>
      </Modal>
    </div>
  );
}
