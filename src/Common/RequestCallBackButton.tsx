"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const RequestCallbackButton = () => {
  const handleScroll = () => {
    const targetSection = document.getElementById("callback-form");
    if (targetSection) {
      const offset = 350; // Adjust for fixed headers if needed
      const yOffset = targetSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="px-6 py-2 bg-blue-600 text-white rounded-lg font-extrabold hover:bg-blue-700 transition flex items-center gap-2"
      onClick={handleScroll}  // Attach the scroll function here
    >
      <Image src="/phone-call-icon.svg" alt="phone icon" width={12} height={12} />
      Request Call Back
    </motion.button>
  );
};

export default RequestCallbackButton;

