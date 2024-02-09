import clsx from "clsx";
import Link from "next/link";
import React from "react";

type HeaderProps = {
  classname?: string;
};

const Header = ({ classname }: HeaderProps) => {
  return (
    <header
      className={clsx("flex items-center justify-around px-2 py-4", classname)}
    >
      <nav>
        <ul className="flex gap-4">
          <li className="">
            <Link href={"/about-us"}>About</Link>
          </li>
          <li>
            <Link href={"/strategy"}>Strategy</Link>
          </li>
          <li>
            <Link href={"/business"}>Business</Link>
          </li>
        </ul>
      </nav>

      <Link
        href={"/home"}
        className="cursor-pointer text-4xl  transition hover:scale-110"
      >
        Dark Alpha
      </Link>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href={"/team"}>Team</Link>
          </li>
          <li>
            <Link href={"/blogs"}>Blogs</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
