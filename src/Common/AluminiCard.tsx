import Image from "next/image";
import RequestCallbackButton from "./RequestCBButton";

const people = [
  {
    name: "Kishore Gundra",
    course: "ECE",
    college: "Ideal Engineering College",
    company: "/Amazon.png",
    image: "/Kishore_Gundra.jpg.webp"
  },
  {
    name: "Harish Kollu",
    course: "ECE",
    college: "Krishna University College",
    company: "/Amazon.png",
    image: "/Harish_Kollu.webp", 
  },
  {
    name: "Siva Durga Prasad",
    course: "CSE",
    college: "Aditya Engineering College",
    company: "/Amazon.png", 
    image: "/Siva_Durga_Prasad.webp",  
  },
];

const AluminiCard = () => {
  return (
    <div className="text-center py-10 bg-[#FBFCFC] w-full h-[100%]">
      <h2 className="  text-[26px] md:text-[30px]  lg:text-[36px] font-bold">
        Turn Your Dreams into Reality. <span className="text-blue-600">The Journey Starts Here!</span>
      </h2>
      <p className="text-gray-600 mt-2  text-[14px] md:text-[14px]  lg:text-[16px]">Get insider tips from your seniors and gear up for your dream job!</p>
      <div className="flex  justify-center p-12 mt-10 gap-4 md:gap-6 lg:gap-4">
        {people.map((person, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md w-72 text-center">
            <div className="flex flex-row gap-6">
              <div className="mt-5">
                <Image src={person.image} alt={person.name} width={50} height={50} className="mx-auto rounded-full" />
              </div>
              <div>
                <h3 className="mt-4 text-sm font-semibold">{person.name}</h3>
                <p className="text-gray-500">{person.course}</p>
                <p className="text-gray-500">{person.college}</p>
                <div className="mt-4 border-t pt-4"></div>
                <Image src={person.company} alt="Company" width={100} height={30} className="mx-auto mt-auto" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="">
      </div>
    </div>
  );
};

export default AluminiCard;
