"use client"
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center sm:px-16 px-4 py-3 bg-white border-b border-gray-300 fixed top-0 left-0 w-full z-50">
      {/* Logo Section */}
      <div className="text-center sm:text-left mb-4 sm:mb-0">
        <h1 className="text-[#175CD3] text-[34px] font-bold">HyperSonic</h1>
        <p className="text-gray-500 text-[12px]">Training and Consultancy Services</p>
      </div>

      {/* Navigation for Desktop and Tablet */}
      <nav className="hidden sm:flex gap-6">
        <a href="./#hero" className="text-blue-400 text-[16px] font-semibold hover:underline">Home</a>
        <a href="./#programs" className="text-blue-400 text-[16px] font-semibold hover:underline">Programs</a>
        <a href="./#why-hypersonicc" className="text-blue-400 text-[16px] font-semibold hover:underline">Why Us</a>
        <a href="./#testimonials" className="text-blue-400 text-[16px] font-semibold hover:underline">Testimonials</a>
        <a href="./#faqs" className="text-blue-400 text-[16px] font-semibold hover:underline">FAQ’s</a>
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
        <div className="sm:hidden w-full mt-4 bg-white border-t border-gray-300">
          <nav className="flex flex-col gap-3 p-4">
            <a href="./#hero" className="text-blue-400 text-[16px] font-semibold hover:underline">Home</a>
            <a href="./#programs" className="text-blue-400 text-[16px] font-semibold hover:underline">Programs</a>
            <a href="./#why-hypersonicc" className="text-blue-400 text-[16px] font-semibold hover:underline">Why Us</a>
            <a href="./#testimonials" className="text-blue-400 text-[16px] font-semibold hover:underline">Testimonials</a>
            <a href="./#faqs" className="text-blue-400 text-[16px] font-semibold hover:underline">FAQ’s</a>
          </nav>
        </div>
      )}
    </header>
  );
};