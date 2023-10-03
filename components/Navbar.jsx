"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-8 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image src="jsm-logo.svg" alt="logo" width={55} height={40} />
        </Link>

        {!isMenuOpen ? (
          <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
            <li className="body-text text-gradient_blue-purple !font-bold">
              <Link href="https://jsmastery.pro/next13" target="_blank">
                Next.js 13.5 course
              </Link>
            </li>
            <li className="body-text !font-normal">
              <Link href="https://jsmastery.pro/masterclass" target="_blank">
                Masterclass
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="absolute right-10 top-20 border-2 border-black-200 bg-black-100 p-10 rounded-lg">
            <li className="body-text text-gradient_blue-purple !font-bold">
              <Link href="https://jsmastery.pro/next13" target="_blank">
                Next.js 13.5 course
              </Link>
            </li>
            <br />
            <li className="body-text !font-normal">
              <Link href="https://jsmastery.pro/masterclass" target="_blank">
                Masterclass
              </Link>
            </li>
          </ul>
        )}

        <Image
          src={isMenuOpen ? "/cross.png" : "/hamburger.svg"}
          width={30}
          height={30}
          alt="hamburger"
          className="block md:hidden"
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
};

export default Navbar;
