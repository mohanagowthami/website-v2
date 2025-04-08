'use client'
import Image from 'next/image';
import FormSession from "@/Common/FormSession";
import { useEffect } from 'react';

import { Header } from '@/components/landing-section';

const EnrollPage = () => {
  // Scroll to section based on hash
  useEffect(() => {
    const scrollToHashElement = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1)); // Remove '#'
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    scrollToHashElement(); // Initial scroll on load

    window.addEventListener('hashchange', scrollToHashElement); // Scroll on hash change

    return () => {
      window.removeEventListener('hashchange', scrollToHashElement); // Cleanup
    };
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Let's Get in Touch</h2>
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
