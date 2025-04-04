'use client'
import Image from 'next/image';
import FormSession from "@/Common/FormSession"
import { useEffect } from 'react';

const EnrollPage = () => {
  useEffect(() => {
    if (window.location.hash === 'Enroll') {
      const element = document.getElementById('Enroll');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  return (
    
    <div className="max-w-5xl mx-auto p-6" id="Enroll">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-xl shadow-md">
        {/* Contact Form */}
        <div>
          
          <FormSession/>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/enroll-image.jpg"
            alt="Enroll Illustration"
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      
      
    
    </div>
  );
};

export default EnrollPage;
