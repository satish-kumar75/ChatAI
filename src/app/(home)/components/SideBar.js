"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import UserAvatar from "../../images/UserAvatar.png";
import ThemeSwitch from "@/components/ThemeSwitch";

const Icon = ({ className, paths, viewBox = "0 0 32 32", width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths.map((pathProps, idx) => (
        <path key={idx} {...pathProps} />
      ))}
    </svg>
  );
};

const SideBar = ({ isExpanded, setIsExpanded }) => {
  const [activeTab, setActiveTab] = useState("chats");
  const [activeChat, setActiveChat] = useState(null);

  const chats = [
    {
      iconPath:
        "M8.39359 0.786457C8.0186 0.789551 7.64671 1.16763 6.90293 1.9238C5.41536 3.43612 4.41952 3.94436 2.41958 3.96086C0.419653 3.97737 3.94429 6.94838 3.94429 6.94838L1.00359 10.9375L0.968685 10.9724L0.988778 10.9576L0.977428 10.973L1.00418 10.9463L4.99331 8.00555C4.99331 8.00555 7.96432 11.5302 7.98082 9.53026C7.99733 7.53033 8.50556 6.53449 10.0179 5.04692C10.7741 4.30313 11.1521 3.93124 11.1552 3.55625C11.1583 3.18127 10.7864 2.80318 10.0426 2.04702L9.97303 1.9774L9.97711 1.97332L9.90282 1.89904C9.14666 1.15525 8.76858 0.783362 8.39359 0.786457Z", // Complete path here
      chatTitle: "Cosmic Evolution",
      time: "9:34 PM",
      message:
        "Some 15 billion years ago the universe emerged from a hot, dense sea of...",
    },
    {
      iconPath:
        "M8.39359 0.786457C8.0186 0.789551 7.64671 1.16763 6.90293 1.9238C5.41536 3.43612 4.41952 3.94436 2.41958 3.96086C0.419653 3.97737 3.94429 6.94838 3.94429 6.94838L1.00359 10.9375L0.968685 10.9724L0.988778 10.9576L0.977428 10.973L1.00418 10.9463L4.99331 8.00555C4.99331 8.00555 7.96432 11.5302 7.98082 9.53026C7.99733 7.53033 8.50556 6.53449 10.0179 5.04692C10.7741 4.30313 11.1521 3.93124 11.1552 3.55625C11.1583 3.18127 10.7864 2.80318 10.0426 2.04702L9.97303 1.9774L9.97711 1.97332L9.90282 1.89904C9.14666 1.15525 8.76858 0.783362 8.39359 0.786457Z", // Complete path here
      chatTitle: "Star Formation",
      time: "8:15 PM",
      message:
        "The process by which dense regions within molecular clouds in interstellar space collapse and form stars...",
    },
    {
      iconPath:
        "M8.39359 0.786457C8.0186 0.789551 7.64671 1.16763 6.90293 1.9238C5.41536 3.43612 4.41952 3.94436 2.41958 3.96086C0.419653 3.97737 3.94429 6.94838 3.94429 6.94838L1.00359 10.9375L0.968685 10.9724L0.988778 10.9576L0.977428 10.973L1.00418 10.9463L4.99331 8.00555C4.99331 8.00555 7.96432 11.5302 7.98082 9.53026C7.99733 7.53033 8.50556 6.53449 10.0179 5.04692C10.7741 4.30313 11.1521 3.93124 11.1552 3.55625C11.1583 3.18127 10.7864 2.80318 10.0426 2.04702L9.97303 1.9774L9.97711 1.97332L9.90282 1.89904C9.14666 1.15525 8.76858 0.783362 8.39359 0.786457Z", // Complete path here
      chatTitle: "Star Formation",
      time: "8:15 PM",
      message:
        "The process by which dense regions within molecular clouds in interstellar space collapse and form stars...",
    },
    {
      iconPath:
        "M8.39359 0.786457C8.0186 0.789551 7.64671 1.16763 6.90293 1.9238C5.41536 3.43612 4.41952 3.94436 2.41958 3.96086C0.419653 3.97737 3.94429 6.94838 3.94429 6.94838L1.00359 10.9375L0.968685 10.9724L0.988778 10.9576L0.977428 10.973L1.00418 10.9463L4.99331 8.00555C4.99331 8.00555 7.96432 11.5302 7.98082 9.53026C7.99733 7.53033 8.50556 6.53449 10.0179 5.04692C10.7741 4.30313 11.1521 3.93124 11.1552 3.55625C11.1583 3.18127 10.7864 2.80318 10.0426 2.04702L9.97303 1.9774L9.97711 1.97332L9.90282 1.89904C9.14666 1.15525 8.76858 0.783362 8.39359 0.786457Z", // Complete path here
      chatTitle: "Star Formation",
      time: "8:15 PM",
      message:
        "The process by which dense regions within molecular clouds in interstellar space collapse and form stars...",
    },
    {
      iconPath:
        "M8.39359 0.786457C8.0186 0.789551 7.64671 1.16763 6.90293 1.9238C5.41536 3.43612 4.41952 3.94436 2.41958 3.96086C0.419653 3.97737 3.94429 6.94838 3.94429 6.94838L1.00359 10.9375L0.968685 10.9724L0.988778 10.9576L0.977428 10.973L1.00418 10.9463L4.99331 8.00555C4.99331 8.00555 7.96432 11.5302 7.98082 9.53026C7.99733 7.53033 8.50556 6.53449 10.0179 5.04692C10.7741 4.30313 11.1521 3.93124 11.1552 3.55625C11.1583 3.18127 10.7864 2.80318 10.0426 2.04702L9.97303 1.9774L9.97711 1.97332L9.90282 1.89904C9.14666 1.15525 8.76858 0.783362 8.39359 0.786457Z", // Complete path here
      chatTitle: "Star Formation",
      time: "8:15 PM",
      message:
        "The process by which dense regions within molecular clouds in interstellar space collapse and form stars...",
    },
    {
      iconPath:
        "M8.39359 0.786457C8.0186 0.789551 7.64671 1.16763 6.90293 1.9238C5.41536 3.43612 4.41952 3.94436 2.41958 3.96086C0.419653 3.97737 3.94429 6.94838 3.94429 6.94838L1.00359 10.9375L0.968685 10.9724L0.988778 10.9576L0.977428 10.973L1.00418 10.9463L4.99331 8.00555C4.99331 8.00555 7.96432 11.5302 7.98082 9.53026C7.99733 7.53033 8.50556 6.53449 10.0179 5.04692C10.7741 4.30313 11.1521 3.93124 11.1552 3.55625C11.1583 3.18127 10.7864 2.80318 10.0426 2.04702L9.97303 1.9774L9.97711 1.97332L9.90282 1.89904C9.14666 1.15525 8.76858 0.783362 8.39359 0.786457Z", // Complete path here
      chatTitle: "Star Formation",
      time: "8:15 PM",
      message:
        "The process by which dense regions within molecular clouds in interstellar space collapse and form stars...",
    },
    {
      iconPath:
        "M8.39359 0.786457C8.0186 0.789551 7.64671 1.16763 6.90293 1.9238C5.41536 3.43612 4.41952 3.94436 2.41958 3.96086C0.419653 3.97737 3.94429 6.94838 3.94429 6.94838L1.00359 10.9375L0.968685 10.9724L0.988778 10.9576L0.977428 10.973L1.00418 10.9463L4.99331 8.00555C4.99331 8.00555 7.96432 11.5302 7.98082 9.53026C7.99733 7.53033 8.50556 6.53449 10.0179 5.04692C10.7741 4.30313 11.1521 3.93124 11.1552 3.55625C11.1583 3.18127 10.7864 2.80318 10.0426 2.04702L9.97303 1.9774L9.97711 1.97332L9.90282 1.89904C9.14666 1.15525 8.76858 0.783362 8.39359 0.786457Z", // Complete path here
      chatTitle: "Star Formation",
      time: "8:15 PM",
      message:
        "The process by which dense regions within molecular clouds in interstellar space collapse and form stars...",
    },
    {
      iconPath:
        "M8.39359 0.786457C8.0186 0.789551 7.64671 1.16763 6.90293 1.9238C5.41536 3.43612 4.41952 3.94436 2.41958 3.96086C0.419653 3.97737 3.94429 6.94838 3.94429 6.94838L1.00359 10.9375L0.968685 10.9724L0.988778 10.9576L0.977428 10.973L1.00418 10.9463L4.99331 8.00555C4.99331 8.00555 7.96432 11.5302 7.98082 9.53026C7.99733 7.53033 8.50556 6.53449 10.0179 5.04692C10.7741 4.30313 11.1521 3.93124 11.1552 3.55625C11.1583 3.18127 10.7864 2.80318 10.0426 2.04702L9.97303 1.9774L9.97711 1.97332L9.90282 1.89904C9.14666 1.15525 8.76858 0.783362 8.39359 0.786457Z", // Complete path here
      chatTitle: "Star Formation",
      time: "8:15 PM",
      message:
        "The process by which dense regions within molecular clouds in interstellar space collapse and form stars...",
    },
    {
      iconPath:
        "M8.39359 0.786457C8.0186 0.789551 7.64671 1.16763 6.90293 1.9238C5.41536 3.43612 4.41952 3.94436 2.41958 3.96086C0.419653 3.97737 3.94429 6.94838 3.94429 6.94838L1.00359 10.9375L0.968685 10.9724L0.988778 10.9576L0.977428 10.973L1.00418 10.9463L4.99331 8.00555C4.99331 8.00555 7.96432 11.5302 7.98082 9.53026C7.99733 7.53033 8.50556 6.53449 10.0179 5.04692C10.7741 4.30313 11.1521 3.93124 11.1552 3.55625C11.1583 3.18127 10.7864 2.80318 10.0426 2.04702L9.97303 1.9774L9.97711 1.97332L9.90282 1.89904C9.14666 1.15525 8.76858 0.783362 8.39359 0.786457Z", // Complete path here
      chatTitle: "Star Formation",
      time: "8:15 PM",
      message:
        "The process by which dense regions within molecular clouds in interstellar space collapse and form stars...",
    },
    {
      iconPath:
        "M8.39359 0.786457C8.0186 0.789551 7.64671 1.16763 6.90293 1.9238C5.41536 3.43612 4.41952 3.94436 2.41958 3.96086C0.419653 3.97737 3.94429 6.94838 3.94429 6.94838L1.00359 10.9375L0.968685 10.9724L0.988778 10.9576L0.977428 10.973L1.00418 10.9463L4.99331 8.00555C4.99331 8.00555 7.96432 11.5302 7.98082 9.53026C7.99733 7.53033 8.50556 6.53449 10.0179 5.04692C10.7741 4.30313 11.1521 3.93124 11.1552 3.55625C11.1583 3.18127 10.7864 2.80318 10.0426 2.04702L9.97303 1.9774L9.97711 1.97332L9.90282 1.89904C9.14666 1.15525 8.76858 0.783362 8.39359 0.786457Z", // Complete path here
      chatTitle: "Star Formation",
      time: "8:15 PM",
      message:
        "The process by which dense regions within molecular clouds in interstellar space collapse and form stars...",
    },
  ];

  const tabs = [
    {
      name: "chats",
      label: "CHATS",
      count: 24,
      icon: {
        viewBox: "0 0 10 10",
        paths: [
          {
            d: "M9.99998 4.72223C10.0019 5.45549 9.83058 6.17883 9.49999 6.83334C9.108 7.61764 8.5054 8.27732 7.75968 8.73849C7.01396 9.19966 6.15457 9.44411 5.27777 9.44445C4.54451 9.44636 3.82117 9.27504 3.16666 8.94445L0 10L1.05555 6.83334C0.724961 6.17883 0.553643 5.45549 0.555555 4.72223C0.555894 3.84543 0.800339 2.98604 1.26151 2.24032C1.72268 1.4946 2.38236 0.891996 3.16666 0.500015C3.82117 0.169422 4.54451 -0.00189598 5.27777 1.58267e-05H5.55555C6.71352 0.0639 7.80723 0.55266 8.62729 1.37271C9.44734 2.19277 9.9361 3.28648 9.99998 4.44445V4.72223Z",
          },
        ],
      },
    },
    {
      name: "saved",
      label: "SAVED",
      count: 24,
      icon: {
        viewBox: "0 0 6 9",
        paths: [
          {
            d: "M5.57143 9C5.4962 9 5.42229 8.9792 5.35714 8.9397L3 7.5123L0.642857 8.9397C0.577707 8.97919 0.503803 8.99999 0.428574 8.99999C0.353345 8.99999 0.279441 8.9792 0.21429 8.9397C0.14914 8.90021 0.0950375 8.8434 0.0574218 8.775C0.019806 8.70659 1.91109e-06 8.62899 0 8.55V1.35C0.000340378 0.992067 0.135908 0.648897 0.376953 0.395801C0.617997 0.142704 0.944826 0.000357397 1.28571 0H4.71429C5.05517 0.000357397 5.382 0.142704 5.62305 0.395801C5.86409 0.648897 5.99966 0.992067 6 1.35V8.55C6 8.66935 5.95485 8.78381 5.87447 8.8682C5.7941 8.95259 5.68509 9 5.57143 9Z",
          },
        ],
      },
    },
  ];

  return (
    <section
      className={`${
        isExpanded ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out w-[22rem] px-2 relative`}
    >
      <div
        className="absolute z-30 bg-primary-500 hover:bg-primary-600 animation p-[5px] rounded-full right-0 top-1/2 translate-x-1/2 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <IoIosArrowBack className="text-xl text-primary-50" />
        ) : (
          <IoIosArrowForward className="text-xl text-primary-50" />
        )}
      </div>
      <div className={`py-2 flex justify-between items-center `}>
        <h2 className="font-medium text-xl tracking-tighter">My Chats</h2>
        <div className="flex gap-2">
          <Icon
            className="fill-primary-500 hover:fill-primary-600 cursor-pointer animation"
            width={32}
            height={32}
            paths={[
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M23.4971 0H8.50286C3.27619 0 0 3.69933 0 8.93625V23.0637C0 28.3007 3.26095 32 8.50286 32H23.4971C28.739 32 32 28.3007 32 23.0637V8.93625C32 3.69933 28.739 0 23.4971 0Z",
              },
              {
                d: "M16 10.1236V21.8468",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              },
              {
                d: "M21.8672 15.9844H10.1328",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              },
            ]}
          />
          <Icon
            className="fill-secondary-300 hover:fill-secondary-400 dark:fill-secondary-700 dark:hover:fill-secondary-800  cursor-pointer animation"
            width={32}
            height={32}
            paths={[
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M23.4971 0H8.50286C3.27619 0 0 3.69933 0 8.93625V23.0637C0 28.3007 3.26095 32 8.50286 32H23.4971C28.739 32 32 28.3007 32 23.0637V8.93625C32 3.69933 28.739 0 23.4971 0Z",
              },
              {
                d: "M16 16C16.5523 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14C15.4477 14 15 14.4477 15 15C15 15.5523 15.4477 16 16 16Z",
                fill: "#D9D9D9",
              },
              {
                d: "M22 16C22.5523 16 23 15.5523 23 15C23 14.4477 22.5523 14 22 14C21.4477 14 21 14.4477 21 15C21 15.5523 21.4477 16 22 16Z",
                fill: "#D9D9D9",
              },
              {
                d: "M10 16C10.5523 16 11 15.5523 11 15C11 14.4477 10.5523 14 10 14C9.44772 14 9 14.4477 9 15C9 15.5523 9.44772 16 10 16Z",
                fill: "#D9D9D9",
              },
            ]}
            viewBox="0 0 32 32"
          />
        </div>
      </div>

      <div className="max-h-12 h-full flex bg-secondary-200 dark:bg-secondary-600 w-full rounded-lg p-1 gap-1">
        {tabs.map((tab) => (
          <p
            key={tab.name}
            className={`flex w-1/2 p-1 rounded-lg gap-2 items-center justify-center font-bold text-xs cursor-pointer animation  ${
              activeTab === tab.name
                ? "dark:bg-secondary-950 bg-secondary-50 text-primary-400 shadow-[0_16px_6px_-2px_rgb(0_0_0_/_13%),_0_8px_10px_-6px_rgb(137_134_134)]"
                : "dark:bg-secondary-600 bg-secondary-200 dark:text-secondary-50 text-secondary-950 dark:hover:bg-secondary-900 hover:bg-secondary-100"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            <Icon
              className={` ${
                activeTab === tab.name
                  ? "fill-primary-400"
                  : "dark:fill-secondary-50 fill-secondary-950"
              }`}
              width={16}
              height={16}
              viewBox={tab.icon.viewBox}
              paths={tab.icon.paths}
            />
            {tab.label}
            <span
              className={`p-1 rounded-md  ${
                activeTab === tab.name
                  ? "dark:bg-primary-500/20 bg-primary-500/10"
                  : "dark:bg-secondary-400 bg-secondary-50"
              }`}
            >
              {tab.count}
            </span>
          </p>
        ))}
      </div>
      <SearchBox />
      <div className="relative flex flex-col gap-2 rounded-lg overflow-y-scroll scrollable h-[calc(100vh-230px)] ">
        {chats.map((chat, index) => (
          <Chats
            key={index}
            iconPath={chat.iconPath}
            chatTitle={chat.chatTitle}
            time={chat.time}
            message={chat.message}
            truncate={true}
            isActive={index === activeChat}
            onClick={() => {
              setActiveChat(index);
            }}
          />
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-2 bg-secondary-300/20 hover:bg-secondary-100  dark:bg-secondary-800 px-3 py-2 rounded-lg dark:hover:bg-secondary-950 animation cursor-pointer ">
          <Image src={UserAvatar} height={30} width={30} />
          <p>Saurabh Kumar</p>
        </div>
        <ThemeSwitch />
      </div>
    </section>
  );
};

const SearchBox = () => {
  return (
    <form className="max-w-md mx-auto my-4 flex gap-3 items-center">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative grow">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Icon
            width="14"
            height="14"
            viewBox="0 0 14 14"
            paths={[
              {
                d: "M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z",
                stroke: "#575B65",
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              },
              {
                d: "M13 13L9.53333 9.53333",
                stroke: "#575B65",
                strokeWidth: "1.2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              },
            ]}
          />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full px-4 py-2 ps-10 text-sm text-gray-900 outline-none rounded-lg bg-secondary-200 dark:bg-secondary-800 placeholder:font-semibold placeholder:text-base dark:placeholder-gray-400 dark:text-white"
          placeholder="Search..."
          required
        />
      </div>
      <Icon
        className={
          "dark:fill-secondary-950 dark:hover:fill-black fill-secondary-200 hover:fill-secondary-300 animation cursor-pointer"
        }
        width="32"
        height="32"
        viewBox="0 0 32 32"
        paths={[
          {
            d: "M0 8C0 3.58172 3.58172 0 8 0H24C28.4183 0 32 3.58172 32 8V24C32 28.4183 28.4183 32 24 32H8C3.58172 32 0 28.4183 0 24V8Z",
          },
          {
            d: "M10.4 16.8H21.2M8 12H23.6M14 21.6H17.6",
            stroke: "#10a37f",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
        ]}
      />
    </form>
  );
};

const Chats = ({
  iconPath,
  chatTitle,
  time,
  message,
  iconColor = "#FEC553",
  truncate = false,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`w-full flex items-baseline gap-2 p-2 rounded-lg cursor-pointer hover:bg-primary-300/20 dark:hover:bg-secondary-950 animation ${
        isActive ? " bg-primary-300/20 dark:bg-secondary-950" : ""
      }`}
      onClick={onClick}
    >
      <div>
        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={iconPath}
            fill={iconColor}
          />
        </svg>
      </div>

      <div className="w-full">
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-semibold text-lg">{chatTitle}</h3>
          <p className="font-light text-sm">{time}</p>
        </div>
        <div
          className={`text-sm ${truncate ? "line-clamp-2" : ""}`}
          style={{
            overflow: truncate ? "hidden" : "visible",
            display: truncate ? "-webkit-box" : "block",
            WebkitBoxOrient: truncate ? "vertical" : "unset",
            WebkitLineClamp: truncate ? 2 : "unset",
          }}
        >
          {message}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
