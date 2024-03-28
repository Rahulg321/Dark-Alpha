import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="flex justify-between bg-black px-6 py-2 text-gray-400">
      <div className=" hidden md:flex md:items-center md:gap-4">
        <div className="cursor-pointer text-xl transition hover:text-white">
          <FaFacebookSquare />
        </div>
        <Link
          className="cursor-pointer text-xl transition hover:text-white"
          href={"https://www.linkedin.com/company/dark-alpha-capital"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
      </div>
      <div className="flex gap-4">
        <div>
          <Link
            className="bg-gray-800 px-2 py-1 text-sm font-semibold text-white transition hover:bg-gray-700"
            href="https://calendly.com/darkalphacapital"
            target="_blank"
          >
            SET AN APPOINTMENT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
