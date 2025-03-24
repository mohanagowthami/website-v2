import RequestCallbackButton from "./RequestCBButton"


export const SectionWrapper = ({ cs, children }: { cs?: string, children: any }) => {

    return <div className={`p-6 md:p-12 lg:px-[56px] lg:py-[60px] ${cs? cs:""} `}>
        {
            children
        }
        <div className="flex flex-row-reverse">
        
     </div>

    </div>
}