
// interface SectionTitleProps{
//     title: string,
//     blueColorTitle?:string
//     description: string
//     mainTitle?:boolean
//      className?:string
//      id:string
// }
// export const SectionTitle = ({ title, description, blueColorTitle, mainTitle, className = "", id = "" }: SectionTitleProps) => {
//     return (
//         <div className={`w-full flex flex-col items-center space-y-2 md:space-y-3 lg:space-y-4  ${mainTitle ? "text-center" : ""}`}>
//             <h1 className={`custom-font-poppins font-bold text-gray-900 cursor-default text-start ${mainTitle ? "text-lg md:text-2xl xl:text-3xl text-center" : "text-2xl md:text-3xl xl:text-4xl text-center"}`}>
//                 {title}
//                 {blueColorTitle && <span className="text-blue-600">{` ${blueColorTitle}`}</span>}
//             </h1>
//             <p className={`custom-font-lato text-[#667084] ${mainTitle ? "text-sm md:text-base xl:text-lg text-center" : "text-sm md:text-base xl:text-lg text-center"}`}>
//                 {description}
//             </p>
//         </div>
//     );
// };



interface SectionTitleProps {
    title: string;
    blueColorTitle?: string;
    description: string;
    mainTitle?: boolean;
    className?: string;
    id?: string;
    titleAlign?: "left" | "center" | "right"; // New
    // titleSize?: "default" | "large"; // New prop for size control
    // largeTitle?: boolean; // New prop for extra large titles

  }
  
  export const SectionTitle = ({
    title,
    description,
    blueColorTitle,
    mainTitle,
    className = "",
    id = "",
    titleAlign = "center"
  }: SectionTitleProps) => {
    const alignmentClass =
      titleAlign === "left"
        ? "items-start text-left"
        : titleAlign === "right"
        ? "items-end text-right"
        : "items-center text-center";
    //      // Size classes
    // const titleSizeClass = titleSize === "large" 
    // ? "text-[32px] md:text-[42px] lg:text-[48px]"
    // : mainTitle
    //     ? "text-lg md:text-2xl xl:text-3xl"
    //     : "text-2xl md:text-3xl xl:text-4xl";
    //  // Size classes
    //  const titleSizeClass = largeTitle 
    //  ? "text-[32px] leading-tight md:text-[42px] lg:text-[48px]" // Extra large size
    //  : mainTitle
    //      ? "text-lg md:text-2xl xl:text-3xl"
    //      : "text-2xl md:text-3xl xl:text-4xl";

  return (
      <div
        className={`w-full flex flex-col space-y-2 md:space-y-3 lg:space-y-4 ${alignmentClass} ${className}`}
        id={id}
      >
        <h1
          className={`custom-font-poppins font-bold text-gray-900 cursor-default ${
            mainTitle
              ? "text-lg md:text-2xl xl:text-3xl"
              : "text-2xl md:text-3xl xl:text-4xl"
          }`}
        >
          {title}
          {blueColorTitle && (
            <span className="text-blue-600">{` ${blueColorTitle}`}</span>
          )}
        </h1>
        <p className="custom-font-lato text-[#667084] text-sm md:text-base xl:text-lg">
          {description}
        </p>
      </div>
    );
  };
  