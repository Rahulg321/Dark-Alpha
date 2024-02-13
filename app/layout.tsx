import type { Metadata } from "next";
import { montserrat, barlowCondensed } from "./font";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Dark Alpha🕶️",
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
          <Header classname="bg-primary" />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </main>
      </body>
    </html>
  );
}
