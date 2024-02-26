"use client";
import React from "react";
import SecondaryButton from "../components/SecondaryButton";
import EmeteraiLogo from "../../../public/images/e-meterai-white-bg.svg";
import Image from "next/image";

export default function Page() {
  const [data, setData] = React.useState({
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    // TODO : send data to API
  }
  return (
    <div className="container h-screen pt-20 flex items-center justify-center bg-mountain bg-no-repeat bg-contain bg-top">
      <div className="container flex items-center justify-center gap-5">
        <div className="-mt-8">
          <Image
            src={EmeteraiLogo}
            alt="EmeteraiLogo"
            width={180}
            height={195}
          />
        </div>
        <div className="w-80 flex flex-col gap-4 justify-center items-center">
          <span className="text-2xl text-[#29ABC8] font-semibold">SIGN UP</span>
          <input
            type="email"
            placeholder="Email address"
            name="email"
            className="w-full h-8 px-4 border-[3px] border-[#29ABC8] rounded-2xl"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Full name"
            name="fullName"
            className="w-full h-8 px-4 border-[3px] border-[#29ABC8] rounded-2xl"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full h-8 px-4 border-[3px] border-[#29ABC8] rounded-2xl"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            className="w-full h-8 px-4 border-[3px] border-[#29ABC8] rounded-2xl mb-8"
            onChange={(e) => handleChange(e)}
          />
          <SecondaryButton onClick={handleSubmit}>Submit</SecondaryButton>
        </div>
      </div>
    </div>
  );
}
