import RequestCallbackButton from "./RequestCallBackButton"
import { SectionTitle } from "./SectionTitle";

interface SectionWrapperTypes {
    cs?: string; 
    
    children: any; 
    requestCBAlign?: "left" | "center" | "right";
    title?:string;
    blueColorTitle?:string;
    description?:string;
    title1?:string

}



export const SectionWrapper = ({ cs, children, requestCBAlign, title, blueColorTitle,description, title1 }: SectionWrapperTypes) => {

    return <div className={`p-6 md:p-12 lg:px-[56px] lg:py-[60px] ${cs ? cs : ""} `}>

        { (title && description) && <SectionTitle
            mainTitle={true}
            title={title || ""}
            blueColorTitle={blueColorTitle || ""}
            description={description || ""}
            title1={title1|| ""}
        />
}
        {
            children
        }
        <div className="flex flex-row-reverse">
            <RequestCallbackButton position={requestCBAlign} />


        </div>

    </div>
}