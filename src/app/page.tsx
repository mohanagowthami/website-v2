import {Footercomponent} from "./components/footer";
import { StandOut } from "./components/stand-out";
import { LandingSection } from "./components/landing-section";



export default function Home() {
  return (
    <div>
      <LandingSection/>
    
      <StandOut/>
      <Footercomponent/>
    </div>
  ); 
}
