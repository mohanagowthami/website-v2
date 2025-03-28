// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [selectedTab, setSelectedTab] = useState("Home");

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   // Navigation Links (Also used for Tabs)
//   const tabs = [
//     { name: "Home", href: "./#home" },
//     { name: "Programs", href: "./#programs" },
//     { name: "Why Us", href: "./#why us" },
//     { name: "Testimonials", href: "./#testimonials" },
//     { name: "FAQ’s", href: "./#faq's" },
//   ];

//   return (
//     <header className="flex flex-col sm:flex-row justify-between items-center px-6 py-3 md:px-12 bg-white border-b border-gray-300 fixed top-0 left-0 w-full z-50">
//       {/* Logo Section */}
//       <div className="text-left">
//         <h1 className="text-[#175CD3] text-4xl font-bold">HyperSonic</h1>
//         <p className="text-gray-500 text-[9.27528px]">CONSULTANCY SERVICES PRIVATE LIMITED</p>
//       </div>

//       {/* Desktop Navigation with Tab Select */}
//       <nav className="hidden sm:flex gap-6">
//         <div className="flex space-x-2 bg-white text-white p-2 rounded-lg">
//           {tabs.map((tab) => (
//             <button
//               key={tab.name}
//               onClick={() => setSelectedTab(tab.name)}
//               className={`relative px-4 py-2 text-sm font-medium ${
//                 selectedTab === tab.name ? "text-white" : "text-blue-900"
//               }`}
//             >
//               {selectedTab === tab.name && (
//                 <motion.div
//                   layoutId="activeTab"
//                   className="absolute inset-0 bg-blue-500 rounded-md"
//                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 />
//               )}
//               <a href={tab.href} className="relative z-10">{tab.name}</a>
//             </button>
//           ))}
//         </div>
//       </nav>

//       {/* Mobile Menu Button */}
//       <div className="sm:hidden absolute right-4 top-3">
//         <motion.button
//           onClick={toggleMenu}
//           className="text-blue-900 focus:outline-none"
//           whileTap={{ scale: 0.9 }}
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <motion.path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//               initial={{ pathLength: 0 }}
//               animate={{ pathLength: 1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </svg>
//         </motion.button>
//       </div>

//       {/* Mobile Menu with Tabs */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="sm:hidden absolute top-full right-0 w-40 h-auto bg-white border-t border-gray-300 p-4"
//           >
//             <div className="flex flex-col gap-0.5">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.name}
//                   onClick={() => setSelectedTab(tab.name)}
//                   className={`relative inline-block max-w-max px-3 py-1 text-sm font-medium ${
//                     selectedTab === tab.name ? "text-white" : "text-blue-900"
//                   }`}
//                 >
//                   {selectedTab === tab.name && (
//                     <motion.div
//                       layoutId="activeTab"
//                       className="absolute inset-0 bg-blue-500 rounded-md"
//                       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                     />
//                   )}
//                   <a href={tab.href} className="relative z-10">{tab.name}</a>
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };


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
    { name: "Home", href: "./#home" },
    { name: "Programs", href: "./#programs" },
    { name: "Why Us", href: "./#why-us" },
    { name: "Testimonials", href: "./#testimonials" },
    { name: "FAQ’s", href: "./#faq's" },
    // For testing vertical condition, you can add more
    // { name: "Contact", href: "./#contact" },
  ];

  return (
    <header className="flex flex-col sm:flex-row flex-wrap justify-between items-center px-6 py-3 md:px-12 bg-white border-b border-gray-300 fixed top-0 left-0 w-full z-50">
      {/* Logo Section */}
      <div className="text-left">
        <h1 className="text-[#175CD3] text-4xl font-bold">HyperSonic</h1>
        <p className="text-gray-500 text-[9.27528px]">CONSULTANCY SERVICES PRIVATE LIMITED</p>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex gap-4 flex-wrap">
        {tabs.length <= 5 ? (
          <div className="flex space-x-2 bg-white text-white p-2 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setSelectedTab(tab.name)}
                className={`relative px-4 py-2 text-sm font-medium ${
                  selectedTab === tab.name ? "text-white" : "text-blue-900"
                }`}
              >
                {selectedTab === tab.name && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-500 rounded-md"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                <a href={tab.href} className="relative z-10">{tab.name}</a>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col space-y-2 bg-white text-white p-2 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setSelectedTab(tab.name)}
                className={`relative px-4 py-2 text-sm font-medium ${
                  selectedTab === tab.name ? "text-white" : "text-blue-900"
                }`}
              >
                {selectedTab === tab.name && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-500 rounded-md"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                <a href={tab.href} className="relative z-10">{tab.name}</a>
              </button>
            ))}
          </div>
        )}
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
              strokeWidth="2"
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
            className="sm:hidden absolute top-full right-0 w-full bg-white border-t border-gray-300 p-4"
          >
            <div
              className={`flex ${
                tabs.length <= 5
                  ? "flex-row space-x-2 overflow-x-auto flex-nowrap"
                  : "flex-col gap-0.5"
              }`}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setSelectedTab(tab.name)}
                  className={`relative inline-block max-w-max px-3 py-1 text-sm font-medium whitespace-nowrap ${
                    selectedTab === tab.name ? "text-white" : "text-blue-900"
                  }`}
                >
                  {selectedTab === tab.name && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-blue-500 rounded-md"
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  )}
                  <a href={tab.href} className="relative z-10">
                    {tab.name}
                  </a>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

