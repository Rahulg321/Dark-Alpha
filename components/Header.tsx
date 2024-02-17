"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

type HeaderProps = {
  classname?: string;
};

const Header = ({ classname }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header
        className={clsx(
          "bg-slate-950 px-2 py-1 text-white opacity-85 md:opacity-65",
          classname,
        )}
      >
        <nav aria-label="Main-navigation">
          <ul className="flex flex-col justify-between md:m-4 md:flex-row md:items-center md:rounded-xl">
            <div className="flex items-center justify-between">
              <NameLogo />
              <button
                aria-label="Open menu"
                className="block text-2xl text-white md:hidden"
                onClick={() => setIsOpen(true)}
              >
                <MdMenu />
              </button>
            </div>
            <div
              className={clsx(
                "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-black pr-4 pt-14  transition-transform duration-300 ease-in-out md:hidden",
                isOpen ? "translate-x-0" : "translate-x-[100%]",
              )}
            >
              <button
                aria-label="Close menu"
                className="fixed right-4 top-3 block p-2 text-2xl text-white md:hidden "
                onClick={() => setIsOpen(false)}
              >
                <MdClose />
              </button>
              <Link
                className={clsx("text-2xl font-semibold", {
                  "active-link": pathname === "/home",
                })}
                href={"/home"}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Home
              </Link>
              <Link
                className={clsx("text-2xl font-semibold", {
                  "active-link": pathname === "/team",
                })}
                href={"/team"}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Advisors
              </Link>
              <Link
                className={clsx("text-2xl font-semibold", {
                  "active-link": pathname === "/criteria",
                })}
                href={"/criteria"}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Criteria
              </Link>
              <Link
                className={clsx("text-2xl font-semibold", {
                  "active-link": pathname === "/strategy",
                })}
                href={"/strategy"}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Strategy
              </Link>

              <Link
                className={clsx("text-2xl font-semibold", {
                  "active-link": pathname === "/contact",
                })}
                href={"/contact"}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Contact
              </Link>
            </div>
            <DesktopMenu />
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

function NameLogo({}: {}) {
  return (
    <div className="flex items-center  py-2">
      <div className="flex items-center border-r-2 px-2 lg:border-r-2">
        <Link
          href="/home"
          aria-label="Home page"
          className="font-bold md:text-3xl"
        >
          Dark Alpha
          <br /> <span className="font-semibold">Capital</span>
        </Link>
      </div>
      <div className="hidden px-2 lg:block">
        <span className="text-sm font-semibold">
          Where Main Street <br /> meets Wall Street
        </span>
      </div>
    </div>
  );
}

function DesktopMenu() {
  const pathname = usePathname();
  return (
    <div className="hidden gap-4 md:flex">
      <Link
        className={clsx("text-xl font-semibold", {
          "active-link": pathname === "/home",
        })}
        href={"/home"}
      >
        Home
      </Link>
      <Link
        className={clsx("text-xl font-semibold", {
          "active-link": pathname === "/team",
        })}
        href={"/team"}
      >
        Advisors
      </Link>
      <Link
        className={clsx("text-xl font-semibold", {
          "active-link": pathname === "/strategy",
        })}
        href={"/strategy"}
      >
        Strategy
      </Link>

      <Link
        className={clsx("text-xl font-semibold", {
          "active-link": pathname === "/criteria",
        })}
        href={"/criteria"}
      >
        Criteria
      </Link>
      <Link
        className={clsx("text-xl font-semibold", {
          "active-link": pathname === "/contact",
        })}
        href={"/contact"}
      >
        Contact
      </Link>
    </div>
  );
}
