"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

type HeaderProps = {
    classname?: string;
};

const navbar = [
    {
        navlabel: "Home",
        navlink: "/home",
    },
    {
        navlabel: "Team",
        navlink: "/team",
        dropdown: [
            { label: "Operating Team", link: "/operating-team" },
            { label: "Investment Team", link: "/team" },
        ],
    },
    {
        navlabel: "Media",
        navlink: "/blog",
    },
    {
        navlabel: "Careers",
        navlink: "/careers",
    },
    {
        navlabel: "Strategy",
        navlink: "/strategy",
    },
    {
        navlabel: "Criteria",
        navlink: "/criteria",
    },
    {
        navlabel: "About",
        navlink: "/about-dark-alpha",
    },
    {
        navlabel: "Contact",
        navlink: "/contact",
    },
];

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
                            {navbar.map((e) => {
                                if (e.dropdown) {
                                    return (
                                        <div key={e.navlabel} className="relative group">
                                            <Link
                                                href={e.navlink}
                                                className={clsx("text-2xl font-semibold", {
                                                    "active-link": pathname === e.navlink,
                                                })}
                                                onClick={() => {
                                                    setIsOpen(false);
                                                }}
                                            >
                                                {e.navlabel}
                                            </Link>
                                            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                    {e.dropdown.map((item) => (
                                                        <Link
                                                            key={item.label}
                                                            href={item.link}
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                            role="menuitem"
                                                            onClick={() => {
                                                                setIsOpen(false);
                                                            }}
                                                        >
                                                            {item.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                                return (
                                    <Link
                                        href={e.navlink}
                                        key={e.navlabel}
                                        className={clsx("text-2xl font-semibold", {
                                            "active-link": pathname === e.navlink,
                                        })}
                                        onClick={() => {
                                            setIsOpen(false);
                                        }}
                                    >
                                        {e.navlabel}
                                    </Link>
                                );
                            })}
                        </div>
                        <DesktopMenu />
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;

function NameLogo({ }: {}) {
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
                    Investing in the full <br /> potential of businesses
                </span>
            </div>
        </div>
    );
}

function DesktopMenu() {
    const pathname = usePathname();
    return (
        <div className="hidden gap-4 md:flex">
            {navbar.map((e, index) => {
                if (e.dropdown) {
                    return (
                        <div key={index} className="relative group">
                            <Link
                                className={clsx("text-xl font-semibold", {
                                    "active-link": pathname === e.navlink,
                                })}
                                href={e.navlink}
                            >
                                {e.navlabel}
                            </Link>
                            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    {e.dropdown.map((item, itemIndex) => (
                                        <Link
                                            key={itemIndex}
                                            href={item.link}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                            role="menuitem"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                }
                return (
                    <Link
                        className={clsx("text-xl font-semibold", {
                            "active-link": pathname === e.navlink,
                        })}
                        href={e.navlink}
                        key={index}
                    >
                        {e.navlabel}
                    </Link>
                );
            })}
        </div>
    );
}
