import clsx from "clsx";
import React from "react";

type FooterProps = {
  classname?: string;
};

const Footer = ({ classname }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={clsx("", classname)}>
      <div className="bg-accent block-space text-white">
        <div className="big-container flex">
          <div className="flex basis-1/4 flex-col items-start justify-start ">
            <span className="text-5xl font-extrabold text-slate-900">
              Dark Alpha
            </span>
          </div>

          <div className="flex basis-3/4  gap-4">
            <div className="flex flex-1 flex-col gap-3 px-3">
              <span className=" text-xl font-bold text-slate-900">Menu</span>
              <span className="hover-footer-link">Home</span>
              <span className="hover-footer-link">Strategy</span>
              <span className="hover-footer-link">Blog</span>
              <span className="hover-footer-link">Team</span>
              <span className="hover-footer-link">Contact</span>
            </div>

            <div className="flex flex-1 flex-col gap-3 text-pretty px-3">
              <span className="text-xl font-bold text-slate-900">New York</span>
              <span className="max-w-[25ch]">
                79 Wellington St. W, Suite 3500, P.O. Box 357 Toronto, ON, M5K
                1K7
              </span>
              <span>contact@altas.com</span>
              <span>+1 416-306-9800</span>
            </div>
            <div className="flex flex-1 flex-col gap-3 text-pretty px-3">
              <span className="text-xl font-bold text-slate-900">Toronto</span>
              <span className="max-w-[25ch]">
                767 Fifth Avenue, 33rd Floor, New York, NY, 10153
              </span>
              <span>+1 416-306-9800</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-8 text-white">
        <div className="big-container">
          &copy; {currentYear} All rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
