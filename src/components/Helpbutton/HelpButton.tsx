"use client";
import React from "react";
import { HelpCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const HelpButton = () => {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to the help page
    router.push("/help");
    
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
      aria-label="Help"
    >
      <HelpCircle size={35} />
    </button>
  );
};

export default HelpButton;