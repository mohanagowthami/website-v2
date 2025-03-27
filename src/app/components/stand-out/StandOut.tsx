import { Contentsection } from "./Content";
import { Heading } from "./Header";
import { Imagesection } from "./Image";

export const StandOut = () => {
  return (
    <div className="bg-[#f5faff] w-full px-6 py-6 md:px-12 md:py-12 lg:px-15 lg:py-14 xl:px-24 xl:py-27">
      <Heading />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Contentsection />
        </div>
        {/* Hidden on mobile, visible from md breakpoint */}
        <div className="hidden md:flex items-center justify-center">
          <Imagesection />
        </div>
      </div>
    </div>
  );
};