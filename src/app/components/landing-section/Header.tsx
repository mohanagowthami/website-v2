"use client";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation Links Data
  const navLinks = [
    { name: "Home", href: "./#Home" },
    { name: "Programs", href: "./#program" },
    { name: "Why Us", href: "./#Why-Us" },
    { name: "Testimonials", href: "./#Testimonials" },
    { name: "FAQ’s", href: "./#Faq's" },
  ];

  return (
    <header className="flex sm:flex-row justify-between items-center px-6 sm:px-6 py-3 md:px-12 lg:px-12 xl:px-27 bg-white border-b border-gray-300 fixed top-0 left-0 w-full z-50">
      {/* Logo Section */}
      <div className="text-left">
        <h1 className="text-[#175CD3] text-4xl font-bold">HyperSonic</h1>
        <p className="text-gray-500 text-xs">Training and Consultancy Services</p>
      </div>

      {/* Navigation for Desktop and Tablet */}
      <nav className="hidden sm:flex gap-6 flex-nowrap whitespace-nowrap">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-[#53B0FD] sm:text-[12px] md:text-[14px] lg:text-[16px] font-semibold hover:text-blue-900"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Menu Button for Mobile */}
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="text-blue-400 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-white border-t border-gray-300">
          <nav className="flex flex-col gap-3 p-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-[#53B0FD] text-[14px] font-semibold hover:underline"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};