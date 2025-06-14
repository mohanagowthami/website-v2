import {  SectionWrapper} from "@/Common";
import { AlumniCard } from "./AlumniCard";



export const AluminiComponent=()=>{
  return (
    <SectionWrapper
     
    sectionTitleProps={{
      title: "Turn Your Dreams into Reality.  ",
      blueColorTitle: "The Journey Starts Here!",
      description: "Get insider tips from your seniors and gear up for your dream job!",
      id: "section-id",
       requestCBAlign: "right"
    }}    
    showRequestCallbackButton={true}
     cs=" bg-[#fbfcfc]"
    >
      <AlumniCard/>
      
    </SectionWrapper>
  );
}