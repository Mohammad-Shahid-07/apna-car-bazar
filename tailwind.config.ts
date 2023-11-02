import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        sec: "#D6D0D1",
        prime: "#D30427",
        dark: {
          primary: "#171616",
          secondary: "#1C1B1B",
        },
      },
      boxShadow:{
        card: '0px 4px 8px 0px #787878'
      },
      dropShadow:{
        input: '(0px 0px 128px rgba(47, 46, 65, 0.69)'
      },
      backdropBlur: {
        40: '40px'
      },
      screens: {
         xs: "420px",
        xxl : "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
