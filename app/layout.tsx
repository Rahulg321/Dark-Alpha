import type { Metadata } from "next";
import { montserrat, barlowCondensed } from "./font";
import "./globals.css";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Topbar from "@/components/Topbar";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Dark Alpha Capital🕶️",
  description:
    "Offical web app of dark alpha company a startup based in the US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${barlowCondensed.variable}`}
    >
      <body>
        <main className="parent-container bg-background">
          <Topbar />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </main>
      </body>
      <GoogleAnalytics gaId="G-YWTQ8W1DMT" />
    </html>
  );
}
