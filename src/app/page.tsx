

import {Footercomponent} from "./components/Footer";
import { StandOut } from "./components/stand-out";

import { LandingSection } from "./components/landing-section";
import { FAQs } from "./components/faqs";
import ExpertTutors from "./components/ExpertTutors/ExpertTutors";
import { TestimonalsSwiper } from "./components/testimonals";
import { AluminiComponent } from "@/Common";
import Programs from "./components/courses/programs";


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
