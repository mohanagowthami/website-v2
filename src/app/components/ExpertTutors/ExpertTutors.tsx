
import { RequestCallbackButton } from "@/Common";
import React from "react";

const tutors = [
  {
    name: "Gajula Mohana Gowthami",
    role: "Staff Engineer",
    company: "Nagarro",
    image: "https://framerusercontent.com/images/b6PqaRUjoYVyfpDkLpOOA8QBTwI.png", // Replace with actual image
  },
  {
    name: "Gajula Srinivas",
    role: "Business Analyst",
    company: "Amazon",
    image: "https://framerusercontent.com/images/6xqqLKcrbkyGMDZw0XiZbe8Gk.png",
  },
  {
    name: "Mahesh",
    role: "",
    company: "Deloitte",
    image:"https://framerusercontent.com/images/2oq8up7E2vNDCIxS8LsOKezWZw.png"
  },
  {
    name: "Kone Srikanth",
    role: "Manager",
    company: "State Street",
    image: "https://framerusercontent.com/images/JziXUfzkl6IbgPDdVwCL3czPWg.png"
  },
  {
    name: "Somaraju",
    role: "",
    company: "",
    image: "https://framerusercontent.com/images/7Bx2giihmFBa3Qzq3K3e9fXYYM.png",
  },
];

const ExpertTutors = () => {
  return (
    <div className="flex flex-col items-center justify-center p-30 bg-gray-50">
      <h2 className="text-2xl font-semibold text-gray-900 text-center">
        Meet Our Industry <span className="text-blue-600">Expert Tutors</span>
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Learn from professionals working at top tech companies.
      </p>

      {/* First Row - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tutors.slice(0, 5).map((tutor, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={tutor.image}
              alt={tutor.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <h3 className="mt-3 font-semibold text-gray-900">{tutor.name}</h3>
            {tutor.role && <p className="text-gray-600 text-sm">{tutor.role}</p>}
            {tutor.company && <p className="text-gray-500 text-sm">{tutor.company}</p>}
          </div>
        ))}
      </div>
<div className="text-[rgb(102,112,132)] leading-[30px] text-[15px]">and more...</div>
<div className="mt-6 flex justify-end w-full">
  <RequestCallbackButton position="right" />
</div>
    </div>
  
  );
};

export default ExpertTutors;