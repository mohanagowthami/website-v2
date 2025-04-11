'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { HeaderSection } from "@/Common/HeaderSection";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const tabs = [
    { name: "Home", id: "home" },
    { name: "Programs", id: "programs" },
    { name: "Why Us", id: "why-us" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQs", id: "faqs" },
  ];

  return (
    <div className="fixed w-full z-50 bg-white shadow-sm">
      <div className="container mx-auto px-3">
        {/* Large Desktop (lg and up) - Full navigation */}
        <div className="hidden lg:flex justify-between items-center py-2">
          <HeaderSection />
          <nav className="relative flex text-blue-800 p-3 rounded-lg">
            <div className="flex space-x-4">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  href={`/#${tab.id}`}
                  onClick={() => setSelectedTab(tab.id)}
                  className="relative px-4 py-2 text-sm font-medium whitespace-nowrap"
                >
                  {selectedTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-indigo-400 rounded-md"
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  )}
                  <span className="relative z-10">{tab.name}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Medium Screens (md to lg) - Compact navigation */}
        <div className="hidden md:flex lg:hidden justify-between items-center py-4">
          <HeaderSection />
          <nav className="relative flex text-blue-950 p-2 rounded-lg">
            <div className="flex space-x-1">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  href={`/#${tab.id}`}
                  onClick={() => setSelectedTab(tab.id)}
                  className="relative px-3 py-2 text-xs font-medium whitespace-nowrap"
                >
                  {selectedTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-indigo-400 rounded-md"
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  )}
                  <span className="relative z-10">
                    {tab.name.length > 8 ? tab.name.substring(0, 7) + "..." : tab.name}
                  </span>
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Small Screens (sm to md) - Hamburger menu */}
        <div className="flex md:hidden justify-between items-center py-2">
          <HeaderSection />
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
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
                  open: { d: "M6 18L18 6M6 6l12 12" },
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute w-full bg-white shadow-md z-40"
          >
            <div className="flex flex-col p-2">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  href={`/#${tab.id}`}
                  onClick={() => {
                    setSelectedTab(tab.id);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-3 text-left whitespace-nowrap ${
                    selectedTab === tab.id
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {tab.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
