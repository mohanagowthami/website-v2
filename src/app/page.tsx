
import { StandOut } from "../components/stand-out";
import { LandingSection } from "../components/landing-section";
import { FAQs } from "../components/faqs";

import { TestimonalsSwiper } from "../components/testimonals";

import Programs from "../components/courses/programs";
import { Footercomponent } from "../components/footer";
import { AluminiComponent } from "../components/placements";
import { ExpertTutors } from "../components/ExpertTutors";
import HelpButton from "../components/Helpbutton/HelpButton";

<<<<<<< HEAD
import { TestimonalsSwiper } from "./components/testimonals";

import Programs from "./components/courses/programs";
import { Footercomponent } from "./components/footer";
import { AluminiComponent } from "./components/placements";
import { ExpertTutors } from "./components/ExpertTutors";
=======
>>>>>>> 5e364b9d05af929c79f01a6b830210f7a3115a39





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
      <HelpButton />
    </>
  );
}
