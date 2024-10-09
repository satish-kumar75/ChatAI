/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ecfdf6",
          100: "#d1fae9",
          200: "#a8f2d6",
          300: "#6fe6c1",
          400: "#36d1a5",
          500: "#10a37f",
          600: "#079474",
          700: "#057760",
          800: "#075e4e",
          900: "#074d41",
          950: "#022c26",
        },
        secondary: {
          50: "#f5f6f6",
          100: "#e4e6e9",
          200: "#cdd1d4",
          300: "#aab0b6",
          400: "#7f8891",
          500: "#646c76",
          600: "#555c65",
          700: "#494d55",
          800: "#414449",
          900: "#393b40",
          950: "#282a2e",
        },
      },
    },
  },
  plugins: [],
};
