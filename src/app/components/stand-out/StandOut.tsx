import { Contentsection } from "./Content";
import { Heading } from "./Header";
import { Imagesection } from "./Image";




export const StandOut=()=>{
  return (
    <div>
      <Heading/>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center bg-[#f5faff] ">
      <Contentsection/>
      <Imagesection/>

      </div>
     
    </div>
  );
}