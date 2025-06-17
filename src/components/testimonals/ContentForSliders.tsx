import React from "react";
import Image from "next/image";

// Define the props interface
interface SlideProps {
    text: string;
    name: string;
    logo: string;
}

export const ContentForSliders: React.FC<SlideProps> = ({ text, name, logo }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full p-10"id="testimonials">
                <p className="text-gray-700 text-center lg:text-[26px] max-w-6xl mb-6
              md:text-[22px] sm:text-[18px]">
                    {text}
                </p>

                <div className="flex items-center justify-center w-full mt-2 gap-8">
                    <div className="flex flex-col items-center w-1/4 text-2xl font-bold">
                        <p className="text-gray-800">{name}</p>
                    </div>
                    <div className="flex items-center justify-center h-24">
                        <div className="w-0.5 h-15 bg-gray-400"></div>
                    </div>
                    <div className="flex flex-col items-center w-1/4">
                        <Image
  src={logo}
  alt={`${name}'s Company Logo`}
  width={136}  // 34 * 4 (Tailwind uses rem units = 4px base)
  height={136}
  className="object-contain"
/>
                    </div>
                </div>
            </div>
        </>
    );
};