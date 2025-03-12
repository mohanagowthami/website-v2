import AluminiCard from "@/Common/AluminiCard";
import {Footercomponent} from "./components/footer";
import { StandOut } from "./components/stand-out";
import { RequestCallbackButton } from "@/Common";


export default function Home() {
  return (
    <div>
      <AluminiCard/>
      <div className="flex self-right mt-1 justify-center ml-300">
        <RequestCallbackButton /></div>
      <StandOut/>
      <Footercomponent/>
    </div>
  );
}