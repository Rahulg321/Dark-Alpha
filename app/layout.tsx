import type { Metadata } from "next";
import { poppins, barlowCondensed } from "./font";
import "./globals.css";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Topbar from "@/components/Topbar";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://darkalphacapital.com"),
  title: {
    default: "Dark Alpha Capital",
    template: `%s | Dark Alpha Capital`,
  },
  description:
    "Dark Alpha is a leading independent sponsor company in the US, specializing in private equity investments across various industries with a focus on value creation and strategic partnerships. They leverage their extensive network and expertise to identify and capitalize on unique investment opportunities, driving growth and maximizing returns for their stakeholders",
  verification: {
    google:
      "google-site-verification=ORK7dRRfQetHYuTbAEjTWjlZas0uU3EDoAj7Y6J71uM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(GeistSans.variable)}>
      <meta
        name="google-site-verification"
        content="8pP_lJBKWWCw5FpUWOGsVYea4jHoZ4bVNitNrYCI_EU"
      />
      <body className="">
        <main className="parent-container bg-background">
          <Topbar />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
          <Toaster />
        </main>
      </body>
      <GoogleAnalytics gaId="G-5G1295D70P" />
    </html>
  );
}
