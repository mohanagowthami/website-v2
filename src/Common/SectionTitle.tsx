
interface SectionTitleProps{
    title: string,
    blueColorTitle?:string
    
    description: string
    mainTitle?:boolean
     className?:string
     id:string
}

export const SectionTitle = ({ title, description,blueColorTitle,mainTitle , className = "" ,id        }: SectionTitleProps) => {
    return <div className={`${mainTitle? "space-y-2 md:space-y-3 lg:space-y-4 text-center":""}`}>
        <h1 className={`custom-font-poppins font-bold text-gray-900 cursor-default ${mainTitle? "text-lg md:text-2xl  xl:text-3xl":"text-3xl md:text-4xl xl:text-5xl"}`}>
            {title}
            {  blueColorTitle &&  <span className="text-blue-600">{` ${blueColorTitle}`}</span>}
           
        </h1>

        <p className={`custom-font-lato text-[#667084] ${mainTitle? "text-sm md:text-base xl:text-lg":"text-sm md:text-base xl:text-lg"}`}>
            {description}
        </p>
    </div>
}