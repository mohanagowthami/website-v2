'use client'
import { SectionTitle } from "@/Common";
import Image from "next/image";

const people = [
  {
    name: "Kishore Gundra",
    course: "ECE",
    college: "Ideal Engineering College",
    company: "/amazon.png",
    image: "/Kishore_Gundra.jpg.webp",
  },
  {
    name: "Harish Kollu",
    course: "ECE",
    college: "Krishna University College",
    company: "/amazon.png",
    image: "/Harish_Kollu.webp",
  },
  {
    name: "Siva Durga Prasad",
    course: "CSE",
    college: "Aditya Engineering College",
    company: "/amazon.png",
    image: "/Siva_Durga_Prasad.webp",
  },
];

export const AlumniCard = () => {
  return (
    <div className="text-center py-10 w-full ">
{/* Scrolling Section */}
      <div className="relative w-full overflow-hidden mt-8">
        <div className="flex gap-6 w-max animate-scroll">
          {people.concat(people).map((person, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl border border-gray-300 text-left min-w-[300px] sm:min-w-[350px] md:min-w-[380px] shadow-lg"
              style={{ backgroundColor: "transparent" }} // Fixes background issue
            >
              <div className="flex items-center gap-4">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={80}
                  height={80}
                  className="rounded-full w-[60px] h-[60px] md:w-[80px] md:h-[80px] mb-2"
                />
                <div>
                  <h3 className="text-[18px] font-semibold">{person.name}</h3>
                  <p className="text-gray-500 text-[14px]">{person.course}</p>
                  <p className="text-gray-500 text-[14px]">{person.college}</p>
                  <div className="mt-2">
<Image
  src="/down-arrow.svg"
  alt="arrow"
  width={36} // Equivalent to Tailwind w-9 (9 * 4px)
  height={40} // Equivalent to Tailwind h-10 (10 * 4px)
  className="mx-auto"
/>
                    <Image
                      src={person.company}
                      alt="Company"
                      width={90}
                      height={30}
                      className="mt-2 mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes for Smooth Infinite Scroll */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 16s linear infinite;
        }
      `}</style>
    </div>
  );
};
