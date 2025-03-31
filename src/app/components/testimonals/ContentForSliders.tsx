import React from "react";

// Define the props interface
interface SlideProps {
    text: string;
    name: string;
    logo: string;
}

export const ContentForSliders: React.FC<SlideProps> = ({ text, name, logo }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full p-10"id="Testimonials">
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
                        <img src={logo} alt={`${name}'s Company Logo`} className="w-34 h-34 object-contain" />
                    </div>
                </div>
            </div>
        </>
    );
};