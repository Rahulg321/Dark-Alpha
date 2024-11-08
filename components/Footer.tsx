import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const menuLinks = [
    {
      link: "/home",
      label: "Home",
    },
    {
      link: "/team",
      label: "Team",
    },
    {
      link: "/strategy",
      label: "Strategy",
    },
    {
      link: "/criteria",
      label: "Criteria",
    },
    {
      link: "/contact",
      label: "Contact",
    },
  ];

  return (
    <footer className="block-space bg-gray-900 text-primary">
      <div className="big-container">
        <div className="flex flex-col gap-6 border-b-2 py-6 md:flex-row md:justify-between">
          <div>
            <span className="text-2xl font-bold text-white">Dark Alpha</span>
            <span className="ml-8 block text-2xl text-white">Capital</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-bold text-white">Menu</span>
            {menuLinks.map((menu, index) => {
              return (
                <Link
                  href={menu.link}
                  key={index}
                  className="mt-2 text-gray-400 transition hover:text-white"
                >
                  {menu.label}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col">
            <span className=" text-xl font-bold text-white">Contact</span>
            <span className="mt-2 text-gray-400 transition hover:text-white">
              info@darkalphacapital.com
            </span>

            <span className="mt-2 text-gray-400 transition hover:text-white ">
              8 The Green Suite 4000, Dover, DE 19901
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between py-6 md:flex-row">
          <div className="flex flex-col gap-4">
            <span className="text-gray-400 transition hover:text-white">
              Dark Alpha Capital operates as an independent sponsor and is not a
              registered broker-dealer; we do not solicit securities or provide
              investment advice
            </span>
            <span className="text-gray-400 transition hover:text-white">
              &copy; All Rights Reserved - {currentYear} Dark Alpha Capital LLC
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
