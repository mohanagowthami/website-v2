'use client'
import { motion } from "framer-motion";
export  function Footer() {
  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80; // Adjust if there's a fixed navbar
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        window.history.pushState(null, "", `#${id}`);
      } else {
        console.warn("Element not found: ", id);
      }
    }, 100);
  };
    return (
        <footer className="bg-[#0b0d17] text-white py-10 px-5 md:px-32 w-full ">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto">
    {/* Company Info */}
    <div className="space-y-5">
      <h1 className="text-[14px] md:text-[18px]  lg:text-[38.7397px] font-bold text-blue-500">HyperSonic.</h1>
      <p className="text-[12px] md:text-[14px] text-[#f2f3f6] lg:text-[16px]">Training and Consultancy services</p>
      <h2 className="mt-6 text-[14px] md:text-[16px] font-semibold text-[#f2f3f6] lg:text-[16px]">Reach us</h2>

      <div className="flex items-center space-x-3 mt-3">
        <img
          src="whatsappicon.png"
          className="w-6 h-6"
          alt="WhatsApp"
        />
        <div className="text-[#cfd4dc] text-[12px] md:text-[14px] ">
        <a href="https://wa.me/917032378883" className="text-[#cfd4dc] hover:text-blue-500">
          <span>+91 7032378883</span>
          <p className="text-[#667084] text-[10px] md:text-[12px] ">(WhatsApp only)</p></a>
        </div>
      </div>

      <div className="flex items-center space-x-3 mt-3 lg:text-[16px]">
        
        <img
          src="gmail-icon.svg"
          className="w-6 h-6"
          alt="Email"
        />
        <a href="mailto:contact@hypersonicc.com" className="text-[#cfd4dc] text-[12px] md:text-[14px] lg:text-[16px] hover:underline">
        <p className="text-[#cfd4dc] text-[12px] md:text-[14px] lg:text-[16px]">contact@hypersonicc.com</p>
        </a>
      </div>
    </div>

    {/* Get Help */}
    <div className="space-y-3 mt-5">
          <h4 className="text-[14px] md:text-[16px] font-semibold text-[#f2f3f6] lg:text-[16px]">
            Get Help
          </h4>
          <motion.p
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#2E90FA] font-bold hover:underline cursor-pointer text-[12px] md:text-[14px]"
            onClick={() => scrollToSection("faqs")}
          >
            FAQ's
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
        <div className="space-y-2 mt-5">
          <h4 className="text-[14px] md:text-[16px] font-semibold text-[#f2f3f6]">Programs</h4>
          <motion.p
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-500 font-bold hover:underline cursor-pointer text-[12px] md:text-[14px]"
            onClick={() => scrollToSection("backend-development")}
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
          <motion.p
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-500 font-bold hover:underline cursor-pointer text-[12px] md:text-[14px]"
            onClick={() => scrollToSection("full-stack-development")}
          >
            Full-Stack Development
          </motion.p>
        </div>

    {/* Contact Us */}
    <div className="space-y-5 mt-5">
      <h4 className="text-[14px] md:text-[16px] font-semibold text-[#f2f3f6]">Contact Us</h4>
      <div className="flex items-center space-x-3 mt-3">
        <img
          src="location-icon.svg"
          className="w-6 h-6"
          alt="Location"
        />
        <span className="text-gray-400 text-[12px] md:text-[14px]">
          Ashok Nagar, Near Veerkamal Theater, Above Reliance Smart Point, Kakinada, Andhra Pradesh 533002
        </span>
      </div>

      {/* Social Media */}
      <div className="flex space-x-4 mt-5 text-blue-500 text-2xl">
        <img
          src="instagram-icon.svg"
          className="cursor-pointer hover:text-blue-300 w-6 h-6"
          alt="Instagram"
        />
        <img
          src="facebook-icon.svg"
          className="cursor-pointer hover:text-blue-300 w-6 h-6"
          alt="Facebook"
        />
        <img
          src="github-icon.svg"
          className="cursor-pointer hover:text-blue-300 w-6 h-6"
          alt="GitHub"
        />
        <img src="linkedin-icon.svg"
          className="cursor-pointer hover:text-blue-300 w-6 h-6"
          alt="LinkedIn"
        />
      </div>
    </div>
  </div>
</footer>
    );
}
