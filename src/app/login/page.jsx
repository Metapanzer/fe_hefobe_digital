"use client";
import React from "react";
import SecondaryButton from "../components/SecondaryButton";
import Emet from "../../../public/Images/e-meterai-white-bg.svg";
import Image from "next/image";

export default function page() {
  return (
    <div className="container h-full flex items-center justify-center mt-16">
      <div className="container flex items-center justify-center gap-5">
        <div className="w-80 flex flex-col gap-4 justify-center items-center">
          <span className="text-2xl text-[#29ABC8] font-semibold">SIGN IN</span>
          <input
            type="email"
            placeholder="Email address"
            className="w-full h-10 px-4 border-[3px] border-[#29ABC8] rounded-2xl"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-10 px-4 border-[3px] border-[#29ABC8] rounded-2xl"
          />
          <SecondaryButton>Submit</SecondaryButton>
        </div>
        <div>
          <Image src={Emet} alt="Emet" width={250} height={255} />
        </div>
      </div>
    </div>
  );
}
