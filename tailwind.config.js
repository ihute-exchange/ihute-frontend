/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#026fc7",
        lightBodySecondBg: "#fafafa",
        lightBodyMainBg: "#fbfbfb",
        lightCardGrayBg: "#f0f0f0",
        lightCardStrongGrayBg: "#d6d6d6",
        lightBlackText: "#111111",
        lightGrayText: "#c2c2c2",
        lightWhiteText: "#f0f0f0",
        lightHoverBg: "#eff6ff",
        lightSidebarBg: "#ffffff",
      },
      fontFamily: {
        suse: ["SUSE", "sans-serif"]
      },
      animation: {
        Loader: "spin .9s linear infinite",
        LoaderFast: "spin .4s linear infinite",
        skeletonLoader: "pulse 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
