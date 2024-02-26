"use client";
import React from "react";
import SecondaryButton from "../components/SecondaryButton";
import EmeteraiLogo from "../../../public/images/e-meterai-white-bg.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Page() {
  const router = useRouter();
  const [data, setData] = React.useState({ email: "", password: "" });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  async function login(data) {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/",
        data
      );
      // console.log(response);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", JSON.stringify(response.data.token));
    } catch (error) {
      console.log(error);
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    // TODO : send data to API
    await login(data);
    router.push("/");
  }

  return (
    <div className="container  h-screen pt-12 flex items-center justify-center bg-mountain bg-no-repeat bg-contain bg-top">
      <div className="container flex items-center justify-center gap-5">
        <div className="w-80 flex flex-col gap-4 justify-center items-center">
          <span className="text-2xl text-[#29ABC8] font-semibold">SIGN IN</span>
          <input
            type="email"
            placeholder="Email address"
            name="email"
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
          <SecondaryButton onClick={handleSubmit}>Submit</SecondaryButton>
        </div>
        <div>
          <Image
            src={EmeteraiLogo}
            alt="EmeteraiLogo"
            width={180}
            height={195}
          />
        </div>
      </div>
    </div>
  );
}
