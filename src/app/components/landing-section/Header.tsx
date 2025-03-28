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
    { name: "Home", id: "home" },
    { name: "Programs", id: "programs" },
    { name: "Why Us", id: "why-us" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ's", id: "faqs" },
  ];

  const scrollToSection = (id: string) => {
    setSelectedTab(id);
    const target = document.getElementById(id);
    
    if (target) {
      let offset = 50; // Default offset for the header

      // Adjust offset based on section-specific needs
      switch (id) {
        case "testimonials":
          offset = 70;
          break;
        case "faqs":
          offset = 60;
          break;
        case "programs":
          offset = 50;
          break;
        case "why-us":
          offset = 100;
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
    <header className="flex items-center justify-between px-4 py-3 sm:px-6 md:px-8 lg:px-12 bg-white border-b border-gray-300 fixed top-0 left-0 w-full z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img 
          src="/logo-wbg.svg" 
          alt="HyperSonic Logo" 
          className="h-8 sm:h-9 md:h-10 w-auto" 
        />
        <div className="text-left">
          <h1 className="text-[#175CD3] text-xl sm:text-2xl md:text-[28px] lg:text-[30px] font-bold leading-tight">
            HyperSonic
          </h1>
          <p className="text-gray-500 text-[10px] sm:text-xs">
            Training and Consultancy Services
          </p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex">
        <div className="flex gap-1 sm:gap-2 md:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`relative px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm ${
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
              <span className="relative z-10 whitespace-nowrap">{tab.name}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="sm:hidden text-blue-900 focus:outline-none"
        aria-label="Toggle menu"
      >
        <motion.svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          animate={isMenuOpen ? "open" : "closed"}
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            variants={{
              closed: { d: "M4 6h16M4 12h16M4 18h16" },
              open: { d: "M6 18L18 6M6 6l12 12" }
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.svg>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-md border-t border-gray-200"
          >
            <div className="flex flex-col p-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    scrollToSection(tab.id);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-3 text-sm font-medium text-left ${
                    selectedTab === tab.id 
                      ? "bg-blue-100 text-blue-700" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};