
interface SectionTitleProps{
    title: string,
    blueColorTitle?:string
    description: string
    mainTitle?:boolean
     className?:string
     id:string
}
export const SectionTitle = ({ title, description, blueColorTitle, mainTitle, className = "", id = "" }: SectionTitleProps) => {
    return (
        <div className={`w-full flex flex-col items-center space-y-2 md:space-y-3 lg:space-y-4  ${mainTitle ? "text-center" : ""}`}>
            <h1 className={`custom-font-poppins font-bold text-gray-900 cursor-default text-start ${mainTitle ? "text-lg md:text-2xl xl:text-3xl text-center" : "text-2xl md:text-3xl xl:text-4xl text-center"}`}>
                {title}
                {blueColorTitle && <span className="text-blue-600">{` ${blueColorTitle}`}</span>}
            </h1>
            <p className={`custom-font-lato text-[#667084] ${mainTitle ? "text-sm md:text-base xl:text-lg text-center" : "text-sm md:text-base xl:text-lg text-center"}`}>
                {description}
            </p>
        </div>
    );
};
