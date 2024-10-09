"use client";
import React, { useState } from "react";
import SideBar from "./SideBar";
import MainScreen from "./MainScreen";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={`grid transition-all duration-300 ease-in-out ${
        isExpanded ? "grid-cols-[22rem_1fr]" : "grid-cols-[0_1fr]"
      } w-full h-screen`}
    >
      <SideBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <MainScreen isExpanded={isExpanded} />
    </div>
  );
};

export default Home;
