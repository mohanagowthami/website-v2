"use client"
import { SectionTitle, SectionWrapper } from "@/Common";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const programs = [
  {
    title: "Full Stack Development",
    id: "Full-Stack",
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
    id: "Cybersecurity",
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
    title: "Soft Skills",
    id:"Soft-Skills",
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
  const router = useRouter();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  // Prefetch all curriculum pages when component mounts
  useEffect(() => {
    programs.forEach(program => {
      router.prefetch(`/${program.id}/curriculum`);
    });
  }, [router]);

  const handleClick = (id: string) => {
    setLoadingId(id);
    router.push(`/${id}/curriculum`);
  };

  return (
    <SectionWrapper
      cs=""
      sectionTitleProps={{
        title: "Choose Your Path to ",
        blueColorTitle: "Sucess",
        description: "Explore programs built to transform your skills into career opportunities.",
        id: "section-id",
      }}
      showRequestCallbackButton={false}
    >
      {/* Programs Grid */}
      <div className="grid grid-cols-1 mt-6 md:grid-cols-2 md:mt-12 lg:grid-cols-3 lg:mt-16 gap-5" id="programs">
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
              className={`p-5 rounded-[20px] border border-[#e4e7ec] bg-white flex flex-col ${animationClass}`}
            >
              <div className="flex justify-center">
                <Image
                  src={program.icon}
                  alt={program.title}
                  width={500}
                  height={500}
                  className="object-cover w-full"
                  priority={index < 3} // Prioritize first 3 images
                />
              </div>
              <h3 className="mt-5 text-base lg:text-lg xl:text-2xl font-semibold text-[#0F1728]">
                {program.title}
              </h3>
              <div className="mt-2 flex items-center gap-2">
                <Image 
                  src="/clock.svg" 
                  alt="Clock" 
                  width={14} 
                  height={14} 
                  className="w-3.5 h-3.5"
                />
                <span className="text-xs xl:text-sm text-[#98A1B2]">Duration:</span>
                <span className="text-sm xl:text-base text-[#475466] font-semibold">
                  {program.duration}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Image 
                  src="/computer.svg" 
                  alt="Computer" 
                  width={14} 
                  height={14} 
                  className="w-3.5 h-3.5"
                />
                <span className="text-xs xl:text-sm text-[#98A1B2]">Mode:</span>
                <span className="text-sm xl:text-base text-[#475466] font-semibold">
                  {program.mode}
                </span>
              </div>
              <div className="mt-4 text-[#667084] space-y-2 flex-grow">
                {program.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Image 
                      src="/star.svg" 
                      alt="Star" 
                      width={14} 
                      height={14} 
                      className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-xs md:text-xs lg:text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <button
                className={`w-full py-[10px] px-4 shadow-sm text-[#175cd3] bg-[#eff8ff] rounded-lg hover:bg-blue-600 hover:text-white transition-colors mt-2.5 flex items-center justify-center ${
                  loadingId === program.id ? "opacity-75" : ""
                }`}
                onClick={() => handleClick(program.id)}
                disabled={loadingId === program.id}
              >
                {loadingId === program.id ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading...
                  </>
                ) : (
                  "Curriculum"
                )}
              </button>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Programs;



 {/* <Link href={`/${program.id}/curriculum`}>
              <button className="w-full py-[10px] px-4 shadow-sm text-[#175cd3] bg-[#eff8ff] rounded-lg hover:bg-blue-600 hover:text-white transition-colors mt-2.5" >
                Curriculum
              </button>
              </Link> */}