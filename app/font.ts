import { Barlow_Condensed, Montserrat } from "next/font/google";

export const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlowCondensed",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
