"use client"
import { SectionTitle } from "@/Common/SectionTitle";
import Image from "next/image";

const programs = [
  {
    title: "Full Stack Development",
    icon: "/fullstackdevelopment.svg",
    duration: "5 Months",
    mode: "Online, Offline",
    features: [
      "Classes by industry experts.",
      "Face-to-face mock interviews and HR expert sessions.",
      "Get real-world industry-standard experience.",
      "Build realistic web applications.",
    ],
  },
  {
    title: "Cybersecurity",
    icon: "/cyber.svg",
    duration: "4 Months",
    mode: "Online, Offline",
    features: [
      "Live Classes by Industry Experts",
      "24x7 Doubt Support",
      "1:1 Mock Interviews and HR Expert Sessions",
      "Pay After Placement Available",
    ],
  },
  {
    title: "Soft Skills Development",
    icon: "/softskill.svg",
    duration: "2 Months",
    mode: "Online, Offline",
    features: [
      "Classes by industry experts.",
      "One-to-one mock interviews.",
      "Designed to improve your soft skills, which are mandatory in today's job market.",
      "N number of group discussions, storytelling classes, and group debates will be conducted.",
    ],
  },
];

const Programs: React.FC = () => {
  return (
<div className="w-full bg-[#fafdff] px-6 py-6 md:px-12 md:py-12 lg:px-15 lg:py-14 xl:px-24 xl:py-27">
          <SectionTitle
                mainTitle={true}
                title="Choose Your Path to"
                blueColorTitle="Success"
                description="Explore programs built to transform your skills into career opportunities"
                title1=""
              />

      {/* Programs Grid */}
      <div className="grid grid-cols-1 mt-6 md:grid-cols-2 md:mt-12 lg:grid-cols-3 lg:mt-16 gap-5">
        {programs.map((program, index) => {
          // Different animations for each card
          let animationClass = "";
          if (index === 0) {
            animationClass = "animate-slide-in-left";
          } else if (index === 1) {
            animationClass = "animate-slide-in-top";
          } else {
            animationClass = "animate-slide-in-right";
          }

          return (
            <div 
              key={index} 
              className={`p-5 rounded-[20px] border-[#e4e7ec] border-1 bg-[#fff] flex flex-col ${animationClass}`}
            >
              <div className="flex justify-center">
                <Image 
                  src={program.icon} 
                  alt={program.title} 
                  width={500} 
                  height={200} 
                  className="object-cover w-full" 
                />
              </div>
              <h3 className="mt-5 text-base lg:text-lg xl:text-2xl font-semibold text-[#0F1728]">
                {program.title}
              </h3>
              <div className="mt-2 flex items-center gap-2">
                <Image src="/clock.svg" alt="Clock" width={14} height={14} />
                <span className="text-xs xl:text-sm text-[#98A1B2]">Duration:</span>
                <span className="text-sm xl:text-base text-[#475466] font-semibold">
                  {program.duration}
                </span>
              </div>
              <p className="flex items-center gap-2">
                <Image src="/computer.svg" alt="Computer" width={14} height={14} />
                <span className="text-xs xl:text-sm text-[#98A1B2]">Mode:</span>
                <span className="text-sm xl:text-base text-[#475466] font-semibold">
                  {program.mode}
                </span>
              </p>
              <div className="mt-4 text-[#667084] space-y-2 flex-grow">
                {program.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Image src="/star.svg" alt="Star" width={14} height={14} />
                    <span className="text-xs md:text-xs lg:text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-[10px] px-4 shadow-sm text-[#175cd3] bg-[#eff8ff] rounded-lg hover:bg-blue-600 hover:text-white transition-colors mt-2.5">
                Curriculum
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;




// import { SectionTitle } from "@/Common/SectionTitle";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const programs = [
//   {
//     title: "Full Stack Development",
//     icon: "/fullstackdevelopment.svg",
//     duration: "5 Months",
//     mode: "Online, Offline",
//     features: [
//       "Classes by industry experts.",
//       "Face-to-face mock interviews and HR expert sessions.",
//       "Get real-world industry-standard experience.",
//       "Build realistic web applications.",
//     ],
//   },
//   {
//     title: "Cybersecurity",
//     icon: "/cyber.svg",
//     duration: "4 Months",
//     mode: "Online, Offline",
//     features: [
//       "Live Classes by Industry Experts",
//       "24x7 Doubt Support",
//       "1:1 Mock Interviews and HR Expert Sessions",
//       "Pay After Placement Available",
//     ],
//   },
//   {
//     title: "Soft Skills Development",
//     icon: "/softskill.svg",
//     duration: "2 Months",
//     mode: "Online, Offline",
//     features: [
//       "Classes by industry experts.",
//       "One-to-one mock interviews.",
//       "Designed to improve your soft skills, which are mandatory in today's job market.",
//       "N number of group discussions, storytelling classes, and group debates will be conducted.",
//     ],
//   },
// ];

// const Programs: React.FC = () => {
//   return (
//     <div className="w-full bg-[#fafdff] sm:px-6 sm:py-6 md:px-12 md:py-12 lg:px-15 lg:py-14 xl:px-24 xl:py-27">
//       <SectionTitle
//         mainTitle={true}
//         title="Choose Your Path to"
//         blueColorTitle="Success"
//         description="Explore programs built to transform your skills into career opportunities"
//       />

//       {/* Programs Grid */}
//       <div className="grid grid-cols-1 mt-6 md:grid-cols-2 md:mt-12 lg:grid-cols-3 lg:mt-16 gap-5">
//         {programs.map((program, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: -50 }}
//             animate={{ opacity: 1, x: 0, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//             className="p-5 rounded-[20px] border-[#e4e7ec] border-1 bg-[#fff] flex flex-col shadow-md"
//           >
//             <div className="flex justify-center">
//               <Image src={program.icon} alt={program.title} width={500} height={200} className="object-cover w-full" />
//             </div>
//             <h3 className="mt-5 text-base lg:text-lg xl:text-2xl font-semibold text-[#0F1728]">
//               {program.title}
//             </h3>
//             <div className="mt-2 flex items-center gap-2">
//               <Image src="/clock.svg" alt="Clock" width={14} height={14} />
//               <span className="text-xs xl:text-sm text-[#98A1B2]">Duration:</span>
//               <span className="text-sm xl:text-base text-[#475466] font-semibold">
//                 {program.duration}
//               </span>
//             </div>
//             <p className="flex items-center gap-2">
//               <Image src="/computer.svg" alt="Computer" width={14} height={14} />
//               <span className="text-xs xl:text-sm text-[#98A1B2]">Mode:</span>
//               <span className="text-sm xl:text-base text-[#475466] font-semibold">
//                 {program.mode}
//               </span>
//             </p>
//             <div className="mt-4 text-[#667084] space-y-2 flex-grow">
//               {program.features.map((feature, idx) => (
//                 <div key={idx} className="flex items-center gap-2">
//                   <Image src="/star.svg" alt="Star" width={14} height={14} />
//                   <span className="text-xs md:text-xs lg:text-sm">{feature}</span>
//                 </div>
//               ))}
//             </div>
//             <button className="w-full py-[10px] px-4 shadow-sm text-[#175cd3] bg-[#eff8ff] rounded-lg hover:bg-blue-600 hover:text-white transition-colors mt-2.5">
//               Curriculum
//             </button>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Programs;
