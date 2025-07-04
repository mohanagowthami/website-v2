"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const features = [
  {
    title: "Learn From Industry Experts",
    icon: "LearnIcon.svg",
  },
  {
    title: "Quick Doubt Solving",
    icon: "QuickdoubtIcon.svg",
  },
  {
    title: "Hands-On Projects",
    icon: "HandOnprojectIcon.svg",
  },
  {
    title: "Live Learning Sessions",
    icon: "liveLearningIocn.svg",
  },
  {
    title: "Weekly Challenging Contests",
    icon: "WeeklyChallengingIcon.svg",
  },
];

export function Contentsection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  

  return (
   
   <div>
        <motion.div 
      className="flex flex-col md:flex-row gap-5 w-full"id="why-us"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div>
        <motion.ul className="text-[#475466] text-base space-y-3.5 lg:text-xl lg:space-y-4 xl:text-[22px] xl:space-y-[22px] font-medium font-sans-sarif">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="hover:text-blue-600 hover:translate-x-1 hover:font-bold transition-all duration-200"
              variants={itemVariants}
              custom={index}
            >
              <span className="flex items-center gap-2">
                <Image
  src={`/${feature.icon}`} // Ensure the image is in the /public directory
  alt={`${feature.title} icon`}
  width={48}  // 12 * 4px
  height={36} // 9 * 4px
  className="w-12 h-9"
/>
                {feature.title}
              </span>
            </motion.li>
          ))}
        </motion.ul>
        
        
      </div>
      
    </motion.div><br/>
    
    </div>
  );
}