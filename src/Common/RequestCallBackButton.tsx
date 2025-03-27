"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const RequestCallbackButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}            // Slightly grow on hover
      whileTap={{ scale: 0.95 }}              // Shrink on tap
      initial={{ opacity: 0, y: 20 }}         // Start hidden and slightly down
      animate={{ opacity: 1, y: 0 }}          // Animate to visible and normal position
      transition={{ duration: 0.3 }}          // Animation speed
      className="px-6 py-2 bg-blue-600 text-white rounded-lg font-extrabold hover:bg-blue-700 transition flex items-center gap-2"
    >
      <Image src="phone-call-icon.svg" alt="phone icon" width="12" height="12"/>Request Call Back 
    </motion.button>
  );
};

export default RequestCallbackButton; 