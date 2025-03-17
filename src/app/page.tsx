
import AluminiCard from "@/Common/AluminiCard";
import {Footercomponent} from "./components/Footer";
import { StandOut } from "./components/stand-out";
import { RequestCallbackButton } from "@/Common";
import { LandingSection } from "./components/landing-section";


export default function Home() {
  return (
    <div>
      
    <LandingSection/>
      <AluminiCard/>
      <div className="flex self-right mt-1 justify-center ml-300">
        <RequestCallbackButton /></div>
      <StandOut/>
      <Footercomponent/>
    </div>
  );
}