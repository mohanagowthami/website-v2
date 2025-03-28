"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Home");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const tabs = [
    { name: "Home", id: "Home" },
    { name: "Programs", id: "program" },
    { name: "Why Us", id: "Why-Us" },
    { name: "Testimonials", id: "Testimonials" },
    { name: "FAQ’s", id: "Faq's" },
  ];

  const scrollToSection = (id: string) => {
    setSelectedTab(id);
    const target = document.getElementById(id);
    
    if (target) {
      let offset = 50; // Default offset for the header

      // Adjust offset based on section-specific needs
      switch (id) {
        case "Testimonials":
          offset = 70; // Adjusted if testimonials need extra space
          break;
        case "Faqs":
          offset = 60; // Adjusted for FAQs
          break;
        case "program":
          offset = 50;
          break;
        case "Why-Us":
          offset = 100; // Keep the default for other sections
          break;
        default:
          offset = 50;
      }

      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };


  return (
    <>
      <header className="flex flex-col sm:flex-row justify-between items-center px-6 py-3 md:px-12 bg-white border-b border-gray-300 fixed top-0 left-0 w-full z-50">
        {/* Logo Section */}
        <div className="text-left">
          <h1 className="text-[#175CD3] text-4xl font-bold">HyperSonic</h1>
          <p className="text-gray-500 text-xs">Training and Consultancy Services</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-6">
          <div className="flex space-x-2 bg-white text-white p-2 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => scrollToSection(tab.id)}
                className={`relative px-4 py-2 text-sm font-medium ${
                  selectedTab === tab.id ? "text-white" : "text-blue-900"
                }`}
              >
                {selectedTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-500 rounded-md"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                <span className="relative z-10">{tab.name}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="sm:hidden absolute right-4 top-3">
          <motion.button
            onClick={toggleMenu}
            className="text-blue-900 focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="sm:hidden absolute top-full right-0 w-40 h-auto bg-white border-t border-gray-300 p-4"
            >
              <div className="flex flex-col gap-0.5">
                {tabs.map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => {
                      scrollToSection(tab.id);
                      setIsMenuOpen(false);
                    }}
                    className={`relative inline-block max-w-max px-3 py-1 text-sm font-medium ${
                      selectedTab === tab.id ? "text-white" : "text-blue-900"
                    }`}
                  >
                    {selectedTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-blue-500 rounded-md"
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                    )}
                    <span className="relative z-10">{tab.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

     
    </>
  );
};
