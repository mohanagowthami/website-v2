"use client"
import { motion } from "framer-motion";
import Image from "next/image";

interface RequestCallbackButtonProp {
  position?: "left" | "center" | "right"; // optional prop
}

const RequestCallbackButton = ({ position = "left" }: RequestCallbackButtonProp) => {
  // Determine alignment class based on prop
  const alignmentClass =
    position === "center" ? "justify-center" :
    position === "right" ? "justify-end" :
    "justify-start";

  return (
    <div className={`flex ${alignmentClass}`}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg font-extrabold hover:bg-blue-700 transition flex items-center gap-2"
      >
        <Image src="phone-call-icon.svg" alt="phone icon" width={12} height={12} />
        Request Call Back
      </motion.button>
    </div>
  );
};

export default RequestCallbackButton;
