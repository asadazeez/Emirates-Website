import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sofia: ["SofiaRegular", "sans-serif"], // Add your SofiaRegular font here
        poppins: ["Poppins", "sans-serif"], // If you're also using Poppins
        rubik: ["Rubik", "sans-serif"], // If you're also using Rubik
      },
    },
  },
  plugins: [],
};

export default config;
