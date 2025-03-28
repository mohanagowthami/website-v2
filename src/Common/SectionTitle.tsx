interface SectionTitleType {
    title: string,
    blueColorTitle?:string
    title1?:string
    description: string
    mainTitle?:boolean
     className?:string
}

export const SectionTitle = ({ title, description,blueColorTitle,title1,mainTitle,className=""}: SectionTitleType) => {
    return <div className={`${mainTitle? "space-y-2 md:space-y-3 lg:space-y-4 text-center":""}`}>
        <h1 className={` font-bold text-gray-900 cursor-default ${mainTitle? "text-lg md:text-2xl  xl:text-3xl":"text-3xl md:text-4xl xl:text-5xl"}`}>
            {title}
            {  blueColorTitle &&  <span className="text-blue-600">{` ${blueColorTitle}`}</span>}
            {title1 && <span>{`${title1}`}</span>}
        </h1>

        <p className={` text-[#667084] ${mainTitle? "text-sm md:text-base xl:text-lg":"text-sm md:text-base xl:text-lg"}`}>
            {description}
        </p>
    </div>
}