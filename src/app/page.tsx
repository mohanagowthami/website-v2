

import {Footercomponent} from "./components/footer";
import { StandOut } from "./components/stand-out";

import { LandingSection } from "./components/landing-section";
import { FAQs } from "./components/faqs";
import { AluminiComponent } from "@/Common";
import ExpertTutors from "./components/ExpertTutors/ExpertTutors";
import Programs from "./components/courses/programs";
import { TestimonalsSwiper } from "./components/testimonals";


export default function Home() {
  return (
    <div>
      
      
    <LandingSection/>
      
      <AluminiComponent/>
      <Programs/>
      <StandOut/>
      <ExpertTutors/>
      <TestimonalsSwiper/>
    
      <FAQs/>
      <Footercomponent/>
     
    </div>
  );
}