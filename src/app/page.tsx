


import { StandOut } from "./components/stand-out";

import { LandingSection } from "./components/landing-section";
import { FAQs } from "./components/faqs";
import ExpertTutors from "./components/ExpertTutors/ExpertTutors";
import { TestimonalsSwiper } from "./components/testimonals";
import { AluminiComponent } from "@/Common";
import Programs from "./components/courses/programs";
import { Footercomponent } from "./components/footer";


export default function Home() {
  return (
    <>
      
      
    <LandingSection/>
      <AluminiComponent/>
      <Programs/>
      <StandOut/>
      <ExpertTutors/>
      <TestimonalsSwiper/>    
      <FAQs/>
      <Footercomponent/>
      
      </>
     
    
  ); 
}
