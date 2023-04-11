/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },

    colors: {
      main: {
        100: "#fd9340",
        90: "#fd9e53",
        80: "#fda966",
        70: "#feb379",
        60: "#febe8c",
        50: "#fec9a0",
        40: "#fed4b3",
        30: "#fedfc6",
        20: "#ffe9d9",
        10: "#fff4ec",
        0: "#ffffff",
      },
      black: {
        100: "#000000",
        90: "#191919",
        80: "#333333",
        70: "#4d4d4d",
        60: "#666666",
        50: "#808080",
        40: "#999999",
        30: "#b3b3b3",
        20: "#cccccc",
        10: "#e6e6e6",
        0: "#ffffff",
      },
      white: "#ffffff",
      green: "#52C41A",
      yellow: "#FAAD14",
      red: "#FF4D4F",
      blue: "#1890FF",
    },

    extend: {},
  },
  plugins: [],
};
