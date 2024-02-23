import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="flex justify-between bg-black px-4 py-2 text-gray-400">
      <div className=" hidden md:flex md:items-center md:gap-4">
        <div className="cursor-pointer text-xl transition hover:text-white">
          <FaFacebookSquare />
        </div>
        <div className="cursor-pointer text-xl transition hover:text-white">
          <FaLinkedin />
        </div>
      </div>
      {/* <div className="flex gap-4">
        <div>
          <button className="px-2 py-1 text-sm font-semibold transition hover:bg-gray-600 hover:text-white">
            PAST TRANSACTIONS
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Topbar;
