"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [isDarkmode, setIsDarkmode] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDarkmode(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const darkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  const lightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  if (!mounted) {
    return (
      <div className="absolute bottom-4 right-4">
        <Image
          src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
          width={36}
          height={36}
          alt="Loading Light/Dark Toggle"
          priority={false}
        />
      </div>
    );
  }

  const toggleTheme = () => {
    setIsDarkmode(!isDarkmode);
    setTheme(isDarkmode ? "light" : "dark");
  };

  return (
    <div className="absolute bottom-3 right-4 p-2 hover:scale-105 transition ">
      <button
        className="w-14 h-7 rounded-xl bg-white flex items-center transition duration-300 focus:outline-none shadow"
        onClick={toggleTheme}
      >
        <div
          className={`w-7 h-7 relative rounded-xl transition duration-500 transform p-1 text-white ${
            isDarkmode
              ? "bg-gray-700 translate-x-full"
              : "bg-yellow-500 -translate-x-0"
          }`}
        >
          {isDarkmode ? darkIcon : lightIcon}
        </div>
      </button>
    </div>
  );
}
