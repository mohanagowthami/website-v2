import RequestCallbackButton from "./RequestCallBackButton";
import { SectionTitle } from "./SectionTitle";

interface SectionWrapperProps {
  cs?: string;
  children: React.ReactNode;
  showRequestCallbackButton?: boolean;
  sectionTitleProps?: {
    title: string;
    blueColorTitle?: string;
    description: string;
    requestCBAlign?: "left" | "center" | "right"; // Added alignment option
    mainTitle?: boolean;
    className?: string;
    id: string;
    titleAlign?: "left" | "center" | "right"; // New
  };
}

export const SectionWrapper = ({
  cs,
  children,
  showRequestCallbackButton = true,
  sectionTitleProps
}: SectionWrapperProps) => {
  // Determine alignment class based on prop
  const alignmentClass =
    sectionTitleProps?.requestCBAlign === "center" ? "justify-center" :
    sectionTitleProps?.requestCBAlign === "right" ? "justify-end" :
    "justify-start";

  return (
    <div className={`p-6 md:p-12 lg:px-[100px] lg:py-[60px]  ${cs ? cs : ""}`}>
      {sectionTitleProps && (
        <SectionTitle {...sectionTitleProps} />
      )}
      <div className="custom-font-roboto">
        {children}
      </div>
      {showRequestCallbackButton && (
        <div className={`flex ${alignmentClass}`}>
          <RequestCallbackButton />
        </div>
      )}
    </div>
  );
};