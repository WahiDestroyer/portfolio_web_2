import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center py-4">
          
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <ul className="hidden md:flex space-x-4">
            <li className="font-mont font-bold text-lg text-white hover:text-black hover:bg-white px-3 py-2.5 transition-all duration-300 rounded-4xl cursor-pointer">
              <Link href="#about">About me</Link>
            </li>
            <li className="font-mont font-bold text-lg text-white hover:text-black hover:bg-white px-3 py-2.5 transition-all duration-300 rounded-4xl cursor-pointer">
             <Link href="#skills">Skills</Link>
            </li>
            <li className="font-mont font-bold text-lg text-white hover:text-black hover:bg-white px-3 py-2.5 transition-all duration-300 rounded-4xl cursor-pointer">
             <Link href="#"> Portfolio </Link>
            </li>
            <li className="font-mont font-bold text-lg text-white hover:text-black hover:bg-white px-3 py-2.5 transition-all duration-300 rounded-4xl cursor-pointer">
              <Link href="#contact">CONTACT ME</Link> 
            </li>
          </ul>
        </div>

        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden py-2`}>
          <ul className="flex flex-col space-y-2">
            <li className="font-mont font-bold text-lg text-white hover:text-black hover:bg-white px-3 py-2.5 transition-all duration-300 rounded-4xl cursor-pointer">
              About me
            </li>
            <li className="font-mont font-bold text-lg text-white hover:text-black hover:bg-white px-3 py-2.5 transition-all duration-300 rounded-4xl cursor-pointer">
              Skills
            </li>
            <li className="font-mont font-bold text-lg text-white hover:text-black hover:bg-white px-3 py-2.5 transition-all duration-300 rounded-4xl cursor-pointer">
              Portfolio
            </li>
            <li className="font-mont font-bold text-lg text-white hover:text-black hover:bg-white px-3 py-2.5 transition-all duration-300 rounded-4xl cursor-pointer">
              CONTACT ME
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
