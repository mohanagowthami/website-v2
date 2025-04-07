"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/Common";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const faqs = [
  {
        question: "Am I eligible for this course if I am from a non-technical background?",
        answer: "Yes! All college students, graduates, and working professionals who are willing to put in the effort to break into the field of coding or data science & AI or cyber security, regardless of their degree, graduation percentage, or branch, are eligible for our courses."
      },
      {
        question: "I am a college student but not in my final year. Can I still join the course?",
        answer: "Yes, you can join our courses even if you are not in your final year of college. Our courses are designed for working professionals as well as students. You get lifetime access to course content, so you can learn at your own pace along with college academics. Nearing completion, you can use our placement services to find opportunities and secure a job. Many students join us in the second or third year to get an early start."
      },
      {
        question: "Are there any Scholarships?",
        answer: "Yes. We have Scholarships up to 15% in store for motivated students who participate in Free bootcamps to learn essential skills, solve assignments, and engage with our career counselors."
      },
      {
        question: "What scholarships are available on tuition fees?",
        answer: "Motivated students can win substantial scholarships on tuition fees by showing zeal to learn by attending bootcamps, solving assignments, and engaging actively."
      },
      {
        question: "Will I get an internship in the courses?",
        answer: "Yes, you will get an internship in the Full Stack Development Courses. If you are a working professional, you can go for Capstone projects to build your portfolio for better placement opportunities."
      },
      {
        question: "What could be the ideal course for a College Student to start with zero knowledge of Tech/coding?",
        answer: "All our courses have beginner-friendly starting modules designed to provide a solid foundation in coding and cybersecurity for students with zero knowledge."
      },
      {
        question: "What if I miss a live session?",
        answer: "Recordings of all Live Lectures would be available on your portal as soon as the live lecture ends, which you can watch in case you missed the live lectures."
      },
      {
        question: "How will my doubts be addressed in online courses?",
        answer: "We provide a Live Doubt Solving feature where a pool of mentorsis readily available to address student's questions and concerns which is available during the whole day so that you do not face any roadblocks in your learning journey. Whether through chat or video, our mentors are dedicated to resolving any doubts students may encounter."
      },
      {
        question: "I don't want to code but I want a tech job. What can I do?",
        answer: "Cyber security and QA Automation testing will be more suited for your interests as it requires minimal coding skills for the entry-level roles in the industry."
      },
      {
        question: "How will the Mock interviews help me for my placement?",
        answer: "Our mock interviews will provide you with a realistic interview experience and help you prepare for the actual company placement interviews, helping you to evaluate yourself, get feedback on improvement areas from experts, and giving you a competitive edge in placements."
      },
      {
        question: "How do you ensure placements for students who come from a non-technical background?",
        answer: "Our curriculum focuses on extensive hands-on implementation starting from fundamentals to build job-ready skills even for beginners. Long duration courses allow time to practice and gain conceptual clarity. Personal mentors guide to each student in their learning journey."
      }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper
      sectionTitleProps={{
        title: "Have",
        blueColorTitle: "Questions",
        description: "",
        id: "section-id",
      }}    
      showRequestCallbackButton={false}
    >
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 py-8" id="faqs">
        {/* FAQ Container */}
        <section id="faqs">
          <div className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg shadow-sm bg-white"
              >
                <button
                  className="w-full flex items-center justify-between p-2 text-left text-gray-900 font-medium bg-white hover:bg-gray-100 rounded-lg transition-all"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-500">
                    {openIndex === index ? "×" : "+"}
                  </span>
                  <span className="flex-1 ml-4 text-gray-700 text-xs md:text-sm lg:text-lg font-poppins font-medium">
                    {faq.question}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="p-3 border-t bg-gray-50 text-gray-500 text-xs md:text-sm lg:text-lg font-poppins">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto mt-4">
            <div className="text-sm text-gray-500">
              Still you have questions, please{" "}
              <motion.p 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="inline text-blue-500 font-bold hover:underline cursor-pointer text-[12px] md:text-[14px]" 
                onClick={() => scrollToSection("contact-us")}
              >
                Contact Us
              </motion.p>
            </div>
          </div>
        </section>
      </div>
    </SectionWrapper>
  );
}

export default FAQs;