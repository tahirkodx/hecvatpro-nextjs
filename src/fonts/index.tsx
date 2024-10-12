import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Font files can be colocated inside of `app`
export const favorit = localFont({
  src: "./assets/FavoritLightC.ttf",
  display: "swap",
  variable: "--font-favorit",
});
