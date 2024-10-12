import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        favorit: ["var(--font-favorit)", ...fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            h3:{
              marginBlockStart: 0,
              marginBlockEnd: 0,
              lineHeight: "35px",
              paddingTop: "0rem",
            },
            p: {
              marginBlockStart: 0,
              marginBlockEnd: 0.9,
              lineHeight: "35px",
              paddingTop: "1.5rem",
            },
            span: {
              backgroundColor: "#bfdbfe",
              fontWeight: "700",
              borderRadius: "0.5rem",
              padding: "0.25rem 0.5rem",
              fontSize: "0.875rem",
              marginInlineStart: "0.5rem",
              marginInlineEnd: "0.5rem",
              "@screen lg": {
                fontSize: "1.875rem",
                padding: "0.25rem 1rem",
              },
            },
            strong: {
              fontWeight: 700,
            },
          },
        },
        dark: {
          css: {
            p: {
              marginBlockStart: 0,
              marginBlockEnd: 0.9,
              lineHeight: "35px",
              paddingTop: "1.5rem",
            },
            span: {
              backgroundColor: "transparent",
              color: "#faca39",
              fontWeight: "700",
              borderRadius: "0.5rem",
              padding: "0.25rem 0.5rem",
              fontSize: "0.875rem",
              marginInlineStart: "0.5rem",
              marginInlineEnd: "0.5rem",
              "@screen lg": {
                fontSize: "1.875rem",
                padding: "0.25rem 1rem",
              },
            },
            strong: {
              fontWeight: 700,
            },
          },
        },
      },
      borderWidth: {
        4: "4px",
        7: "7px",
      },
      boxShadow: {
        "3xl": "0px 4px 0px 0px #000000",
      },
      spacing: {
        "25px": "25px",
      },
      gridTemplateColumns: {
        "auto-fill-minmax": "repeat(auto-fill, minmax(min(100%, 16rem), 1fr))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "green-arrow":
          "url('https://hecvatpro.com/wp-content/uploads/2023/11/green_arrow.svg')",
      },
      backgroundSize: {
        "25x20": "20px 20px",
        "30": "30px 30px",
      },
      colors: {
        black: {
          default: "#000000",
          50: "#222222",
        },
        gray: {
          default: "#F7F7F5",
          30: "#555555",
          50: "#9CA3AF",
          100: "#D1D5DB",
          150: "#9C988D",
          350: '#A6A6A6',
          450:'#EAEAEA',
          600: "#ADADAD",
          650: "#777777",
          700: "#697270",
          800: "#333333",
          850: "#444444",
        },
        yellow: {
          default: "#FACA39",
          30: "#ECECE8",
          50: "#FACC15",
          100: "#F7EED7",
          150: "#FFD500",
          200: "#92782E",
        },
        blue: {
          50: "#BFDBFE",
          600: "#3B82F6",
          800: "#333366",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: [
    "bg-blue-50",
    "font-bold",
    "lg:text-3xl",
    "text-sm",
    "rounded-lg",
    "py-1",
    "px-2",
    "mr-2",
  ],
};
export default config;
