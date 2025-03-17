import Image from "next/image";


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
    college: "Krishna University College of Engineering",
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
    <div className="text-center py-10 bg-[#FBFCFC]">
      <h2 className="  text-[26px] md:text-[30px]  lg:text-[36px] font-bold">
        Turn Your Dreams into Reality. <span className="text-blue-600">The Journey Starts Here!</span>
      </h2>
      <p className="text-gray-600 mt-2  text-[14px] md:text-[14px]  lg:text-[16px]">Get insider tips from your seniors and gear up for your dream job!</p>
      <div className="flex  justify-center gap-8 mt-10">
        {people.map((person, index) => (
          <div key={index} className="bg-[#FBFCFC] p-6 rounded-3xl border-1 border-gray-300 CC text-center mx-auto ">
            <div className="flex flex-row gap-6">
              <div className="mt-5">
                <Image src={person.image} alt={person.name} width={80} height={70} className="mx-auto rounded-full" />
              </div>
              <div>
                <h3 className="mt-4 text-sm font-semibold">{person.name}</h3>
                <p className="text-gray-500">{person.course}</p>
                <p className="text-gray-500">{person.college}</p>
                <div className=""></div>
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