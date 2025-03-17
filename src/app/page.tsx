
import AluminiCard from "@/Common/AluminiCard";
import {Footercomponent} from "./components/footer";
import { StandOut } from "./components/stand-out";
import { RequestCallbackButton } from "@/Common";
import { LandingSection } from "./components/landing-section";
import { FAQs } from "./components/faqs";


export default function Home() {
  return (
    <div>
      
    <LandingSection/>
      <AluminiCard/>
      <RequestCallbackButton />
      <StandOut/>
      <FAQs/>
      <Footercomponent/>
    </div>
  );
}