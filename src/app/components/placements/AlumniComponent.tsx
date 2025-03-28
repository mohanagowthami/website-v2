import { RequestCallbackButton, SectionWrapper} from "@/Common";
import { AlumniCard } from "./AlumniCard";



export const AluminiComponent=()=>{
  return (
    <SectionWrapper cs="bg-[#FBFCFC]">
      <AlumniCard/>
      <RequestCallbackButton position="right"/>
    </SectionWrapper>
  );
}