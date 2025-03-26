import  AluminiCard  from "./AluminiCard";
import RequestCallbackButton from "./RequestCallBackButton";


import { SectionWrapper } from "./SectionWrapper";

export const AluminiComponent=()=>{
  return (
    // <div className="overflow-hidden">
      
    //   <div className="bg-[#FBFCFC] w-full  ">
    //   <AluminiCard />
    //   <div className="w-full  mt-4 ml-[70%] pb-10">
    //     <RequestCallbackButton />
    //   </div>
    // </div>

     
    // </div>

    <SectionWrapper cs="bg-[#FBFCFC]">
      <AluminiCard />
      <div className="" ></div>
      <RequestCallbackButton/>
    </SectionWrapper>
  );
}