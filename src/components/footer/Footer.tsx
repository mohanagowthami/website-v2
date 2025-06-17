'use client'
import Image from "next/image";
import { SectionWrapper } from "@/Common";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -180;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <SectionWrapper
      showRequestCallbackButton={false}
      cs="!px-0 !md:px-0 !p-0 !overflow-hidden !max-h-none " // Remove padding and ensure full width
    >
      <footer className="bg-[#0b0d17] text-white py-10 px-5 w-full h-auto min-h-0 ">
        <div className="px-10 md:px-20 w-full max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-15 gap-y-8 overflow-hidden">
            {/* Company Info */}
            <div className="space-y-5 ">
              <h1 className="text-[14px] md:text-[18px] lg:text-[38.7397px] font-bold text-blue-500">HyperSonic.</h1>
              <p className="text-[12px] md:text-[14px] text-[#f2f3f6] lg:text-[16px]">Training and Consultancy services</p>
              <h2 className="mt-6 text-[14px] md:text-[16px] font-semibold text-[#f2f3f6] lg:text-[16px]">Reach us</h2>

              <div className="flex items-center space-x-3 mt-3">
               <Image
  src="/whatsappicon.png"
  alt="WhatsApp"
  width={24} // 6 * 4 = 24px
  height={24}
  className="w-6 h-6"
/>
                <div className="text-[#cfd4dc] text-[12px] md:text-[14px]">
                  <a href="https://wa.me/917032378883" className="text-[#cfd4dc] hover:text-blue-500">
                    <span>+91 7032378883</span>
                    <p className="text-[#667084] text-[10px] md:text-[12px]">(WhatsApp only)</p>
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 mt-3">
                <img src="gmail-icon.svg" className="w-6 h-6" alt="Email" />
                <a href="mailto:contact@hypersonicc.com" className="text-[#cfd4dc] text-[12px] md:text-[14px] hover:underline">
                  contact@hypersonicc.com
                </a>
              </div>
            </div>

            {/* Get Help */}
            <div className="space-y-3  mt-6">
              <h4 className="text-[14px] md:text-[16px] font-semibold text-[#f2f3f6]">Get Help</h4>
              <motion.p
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-[#2E90FA] font-bold hover:underline cursor-pointer text-[12px] md:text-[14px]"
                onClick={() => scrollToSection("faqs")}
              >
                FAQ&apos;s
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-blue-500 font-bold hover:underline cursor-pointer text-[12px] md:text-[14px]"
                onClick={() => scrollToSection("contact-us")}
              >
                Contact Us
              </motion.p>
            </div>

            {/* Programs */}
            <div className="space-y-3 mt-6">
              <h4 className="text-[14px] md:text-[16px] font-semibold text-[#f2f3f6]">Programs</h4>

              <motion.p
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-blue-500 font-bold hover:underline cursor-pointer text-[12px] md:text-[14px]"
                onClick={() => scrollToSection("full-stack")}
              >
                Full-Stack Development
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-blue-500 font-bold hover:underline cursor-pointer text-[12px] md:text-[14px]"
                onClick={() => scrollToSection("cybersecurity")}
              >
                Cyber Security
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-blue-500 font-bold hover:underline cursor-pointer text-[12px] md:text-[14px]"
                onClick={() => scrollToSection("soft-skills")}
              >
                Soft Skills
              </motion.p>
            </div>

            {/* Contact Us */}
            <div className="space-y-5 mt-6">
              <h4 className="text-[14px] md:text-[16px] font-semibold text-[#f2f3f6]">Contact Us</h4>
              <div className="flex space-x-3">
                <img src="location-icon.svg" className="w-6 h-6 flex-shrink-0" alt="Location" />
                <span className="text-gray-400 text-[12px] md:text-[14px]">
                  Ashok Nagar, Near Veerkamal Theater, Above Reliance Smart Point, Kakinada, Andhra Pradesh 533002
                </span>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4 mt-6">
                <Image src="/instagram-icon.svg" alt="Instagram" width={24} height={24} className="cursor-pointer hover:opacity-80 w-6 h-6" />
                <Image src="/facebook-icon.svg" alt="Facebook" width={24} height={24} className="cursor-pointer hover:opacity-80 w-6 h-6" />
                <Image src="/github-icon.svg" alt="GitHub" width={24} height={24} className="cursor-pointer hover:opacity-80 w-6 h-6" />
                <Image src="/linkedin-icon.svg" alt="LinkedIn" width={24} height={24} className="cursor-pointer hover:opacity-80 w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </SectionWrapper>
  );
}




