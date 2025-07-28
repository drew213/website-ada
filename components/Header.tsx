"use client";

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";
import BackButton from "./BackButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const gradientStyle = {
    background:
      "linear-gradient(45deg, #1F1B14 0%, #3D2F1F 25%, #1A1611 50%, #2C1810 75%, #1F1B14 100%)",
  };

  return (
    <header
      style={gradientStyle}
      className="top-0 z-50 sticky bg-white dark:bg-black shadow-sm dark:border-[#D4AF37] dark:border-b"
    >
      <div className="flex justify-between items-center mx-auto px-4 py-4 container">
        {/* Logo */}

        <div className="flex items-center">
          <Link href="/" onClick={closeMenu}>
            <span className="font-semibold dark:text-[#D4AF37] text-xl">
              ADA INVENTIVE
            </span>
            <p className="text-sm italic">optimum aut nihil</p>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-2 mr-2">
            <li>
              <Link
                href="/"
                className="hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] px-4 py-2 rounded-md text-[#D4AF37] dark:text-white text-sm transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] px-4 py-2 rounded-md text-[#D4AF37] dark:text-white text-sm transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] px-4 py-2 rounded-md text-[#D4AF37] dark:text-white text-sm transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] px-4 py-2 rounded-md text-[#D4AF37] dark:text-white text-sm transition-colors"
              >
                Our env_
              </Link>
            </li>
            <BackButton children={undefined} />
          </ul>
          <ThemeSwitch />
        </nav>

        {/* Mobile Menu Controls */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeSwitch />
          <button
            onClick={toggleMenu}
            className="hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] p-2 rounded-md text-[#D4AF37] dark:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {/* Hamburger Icon */}
            <div className="flex flex-col justify-center items-center w-6 h-6">
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-black border-t dark:border-[#D4AF37] transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 max-h-64 visible"
            : "opacity-0 max-h-0 invisible"
        }`}
      >
        <nav className="mx-auto px-4 py-2 container">
          <ul className="flex flex-col space-y-1">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className="block hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] px-4 py-3 rounded-md text-[#D4AF37] dark:text-white text-sm transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                onClick={closeMenu}
                className="block hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] px-4 py-3 rounded-md text-[#D4AF37] dark:text-white text-sm transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] px-4 py-3 rounded-md text-[#D4AF37] dark:text-white text-sm transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                onClick={closeMenu}
                className="block hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] px-4 py-3 rounded-md text-[#D4AF37] dark:text-white text-sm transition-colors"
              >
                Our env_
              </Link>
            </li>
            <BackButton children={undefined} />
          </ul>
        </nav>
      </div>
    </header>
  );
}
