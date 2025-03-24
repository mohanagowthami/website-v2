



import { Footercomponent } from "./components/Footer";
import { StandOut } from "./components/stand-out";
import { AluminiComponent } from "@/Common/AluminiComponent";

import Programs from "./components/programs";
import { LandingSection } from "./components/landing-section";
import { FAQs } from "./components/faqs";
import ExpertTutors from "./components/ExpertTutors/ExpertTutors";
import { TestimonalsSwiper } from "./components/testimonals";


export default function Home() {
  return (
    <>
      
      
    <LandingSection/>
    <TestimonalsSwiper/>
      
      <AluminiComponent/>
      <Programs/>
      <StandOut/>
      <ExpertTutors/>
    
      <FAQs/>
      <Footercomponent/>
      <ExpertTutors/>
      </>
     
    
  ); 
}
