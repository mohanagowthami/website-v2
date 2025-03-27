import { SectionTitle } from "@/Common/SectionTitle";
import { SectionWrapper } from "@/Common/SectionWrapper";
import React from "react";

const courses = [
  {
    title: "Full Stack Development",
    duration: "5 months",
    mode: "Online, Offline",
    features: [
      "Classes by industry experts.",
      "Face to face mock interviews and HR expert sessions.",
      "Get real-world industry standard experience.",
      "Build realistic web applications."
    ],
       image: "file1.webp"
  },
  
  {
    title: "Cyber Security",
    duration: "4 months",
    mode: "Online, Offline",
    features: [
      "Live Classes by Industry Experts.",
      "24X7 Doubt Support.",
      "1:1 Mock Interviews and HR Expert Sessions.",
      "Pay After Placement Available."
    ],
    image: "cyber.webp"
  },
  {
    title: "Soft Skills",
    duration: "2 months",
    mode: "Online, Offline",
    features: [
      "Classes by industry experts.",
      "One to one mock interviews.",
      "Designed to improve your soft skills, which is a mandatory skill in today's job market.",
      "N number of Group discussions, Storytelling classes, group debates will be conducted."
    ],
    image: "softskills.webp"
  }
];


const Programs: React.FC = () => {
  return (


  <SectionWrapper>
    <>
    <SectionTitle mainTitle={true} title="Choose Your Path to" blueColorTitle="Success" description="Explore programs built to transform your skills into career opportunities"/>
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="Program">
      {courses.map((course, index) => (
        <div key={index} className="border rounded-xl shadow-lg p-4 bg-white hover:shadow-xl transition duration-300">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover rounded-lg"
          />
         <div><h2 className="text-xl font-bold mt-4">{course.title}</h2>
          <p className="text-gray-600">📅 Duration: <span className="font-medium">{course.duration}</span></p>
          <p className="text-gray-600">image Mode: <span className="font-medium">{course.mode}</span></p>
          <ul className="mt-3 space-y-2">
            {course.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                ✅ <span>{feature}</span>
              </li>
            ))}
          </ul>
          </div>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Curriculum
          </button>
        </div>
      ))}
    </div>
    
    </>


    </SectionWrapper>

 


   
    
  );
};



export default Programs;
