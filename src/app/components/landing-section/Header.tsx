"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Home");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { name: "Home", href: "./#Home" },
    { name: "Programs", href: "./#program" },
    { name: "Why Us", href: "./#Why-Us" },
    { name: "Testimonials", href: "./#Testimonials" },
    { name: "FAQ’s", href: "./#Faq's" },
  ];

  const tabs = ["Home", "React", "Vue", "Svelte"];

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center px-6 py-3 md:px-12 bg-white border-b border-gray-300 fixed top-0 left-0 w-full z-50">
      {/* Logo Section */}
      <div className="text-left">
        <h1 className="text-[#175CD3] text-4xl font-bold">HyperSonic</h1>
        <p className="text-gray-500 text-xs">Training and Consultancy Services</p>
      </div>

      {/* Navigation for Desktop */}
      <nav className="hidden sm:flex gap-6">
        {navLinks.map((link, index) => (
          <a key={index} href={link.href} className="text-[#53B0FD] text-[14px] font-semibold hover:text-blue-900">
            {link.name}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button (Animated with Framer Motion) */}
      <div className="sm:hidden">
        <motion.button
          onClick={toggleMenu}
          className="text-blue-400 focus:outline-none"
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3 }}
            />
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="sm:hidden absolute top-full left-0 w-full bg-white border-t border-gray-300"
          >
            <nav className="flex flex-col gap-3 p-4">
              {navLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-[#53B0FD] text-[14px] font-semibold hover:underline">
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tab Select Component */}
      <div className="flex justify-center mt-3 sm:mt-0">
        <div className="flex space-x-2 bg-gray-900 text-white p-2 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`relative px-4 py-2 text-sm font-medium ${
                selectedTab === tab ? "text-white" : "text-gray-400"
              }`}
            >
              {selectedTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-pink-500 rounded-md"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
