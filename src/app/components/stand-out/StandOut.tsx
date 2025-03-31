import { SectionWrapper } from "@/Common";
import { Contentsection } from "./Content";
import { Heading } from "./Header";
import { Imagesection } from "./Image";

export const StandOut = () => {
  return (
   <SectionWrapper
   
   sectionTitleProps={{
    title: "What Makes  ",
    blueColorTitle: "HyperSonicc",
    description: "A personalized learning experience that blends mentorship, flexibility, and job-ready skills.",
    id: "section-id",
    requestCBAlign: "left"
   }}    
  showRequestCallbackButton={true}
  cs="bg-[#FBFCFC]"
   >
      

      <Heading />
      <div className="grid grid-cols-1 md:grid-cols-2 "id="why-us">
        <div>
          <Contentsection />
        </div>
        {/* Hidden on mobile, visible from md breakpoint */}
        <div className="hidden md:flex items-center justify-center">
          <Imagesection />
        </div>
      </div>
     
    </SectionWrapper>
  );
};