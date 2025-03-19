

import {Footercomponent} from "./components/footer";
import { StandOut } from "./components/stand-out";

import { LandingSection } from "./components/landing-section";
import { FAQs } from "./components/faqs";
import { Programs } from "./components/programs";
import { AluminiComponent } from "@/Common/AluminiComponent";


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