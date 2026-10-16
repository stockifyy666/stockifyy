import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1F2E",
        paper: "#F6F4EF",
        brass: "#B08D57",
        teal: "#17423B",
        slate: "#5A6472",
        line: "#DAD4C6",
        gold: "#FEA500",
        goldMid: "#C88600",
        goldDeep: "#7C5200",
        amber: "#986300",
        cream: "#FFFDF7",
        creamSoft: "#FFF7E9",
        creamLine: "#E8DDC8",
      },
      fontFamily: {
        display: ["var(--font-roboto)", "Arial", "sans-serif"],
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1170px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
