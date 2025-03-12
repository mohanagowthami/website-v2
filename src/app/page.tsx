
import AluminiCard from "@/Common/AluminiCard";
import {Footercomponent} from "./components/footer";
import { StandOut } from "./components/stand-out";
import { RequestCallbackButton } from "@/Common";
import { FAQs } from "./components/faqs";


export default function Home() {
  return (
    <div>
      <AluminiCard/>
      <RequestCallbackButton />
      <StandOut/>
      <FAQs/>
      <Footercomponent/>
    </div>
  );
}