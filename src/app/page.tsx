import FAQs from "./components/faqs/Faqs";
import { Footercomponent } from "./components/footer";
import { StandOut } from "./components/stand-out";




export default function Home() {
  return (
    <div>
      <StandOut/>
      <FAQs/>
      <Footercomponent/>
    </div>
  ); 
}
