"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import { Navigation, Pagination, EffectFade } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        // Add smooth slide transitions
        speed={800} // Control the speed of the transition (in ms)
        effect="slide" // Use "slide" for horizontal sliding (or "fade", "cube", "coverflow", "flip" for different effects)
        
        // Optional smooth transition settings
        grabCursor={true} // Changes cursor to grabbing hand during slide
        centeredSlides={true} // Centers active slide
        modules={[Navigation, Pagination]}
        className="mySwiper"
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

      <style jsx global>{`
        .mySwiper {
          width: 100%;
          height: 400px;
          margin: 20px 0;
          
          /* Customize arrow size here */
          --swiper-navigation-size: 30px;
          --swiper-navigation-color: #ff6600;
          --swiper-theme-color: #ff6600;
          
          /* Add smooth transition for all animations */
          --swiper-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #f8f8f8;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #ddd;
          border-radius: 8px;
          
          /* Add smooth transition for slide transforms */
          transition: transform 0.5s ease, opacity 0.5s ease;
        }
        
        /* Active slide styling */
        .swiper-slide-active {
          transform: scale(1);
          opacity: 1;
        }
        
        /* Non-active slide styling */
        .swiper-slide-prev, .swiper-slide-next {
          transform: scale(0.85);
          opacity: 0.7;
        }
        
        /* Additional styling for navigation arrows */
        .swiper-button-next,
        .swiper-button-prev {
          font-weight: bold;
          background-color: rgba(255, 255, 255, 0.5);
          padding: 20px;
          border-radius: 50%;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: rgba(255, 255, 255, 0.8);
          transform: scale(1.1);
        }
        
        /* Ensure pagination bullets are visible with smooth transitions */
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #ff6600;
          opacity: 0.5;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </>
  );
}