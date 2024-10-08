/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#f79a21",
        lightBodySecondBg: "#f2f1ee",
        lightBodyMainBg: "#fbfbfb",
        lightCardGrayBg: "#f0f0f0",
        lightCardStrongGrayBg: "#d6d6d6",
        lightBlackText: "#111111",
        lightGrayText: "#c2c2c2",
        lightWhiteText: "#f0f0f0",
      },
    },
  },
  plugins: [],
};
