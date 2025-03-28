"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import RequestCallbackButton from "@/Common/RequestCBButton";
import { SectionTitle } from "@/Common/SectionTitle";

const tutors = [
  {
    name: "Gajula Mohana Gowthami",
    role: "Staff Engineer",
    company: "Nagarro",
    image: "GajulaMohanaGowthami.png",
  },
  {
    name: "Gajula Srinivas",
    role: "Business Analyst",
    company: "Amazon",
    image: "GajulaSrinivas.png",
  },
  {
    name: "Mahesh",
    role: "Deloitte",
    company: "",
    image: "Mahesh.png",
  },
  {
    name: "Kone Srikanth",
    role: "Manager",
    company: "State Street",
    image: "KoneSrikanth.png",
  },
  {
    name: "Somaraju",
    role: "",
    company: "",
    image: "Somaraju.png",
  },
];

const ExpertTutors = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-blue-900 py-12 px-4 relative">
     <div className="mb-10"> <SectionTitle
                      mainTitle={true}
                      title="Meet Our Industry"
                      blueColorTitle="Expert Tutors"
                      description="Learn from professionals working at top tech companies."
                      title1=""
                    />
                    </div>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        speed={800}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-6xl"
      >
        {tutors.map((tutor, index) => (
          <SwiperSlide key={index}>
            <div className=" border-blue-100 rounded-xl p-5  hover:shadow-lg transition duration-300 flex flex-col items-center text-center h-[260px] w-[240px] mx-auto">
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-30 h-30 rounded-full  mb-3"
              />
              <h3 className="text-base font-semibold text-blue-900">
                {tutor.name}
              </h3>
              <p className="text-sm text-blue-600 min-h-[20px]">
                {tutor.role || "—"}
              </p>
              <p className="text-sm text-blue-500 min-h-[20px]">
                {tutor.company || "—"}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-blue-700 mt-6 text-sm italic">and more...</div>  
      <div className="absolute right-4 bottom-4 ">
  <RequestCallbackButton />
</div>

      {/* Custom styles for Swiper buttons and pagination */}
            <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          font-weight: bold;
          background-color: #eff8ff ; /* Add a background color if needed */
          padding: 10px; /* Adjust padding for the button */
          border-radius: 50%;
          transition: background-color 0.3s ease, transform 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px; /* Button size */
          height: 30px; /* Button size */
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }
      
        .swiper-button-prev {
          left: 5%;
        }
      
        .swiper-button-next {
          right: 5%;
        }
      
        /* Adjust the inner arrow size */
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 12px; /* Reduce the arrow size */
        }
      
        @media (max-width: 768px) {
          .swiper-button-prev {
            left: 2%;
          }
          .swiper-button-next {
            right: 2%;
          }
        }
      
        .swiper-pagination-bullet {
          width:5px;
          height: 5px;
          background: #0066ff;
          opacity: 0.2;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
      
        .swiper-pagination-bullet-active {
          opacity: 0.8;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default ExpertTutors;
