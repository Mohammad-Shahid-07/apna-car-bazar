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
      boxShadow: {
        card: "0px 4px 8px 0px #787878",
        smallcard: "0px 4px 8px 0px #787878",
      },
      dropShadow: {
        input: "(0px 0px 128px rgba(47, 46, 65, 0.69)",
      },
      backdropBlur: {
        40: "40px",
      },
      screens: {
        xs: "420px",
        xxl: "1440px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
