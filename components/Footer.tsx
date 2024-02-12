import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="block-space bg-black text-primary">
      <div className="big-container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex gap-4">
            <Link href="/home">Home</Link>
            <Link href="/about-us">About</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <span className="text-4xl">Dark Alpha</span>
          </div>
          <div>
            <span>{currentYear} &copy; All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
