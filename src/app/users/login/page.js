"use client";

import { useContext, useState } from "react";
import AuthContext from "@/context/AuthContext";
import Image from "next/image";
import Logo from "./images/logo.png";
import Link from "next/link";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="container w-full h-screen flex items-center justify-center">
      <div className="w-80  p-6 rounded-lg">
        <div className="flex items-center justify-center gap-3">
          <Image src={Logo} width={40} height={40} alt="Logo" />
          <span className="text-primary-400 text-4xl font-medium">ChatAI</span>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
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
          <a className="text-center text-blue-600 ">Forget Password?</a>
          <button
            type="submit"
            className="w-full bg-primary-500 rounded-md py-1.5 hover:bg-primary-600 transition font-medium text-white"
          >
            Login
          </button>
          <p className="text-center">
            New User?{" "}
            <Link href="/users/register" className="text-blue-600">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
