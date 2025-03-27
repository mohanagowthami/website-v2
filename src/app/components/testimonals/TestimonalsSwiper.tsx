// "use client"
// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';

// // import required modules
// import { Navigation, Pagination, EffectFade } from 'swiper/modules';
// import { SectionTitle } from "@/Common/SectionTitle";
// import { ContentForSliders } from './ContentForSliders';


// export default function App() {
//   return (
//     <>
//         <SectionTitle title="Hear What"  blueColorTitle="Our Students Say"  description="Stories of growth and achievement from our students." mainTitle={true} />
//       <Swiper
//         navigation={true}
//         pagination={{
//           clickable: true,
//         }}
//         // Add smooth slide transitions
//         speed={800} // Control the speed of the transition (in ms)
//         effect="slide" // Use "slide" for horizontal sliding (or "fade", "cube", "coverflow", "flip" for different effects)

//         // Optional smooth transition settings
//         grabCursor={true} // Changes cursor to grabbing hand during slide
//         centeredSlides={true} // Centers active slide
//         modules={[Navigation, Pagination]}
//         className="mySwiper"
//         spaceBetween={30}
//         slidesPerView={1}
//       >
//         <SwiperSlide>
//         <ContentForSliders/>
//         </SwiperSlide>
//         <SwiperSlide> slide 2</SwiperSlide>
//         <SwiperSlide> slide 3</SwiperSlide>
//         <SwiperSlide>slide 4</SwiperSlide>

//       </Swiper>

//       <style jsx global>{`
//         .mySwiper {
//           width: 100%;
//           height: 400px;
//           margin: 20px 0;

//           /* Customize arrow size here */
//           --swiper-navigation-size: 30px;
//           --swiper-navigation-color: #ff6600;
//           --swiper-theme-color: #ff6600;

//           /* Add smooth transition for all animations */
//           --swiper-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
//         }

//         .swiper-slide {
//           text-align: center;
//           font-size: 18px;

//           display: flex;
//           justify-content: center;
//           align-items: center;

//           border-radius: 8px;

//           /* Add smooth transition for slide transforms */
//           transition: transform 0.5s ease, opacity 0.5s ease;
//         }

//         /* Active slide styling */
//         .swiper-slide-active {
//           transform: scale(1);
//           opacity: 1;
//         }

//         /* Non-active slide styling */
//         .swiper-slide-prev, .swiper-slide-next {
//           transform: scale(0.85);
//           opacity: 0.7;
//         }

//         /* Additional styling for navigation arrows */
//         .swiper-button-next,
//         .swiper-button-prev {
//           font-weight: bold;
//           background-color: rgba(255, 255, 255, 0.5);
//           padding: 20px;
//           border-radius: 50%;
//           transition: background-color 0.3s ease, transform 0.3s ease;
//         }

//         .swiper-button-next:hover,
//         .swiper-button-prev:hover {
//           background-color: rgba(255, 255, 255, 0.8);
//           transform: scale(1.1);
//         }

//         /* Ensure pagination bullets are visible with smooth transitions */
//         .swiper-pagination-bullet {
//           width: 10px;
//           height: 10px;
//           background: #ff6600;
//           opacity: 0.5;
//           transition: opacity 0.3s ease, transform 0.3s ease;
//         }

//         .swiper-pagination-bullet-active {
//           opacity: 1;
//           transform: scale(1.2);
//         }
//       `}</style>
//     </>
//   );
// }



// Testimonials Data
// "use client"

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { SectionTitle } from "@/Common/SectionTitle";
// import { ContentForSliders } from "./ContentForSliders";
// import RequestCallbackButton from "@/Common/RequestCBButton";

// // Define slides data
// const slides = [
//   {
//     text: "HyperSonic is the best place to kickstart your tech carrer. I developed strong fundamentals ,DSA, and compitative programming skills.",
//     name: "Saranya",
//     logo: "https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png"
//   },
//   {
//     text: "Joining HyperSonic was a game-changer for my tech journey. The hand-on projects and experts mentronship helped me master codeing and problem-sloving.",
//     name: "Karuna",
//     logo: "https://mms.businesswire.com/media/20240717909513/en/2189087/22/01_Primary_RGB_Registered.jpg"
//   },
//   {
//     text: "HyperSonic provided me with the perfect blend of theory and practice. I now feel confident tackling real-world challenges in tech.",
//     name: "Shanmukh",
//     logo: "https://cdn.prod.website-files.com/5fdcd9ffc26d8060c8b6be80/66476389b940e2899fb19e1e_logo-new-1.png"
//   },
//   {
//     text: "The hands-on projects at HyperSonic gave me the confidence to apply my skills in real-world scenarios. I am now excelling in my job.",
//     name: "Neha",
//     logo: "https://zeotap.com/wp-content/uploads/Accenture.png"
//   }
// ];

// export default function App() {
//   return (
//     <div className=" mt-16">
//       <SectionTitle
//         title="Hear What"
//         blueColorTitle="Our Students Say"
//         description="Stories of growth and achievement from our students."
//         mainTitle={true} 
//         className=" mt-16"
//       />
//       <Swiper
//         navigation={true}
//         pagination={{ clickable: true }}
//         speed={800} // Smooth transition speed
//         effect="slide"
//         grabCursor={true}
//         centeredSlides={true}
//         autoplay={{
//           delay: 3000, // Auto-slide every 3 seconds
//           disableOnInteraction: false, // Keeps autoplay running after user interaction
//         }}
//         modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
//         className="mySwiper"
//         spaceBetween={30}
//         slidesPerView={1}
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <ContentForSliders {...slide} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <RequestCallbackButton alignRight={false} className="mt-6 mb-10" />



//     </div>
//   );
// }


"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { SectionTitle } from "@/Common/SectionTitle";
import { ContentForSliders } from "./ContentForSliders";
import { RequestCallbackButton } from "@/Common/index";




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
    <div className="p-3">
      <SectionTitle
        title="Hear What"
        blueColorTitle="Our Students Say"
        description="Stories of growth and achievement from our students."
        mainTitle={true}
        className="mt-16"
      />
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
      <RequestCallbackButton alignRight={false} className="mt-4 mb-6" />

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
  );
}