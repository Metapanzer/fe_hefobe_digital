"use client";
import React from "react";
import SecondaryButton from "../components/SecondaryButton";
import EmeteraiLogo from "../../../public/Images/e-meterai-white-bg.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [data, setData] = React.useState({ email: "", password: "" });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    // TODO : send data to API
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("token", "token123");
    router.push("/");
  }

  return (
    <div className="container  h-screen pt-12 flex items-center justify-center">
      <div className="container flex items-center justify-center gap-5">
        <div className="w-80 flex flex-col gap-4 justify-center items-center">
          <span className="text-2xl text-[#29ABC8] font-semibold">SIGN IN</span>
          <input
            type="email"
            placeholder="Email address"
            name="email"
            className="w-full h-10 px-4 border-[3px] border-[#29ABC8] rounded-2xl"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full h-10 px-4 border-[3px] border-[#29ABC8] rounded-2xl"
            onChange={(e) => handleChange(e)}
          />
          <SecondaryButton onClick={handleSubmit}>Submit</SecondaryButton>
        </div>
        <div>
          <Image
            src={EmeteraiLogo}
            alt="EmeteraiLogo"
            width={250}
            height={255}
          />
        </div>
      </div>
    </div>
  );
}
