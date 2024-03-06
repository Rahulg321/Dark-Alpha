import { Barlow_Condensed, Poppins } from "next/font/google";

export const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlowCondensed",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
});
