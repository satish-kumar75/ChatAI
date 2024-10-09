"use client";

import { createContext, useState } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const login = async (username, password) => {
    try {
      const formData = new URLSearchParams();
      formData.append("username", username);
      formData.append("password", password);

      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.access_token);
        setUser(data);
        setTimeout(() => {
          router.push("/"); 
        }, 100); 
      }
    } catch (error) {
      console.log("Login Failed:", error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    router.push("/users/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
