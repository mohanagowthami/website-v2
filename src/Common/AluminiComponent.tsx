import  AluminiCard  from "./AluminiCard";
import  RequestCallbackButton  from "./RequestCBButton";

export const AluminiComponent=()=>{
  return (
    <div className="overflow-hidden">
      
      <div className="bg-[#FBFCFC] w-full  ">
      <AluminiCard />
      <div className="w-full  mt-4 ml-[70%] pb-10">
        <RequestCallbackButton />
      </div>
    </div>

     
    </div>
  );
}