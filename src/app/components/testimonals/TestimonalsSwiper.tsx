


"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { SectionWrapper } from "@/Common/index";
import { ContentForSliders } from "./ContentForSliders";





const slides = [
  {
    text: "HyperSonic is the best place to kickstart your tech career. I developed strong fundamentals, DSA, and competitive programming skills.",
    name: "Saranya",
    logo: "https://framerusercontent.com/images/VrwRahe6Ka2cQDaaCU3HWKOtb8.png"
  },
  {
    text: "Joining HyperSonic was a game-changer for my tech journey. The hands-on projects and expert mentorship helped me master coding and problem-solving.",
    name: "Karuna",
    logo: "https://framerusercontent.com/images/aN7jyMTdiCoEnnnZADRPlIgup4c.png"
  },
  {
    text: "HyperSonic provided me with the perfect blend of theory and practice. I now feel confident tackling real-world challenges in tech.",
    name: "Shanmukh",
    logo: "https://framerusercontent.com/images/5VrRN2hqwpYzt6FN7DspXmGGoKU.png"
  },
  {
    text: "The hands-on projects at HyperSonic gave me the confidence to apply my skills in real-world scenarios. I am now excelling in my job.",
    name: "Gayathri",
    logo: "https://framerusercontent.com/images/R16UOF6HwNzM3IPiDERvnDXJagw.png"
  }
];

export default function App() {
  return (

    <SectionWrapper
             
              sectionTitleProps={{
                title: "Hear What  ",
                blueColorTitle: "Our Students Say",
                description: "Stories of growth and achievement from our students.",
                id: "section-id",
                 requestCBAlign: "center"
              }}    
              showRequestCallbackButton={true}
        
              >
    <div className="p-3" id="testimonials">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        speed={800}
        effect="slide"
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        spaceBetween={30}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="fade-in">
            <ContentForSliders {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>


      <style jsx global>{`
        .mySwiper {
          --swiper-navigation-size: 30px;
          --swiper-navigation-color: white;
          --swiper-theme-color: white;
          --swiper-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        .swiper-slide {
          text-align: center;
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          transition: transform 0.5s ease, opacity 0.5s ease;
        }

        .swiper-slide-active {
          transform: scale(1.05);
          opacity: 1;
          animation: fadeIn 0.6s ease-in-out;
        }

        .swiper-slide-prev,
        .swiper-slide-next {
          transform: scale(0.85);
          opacity: 0.7;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .swiper-button-next,
        .swiper-button-prev {
          font-weight: bold;
          background-color: #ccc;
          padding: 15px;
          border-radius: 50%;
          transition: background-color 0.3s ease, transform 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
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

        @media (max-width: 768px) {
          .swiper-button-prev {
            left: 2%;
          }
          .swiper-button-next {
            right: 2%;
          }
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
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
    </SectionWrapper>
  );
}