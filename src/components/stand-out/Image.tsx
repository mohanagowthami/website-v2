"use client";

import { motion } from "framer-motion";

export function Imagesection() {
  return (
    <div className="w-[90%] h-auto">
      <motion.img
        src="bgpic.svg"
        alt="backgroundpicture"
        className="w-[85%] h-[75%]"
        initial={{ 
          opacity: 0,
          x: "100vw",  // Starts completely off-screen to the right
          y: "-50vh"   // Starts completely off-screen to the top
        }}
        animate={{
          opacity: 1,
          x: 0,    // Moves to normal horizontal position
          y: 0     // Stays at 0 vertically (no vertical movement in final position)
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 15,
          duration: 0.7
        }}
        whileHover={{
          scale: 1.05,
          transition: { 
            type: "spring", 
            stiffness: 300,
            damping: 10
          }
        }}
      />
    </div>
  );
}