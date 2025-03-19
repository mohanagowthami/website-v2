

import {Footercomponent} from "./components/Footer";
import { StandOut } from "./components/stand-out";
import { AluminiComponent } from "@/Common/AluminiComponent";

import Programs from "./components/programs";
import { LandingSection } from "./components/landing-section";
import { FAQs } from "./components/faqs";


export default function Home() {
  return (
    <div>
      
      
    <LandingSection/>
      
      <AluminiComponent/>
      <Programs/>
      <StandOut/>
      <FAQs/>
      <Footercomponent/>
      
    </div>
  );
}