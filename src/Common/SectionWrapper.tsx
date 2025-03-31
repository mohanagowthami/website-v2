// import RequestCallbackButton from "./RequestCallBackButton"



// export const SectionWrapper = ({ cs, children }: { cs?: string, children: any }) => {

//     return <div className={`p-6 md:p-12 lg:px-[56px] lg:py-[60px] ${cs? cs:""} `}>
//          <div  className="custom-font-roboto">
//             {children}
//             </div>
    
//         <div className="flex flex-row-reverse ">
//         <RequestCallbackButton/>
//      </div>

//     </div>
// }




import RequestCallbackButton from "./RequestCallbackButton"
import {SectionTitle} from "./SectionTitle"

interface SectionWrapperProps {
  cs?: string;
  children: React.ReactNode;
  sectionTitleProps?: {
    title: string;
    blueColorTitle?: string;
    description: string;
    mainTitle?: boolean;
    className?: string;
    id: string;
  };
}

export const SectionWrapper = ({
  cs,
  children,
  sectionTitleProps
}: SectionWrapperProps) => {
  return (
    <div className={`p-6 md:p-12 lg:px-[56px] lg:py-[60px] ${cs ? cs : ""}`}>
      {sectionTitleProps && (
        <SectionTitle {...sectionTitleProps} />
      )}
      <div className="custom-font-roboto">
        {children}
      </div>
      <div className="flex flex-row-reverse">
        <RequestCallbackButton />
      </div>
    </div>
  );
};
