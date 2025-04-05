
import { StandOut } from "../components/stand-out";
import { LandingSection } from "../components/landing-section";
import { FAQs } from "../components/faqs";

import { TestimonalsSwiper } from "../components/testimonals";

import Programs from "../components/courses/programs";
import { Footercomponent } from "../components/footer";
import { AluminiComponent } from "../components/placements";
import { ExpertTutors } from "../components/ExpertTutors";
import HelpButton from "../components/Helpbutton/HelpButton";


import EnrollPage from "./EnrollNow";

<<<<<<< Updated upstream
=======
import { LandingSection } from "./components/landing-section";
import { FAQs } from "./components/faqs";

import { TestimonalsSwiper } from "./components/testimonals";

import Programs from "./components/courses/programs";
import { Footercomponent } from "./components/Footer";
import { AluminiComponent } from "./components/placements";
import { ExpertTutors } from "./components/ExpertTutors";
import EnrollPage from "./EnrollNow";

>>>>>>> Stashed changes





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
      <EnrollPage/>
      </>
  ); 
      <HelpButton />
    </>
  );
}
