"use client";

import { useContext, useState } from "react";
import AuthContext from "@/context/AuthContext";
import Image from "next/image";
import Logo from "./images/logo.png";
import Link from "next/link";

const Register = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("basic");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          is_active: true,
          is_superuser: false,
          is_verified: false,
          full_name: fullName,
          role,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User registered successfully:", data);
        login(email, password);
      } else {
        console.error("Failed to register user");
      }
    } catch (error) {
      console.error("Failed to register user:", error);
    }
  };

  return (
    <div className="container w-full h-screen flex items-center justify-center">
      <div className="w-80 p-6 rounded-lg">
        <div className="flex items-center justify-center gap-3">
          <Image src={Logo} width={40} height={40} alt="Logo" />
          <span className="text-primary-400 text-4xl font-medium">ChatAI</span>
        </div>

        <form onSubmit={handleRegister} className="flex flex-col gap-1 mt-4">
          <div className="mb-2 flex flex-col-reverse ">
            <input
              placeholder="Name"
              className="peer outline-none px-4 py-1 h-12 border-b rounded-lg duration-500 focus:border-gray-100 relative placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10 text-xs shadow-xl shadow-gray-400/10 placeholder:text-gray-400"
              type="text"
            />
            <span className="duration-500 opacity-0 peer-focus:opacity-100 text-gray-500 text-xs -translate-y-9 peer-focus:translate-y-0">
              Name
            </span>
          </div>

          <div className="mb-2 flex flex-col-reverse ">
            <input
              placeholder="Email Address"
              className="peer outline-none px-4 py-1 h-12 border-b rounded-lg duration-500 focus:border-gray-100 relative placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10 text-xs shadow-xl shadow-gray-400/10 placeholder:text-gray-400"
              type="Email"
            />
            <span className="duration-500 opacity-0 peer-focus:opacity-100 text-gray-500 text-xs -translate-y-9 peer-focus:translate-y-0">
              Email Address
            </span>
          </div>

          <div className="mb-2 flex flex-col-reverse ">
            <input
              placeholder="Password"
              className="peer outline-none px-4 py-1 h-12 border-b rounded-lg duration-500 focus:border-gray-100 relative placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10 text-xs shadow-xl shadow-gray-400/10 placeholder:text-gray-400"
              type="password"
            />
            <span className="duration-500 opacity-0 peer-focus:opacity-100 text-gray-500 text-xs -translate-y-9 peer-focus:translate-y-0">
              Password
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-500 rounded-md py-1.5 hover:bg-primary-600 transition font-medium text-white"
          >
            Register
          </button>
          <p className="text-center mt-2">
            Already have an account?{" "}
            <Link href="/users/login" className="text-blue-500">
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
