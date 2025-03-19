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
          <div key={index} className="bg-[#FBFCFC] p-6 rounded-3xl border-1 border-gray-300  text-left ">
            <div className="flex flex-row  gap-x-6  p-10 ">
              <div className="-mt-3">
                <Image src={person.image} alt={person.name} width={70} height={70} className="mx-auto rounded-full max-w-[60px] max-h-[60px] sm:max-w-[50px] sm:max-h-[50px] md:max-w-[80px] md:max-h-[80px]" />
              </div>
              <div >
                <h3 className="-mt-6 mb-0 text-[18px]  font-semibold ">{person.name}</h3>
                <p className="text-gray-500 text-[14px] ">{person.course}</p>
                <p className="text-gray-500 text-[14px] ">{person.college}</p>
                <div className="">
                  <Image src="down-arrow.svg" alt="Company" width={60} height={30} className="mx-auto mt-[10%] mr-20" />
                </div>
                <Image src={person.company} alt="Company" width={90} height={20} className="mx-auto mt-[10%] mr-15" />
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