'use client'
import Image from 'next/image';
import FormSession from "@/Common/FormSession";
import { useEffect } from 'react';

import { Header } from '@/components/landing-section';

const EnrollPage = () => {
  // Scroll to section based on hash
  useEffect(() => {
    const scrollToHash = () => {
      const { hash } = window.location;
      if (!hash) return;
  
      const element = document.getElementById(hash.substring(1));
      if (!element) return;
  
      // Get header height dynamically (or use a fixed value like 100)
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 100;
  
      // Calculate scroll position (element top - header height)
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const scrollToPosition = elementTop - headerHeight;
  
      window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
    };
  
    // Run on page load
    setTimeout(scrollToHash, 100); // Small delay for DOM readiness
  
    // Re-run on hash change (e.g., browser back button)
    window.addEventListener('hashchange', scrollToHash);
  
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#FBFCFC] overflow-x-hidden">
      {/* Header with border and shadow */}
      <header id="content">
        
        <div>
          <Header />
        </div>
      </header>
      <a
      href='#programs'
      id="programs"></a>

      {/* Main content */}
      <main className="relative w-full mt-20" id="Enroll">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-80px)]">
          {/* Left Side - Contact Form */}
          <div className="flex items-center justify-center p-8 z-10 mt-12">
            <div className="w-full max-w-md p-8 rounded-4xl shadow-xl bg-white">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Let &apos;s Get in Touch</h2>
              <FormSession />
            </div>
          </div>

          {/* Right Side - Image with light filter */}
          <div className="hidden md:block relative h-full">
            <Image
              src="/form.png"
              alt="Education illustration"
              fill
              sizes="50vw"
              className="object-cover brightness-125 contrast-90"
              quality={100}
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default EnrollPage;
