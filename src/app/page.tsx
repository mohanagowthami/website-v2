
import AluminiCard from "@/Common/AluminiCard";
import {Footercomponent} from "./components/footer";
import { StandOut } from "./components/stand-out";
import { LandingSection } from "./components/landing-section";
import { FAQs } from "./components/faqs";
import { Programs } from "./components/programs";


export default function Home() {
  return (
    <div>
      <LandingSection/>
      <AluminiCard/>
      <Programs/>
      <StandOut/>
      <FAQs/>
      <Footercomponent/>
      
    </div>
  );
}