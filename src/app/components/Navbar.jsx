"use client";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import Upload from "../../../public/icons/upload-solid.svg";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const locWithUploadButton = [
    "/",
    "/upload",
    "/history-payment",
    "/history-document",
    "/payment",
  ];
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState({});

  function handleSignOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/signin");
  }
  function checkLogin() {
    const token = localStorage.getItem("token") || null;
    if (token) {
      setIsLoggedIn(true);
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      checkLogin();
    }
  }, [pathname]);

  return (
    <nav className="container border border-b-cyan-400 flex items-center justify-between h-auto px-8 py-4 bg-transparent fixed z-10">
      {isLoggedIn && (
        <span className="text-black font-semibold">
          Halo, {user ? user?.email : "Username"}
        </span>
      )}
      <div className="flex gap-4 ml-auto">
        {locWithUploadButton.includes(pathname) && (
          <PrimaryButton onClick={() => router.push("/upload")}>
            Upload
            <Image src={Upload} alt="Upload" />
          </PrimaryButton>
        )}
        <PrimaryButton onClick={() => router.push("/faq")}>Faq</PrimaryButton>
        <PrimaryButton
          onClick={() =>
            isLoggedIn
              ? handleSignOut()
              : pathname === "/signup"
              ? router.push("/signin")
              : router.push("/signup")
          }
        >
          {isLoggedIn
            ? "Sign out"
            : pathname === "/signup"
            ? "Sign in"
            : "Sign up"}
        </PrimaryButton>
      </div>
    </nav>
  );
}
