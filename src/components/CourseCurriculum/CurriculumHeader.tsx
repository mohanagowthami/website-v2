// "use client"

// import { motion } from "framer-motion";
// import { HeaderSection } from "@/Common/HeaderSection";
// import { useRouter } from "next/navigation"; 

// export const CurriculumHeader = () => {
//   const router = useRouter();

//   const handleEnrollClick = () => {
//     // Navigate to home page then scroll to #enroll section
//     router.push("/#enroll-form");
//   };

//   return (
//     <div className="fixed top-0 z-50 bg-white shadow-md border-gray-200 w-full">
//       <div className="container mx-auto">
//         <div className="flex justify-between items-center">
//           <HeaderSection />
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
//             onClick={handleEnrollClick}
//           >
//             EnrollNow
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CurriculumHeader;


"use client"

import { motion } from "framer-motion";
import { HeaderSection } from "@/Common/HeaderSection";
import CoursePage from "../Enrollbutton/EnrollNowButton";
import { useRouter } from "next/navigation";
import React from "react";

export const CurriculumHeader = () => {
  const router = useRouter();

  const handleEnrollClick = () => {
    // Navigate to home page
    router.push("/");
    
    // After navigation, scroll to the section
    setTimeout(() => {
      const element = document.getElementById("enroll-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Small delay to ensure page has loaded
  };

  return (
    <div className="fixed top-0 z-50 bg-white shadow-md border-gray-200 w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <HeaderSection />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
            onClick={handleEnrollClick}
          >
            <CoursePage/>
          </motion.button>
         
         
        </div>
       
      </div>
    </div>
  );
};
export default CurriculumHeader;