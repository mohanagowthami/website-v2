

import { StandOut } from "./components/stand-out";

import { LandingSection } from "./components/landing-section";
import { FAQs } from "./components/faqs";
import ExpertTutors from "./components/experttutors/ExpertTutors";
import { TestimonalsSwiper } from "./components/testimonals";

import Programs from "./components/courses/programs";
import { Footercomponent } from "./components/footer";
import { AluminiComponent } from "./components/placements";


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
