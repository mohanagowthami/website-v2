import { motion } from "framer-motion";
import { HeaderSection } from "@/Common/HeaderSection";
import CoursePage from "./Enrolbutton";


export const CurriculumHeader = () => {
  return (
    <div className="fixed top-0 z-50 bg-white shadow-md border-gray-200 w-full"> {/* Added shadow and sticky positioning */}
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <HeaderSection />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
          >
            <CoursePage/>
          </motion.button>
         
         
        </div>
       
      </div>
    </div>
  );
};