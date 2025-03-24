
// export const ContentForSliders = () => {
//     return (
//         <div className="flex flex-col items-center justify-center w-full p-10">
//         <p className="text-gray-600 text-center text-[26px] max-w-6xl mb-10">
//           HyperSonic provided me with the perfect blend of theory and practice. I now feel confident tackling real-world challenges in tech.
//         </p>
//         <div className="flex items-center justify-center w-full mt-8 gap-8">
//           <div className="flex flex-col items-center w-1/3 text-xl font-bold">
//             <p className="text-gray-900">Shanmukh</p>
//           </div>
//           <div className="w-1/6 flex items-center justify-center">
//             <div className="w-10 h-10 border-l-2 border-gray-400"></div>
//           </div>
//           <div className="flex flex-col items-center w-1/3">
//             <img
//               src="https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png"
//               alt="Company Logo"
//               className="w-24 h-24 object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     )
// }



// import React from "react";

// const slides = [
//   {
//     text: "HyperSonic provided me with the perfect blend of theory and practice. I now feel confident tackling real-world challenges in tech.",
//     name: "Shanmukh",
//     logo: "https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png"
//   },
//   {
//     text: "The training program was well-structured and helped me enhance my technical skills significantly.",
//     name: "Riya",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
//   },
//   {
//     text: "The hands-on approach to learning made all the difference. I now feel job-ready!",
//     name: "Aditya",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Google_Logo.svg"
//   },
//   {
//     text: "An excellent course that bridges the gap between academia and industry expectations.",
//     name: "Neha",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/IBM_logo.svg"
//   }
// ];

// export const ContentForSliders = () => {
//   return (
//     <div className="flex flex-col items-center justify-center w-full p-10">
//       {slides.map((slide, index) => (
//         <div key={index} className="mb-16">
//           <p className="text-gray-600 text-center text-[26px] max-w-6xl mb-10">
//             {slide.text}
//           </p>
//           <div className="flex items-center justify-center w-full mt-8 gap-8">
//             <div className="flex flex-col items-center w-1/3 text-xl font-bold">
//               <p className="text-gray-900">{slide.name}</p>
//             </div>
//             <div className="w-1/6 flex items-center justify-center">
//               <div className="w-10 h-10 border-l-2 border-gray-400"></div>
//             </div>
//             <div className="flex flex-col items-center w-1/3">
//               <img
//                 src={slide.logo}
//                 alt="Company Logo"
//                 className="w-24 h-24 object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };


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
            <div className="flex flex-col items-center justify-center w-full p-10">
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