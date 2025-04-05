"use client"
import { SectionWrapper } from "@/Common";

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
    id: "Soft-Skills",
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

  // Enhanced prefetching with error handling
  useEffect(() => {
    const prefetchAll = async () => {
      try {
        await Promise.all(
          programs.map((program) =>
            router.prefetch(`/${program.id}/curriculum`)
          )
        );
      } catch (error) {
        console.error("Prefetching failed:", error);
      }
    };

    prefetchAll();
  }, [router]);

  const handleClick = async (id: string) => {
    setLoadingId(id);
    try {
      // Add a small delay to ensure loading state is visible
      await Promise.all([
        new Promise((resolve) => setTimeout(resolve, 150)), // Minimum loading time
        router.push(`/${id}/curriculum`, { scroll: false }),
      ]);
    } catch (error) {
      console.error("Navigation failed:", error);
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <SectionWrapper
      cs=""
      sectionTitleProps={{
        title: "Choose Your Path to ",
        blueColorTitle: "Success",
        description: "Explore programs built to transform your skills into career opportunities.",
        id: "section-id",
      }}
      showRequestCallbackButton={false}
    >
      <div className="grid grid-cols-1 mt-6 md:grid-cols-2 md:mt-12 lg:grid-cols-3 lg:mt-16 gap-5" id="programs">
        {programs.map((program, index) => {
          // Animation classes for entrance effects
          const animationClass = 
            index === 0 ? "animate-slide-in-left" :
            index === 1 ? "animate-slide-in-top" :
            "animate-slide-in-right";

          return (
            <div
              key={program.id}
              className={`p-5 rounded-[20px] border border-[#e4e7ec] bg-white flex flex-col ${animationClass}`}
            >
              {/* Optimized Image */}
              <div className="flex justify-center h-40">
                <Image
                  src={program.icon}
                  alt={program.title}
                  width={120}
                  height={120}
                  className="object-contain w-auto h-full"
                  priority={index < 2}
                  loading={index > 1 ? "lazy" : "eager"}
                />
              </div>

              <h3 className="mt-5 text-base lg:text-lg xl:text-2xl font-semibold text-[#0F1728]">
                {program.title}
              </h3>

              <div className="mt-2 flex items-center gap-2">
                <Image 
                  src="/clock.svg" 
                  alt="Duration" 
                  width={14} 
                  height={14} 
                  className="w-3.5 h-3.5"
                  priority
                />
                <span className="text-xs xl:text-sm text-[#98A1B2]">Duration:</span>
                <span className="text-sm xl:text-base text-[#475466] font-semibold">
                  {program.duration}
                </span>
              </div>

              <div className="flex items-center gap-2 mt-1">
                <Image 
                  src="/computer.svg" 
                  alt="Mode" 
                  width={14} 
                  height={14} 
                  className="w-3.5 h-3.5"
                  priority
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
                      alt="Feature" 
                      width={14} 
                      height={14} 
                      className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                      priority
                    />
                    <span className="text-xs md:text-xs lg:text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Optimized Button with Loading State */}
              <button
                className={`w-full py-[10px] px-4 shadow-sm text-[#175cd3] bg-[#eff8ff] rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 mt-2.5 flex items-center justify-center ${
                  loadingId === program.id ? "opacity-80 cursor-not-allowed" : ""
                }`}
                onClick={() => handleClick(program.id)}
                disabled={loadingId === program.id}
                aria-label={`View ${program.title} curriculum`}
              >
                {loadingId === program.id ? (
                  <>
                    <svg 
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-500" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24"
                    >
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