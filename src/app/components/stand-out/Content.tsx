"use client";


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

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.8,
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
   
   <div>
        <motion.div 
      className="flex flex-col md:flex-row gap-5 w-full"id="Why-Us"
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
                <img 
                  src={feature.icon} 
                  alt={`${feature.title} icon`} 
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