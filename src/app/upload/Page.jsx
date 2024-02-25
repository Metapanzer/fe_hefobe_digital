"use client";
import React, { useEffect } from "react";
import Modal from "../components/Modal";
import Card from "../components/Card";

export default function Page() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [user, setUser] = React.useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
    const hasQuota = user?.quota > 0;
    if (!hasQuota) {
      setIsOpen(true);
    }
  }, [user?.quota]);

  return (
    <div className="container flex h-screen flex-col items-center justify-center pt-6 gap-8">
      <Card size="large">
        <div>
          <span className="text-[#156779] font-semibold">PDF Name</span>
        </div>
        <span className="text-[#156779] font-semibold self-end">Submit</span>
      </Card>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <span className="font-bold text-[#156779] text-2xl">
          You Don&apos;t Have E-Meterai
        </span>
      </Modal>
    </div>
  );
}
