

import { Footercomponent } from "./components/footer";
import { StandOut } from "./components/stand-out";
import { AluminiComponent } from "@/Common/AluminiComponent";

import Programs from "./components/programs";
import { LandingSection } from "./components/landing-section";
import { FAQs } from "./components/faqs";
import ExpertTutors from "./components/ExpertTutors/ExpertTutors";


export default function Home() {
  return (
    <div>
      
      
    <LandingSection/>
      
      <AluminiComponent/>
      <Programs/>
      <StandOut/>
      <FAQs/>
      <Footercomponent/>
      <ExpertTutors/>
      <div className="flex justify-end p-4"><RequestCallbackButton /></div>
    </div>
  );
}