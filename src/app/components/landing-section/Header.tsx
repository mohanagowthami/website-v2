"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Home");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Navigation Links (Also used for Tabs)
  const tabs = [
    { name: "Home", href: "./#Home" },
    { name: "Programs", href: "./#program" },
    { name: "Why Us", href: "./#Why-Us" },
    { name: "Testimonials", href: "./#Testimonials" },
    { name: "FAQ’s", href: "./#Faq's" },
  ];

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center px-6 py-3 md:px-12 bg-white border-b border-gray-300 fixed top-0 left-0 w-full z-50">
      {/* Logo Section */}
      <div className="text-left">
        <h1 className="text-[#175CD3] text-4xl font-bold">HyperSonic</h1>
        <p className="text-gray-500 text-xs">Training and Consultancy Services</p>
      </div>

      {/* Desktop Navigation with Tab Select */}
      <nav className="hidden sm:flex gap-6">
        <div className="flex space-x-2 bg-gray-900 text-white p-2 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setSelectedTab(tab.name)}
              className={`relative px-4 py-2 text-sm font-medium ${
                selectedTab === tab.name ? "text-white" : "text-gray-400"
              }`}
            >
              {selectedTab === tab.name && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-pink-500 rounded-md"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
              <a href={tab.href} className="relative z-10">{tab.name}</a>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Button */}
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

      {/* Mobile Menu with Tabs */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="sm:hidden absolute top-full left-0 w-full bg-white border-t border-gray-300 p-4"
          >
            <div className="flex flex-col gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setSelectedTab(tab.name)}
                  className={`relative px-4 py-2 text-sm font-medium ${
                    selectedTab === tab.name ? "text-white" : "text-gray-400"
                  }`}
                >
                  {selectedTab === tab.name && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-pink-500 rounded-md"
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  )}
                  <a href={tab.href} className="relative z-10">{tab.name}</a>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
