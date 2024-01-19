"use client";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import Upload from "../../../public/icons/upload-solid.svg";
import Image from "next/image";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  function checkLogin() {
    const token = localStorage.getItem("token");
    setIsLoggedIn(token ? true : false);
  }
  React.useEffect(() => {
    localStorage.setItem("token", "token");
    checkLogin();
  }, []);

  return (
    <nav className="container flex items-center justify-between h-20 px-8 bg-white shadow-md">
      {isLoggedIn && <span className="text-black">Halo, Username</span>}
      <div className="flex gap-4 ml-auto">
        {location.pathname == "/" && (
          <PrimaryButton>
            Upload
            <Image src={Upload} alt="Upload" />
          </PrimaryButton>
        )}
        <PrimaryButton>Faq</PrimaryButton>
        <PrimaryButton>{isLoggedIn ? "Sign out" : "Sign up"}</PrimaryButton>
      </div>
    </nav>
  );
}
