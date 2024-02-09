import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={nunito_sans.className}>
        <main className="parent-container bg-background">
          <Header classname="bg-primary" />
          {children}
          <Footer classname="bg-primary" />
        </main>
      </body>
    </html>
  );
}
