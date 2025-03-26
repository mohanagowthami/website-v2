import { SectionTitle } from "@/Common/SectionTitle";
import {ContactForm} from "./index";

export const LeftRightSection = () => {
  return (
    
    <div className="bg-white w-full p-6 py-12 md:p-12 lg:px-[100px] lg:py-[150px]" id="Home">
<div className="max-w-[90%] sm:max-w-[83%] md:max-w-[75%] lg:max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-[15%]">

        {/* Left Section */}
        <div className="space-y-6">
          {/* <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900">
  Level Up Your Skills and{" "}
  <span className="text-blue-600">Land Your Dream Job</span>
</h1>

          <p className="text-sm md:text-base sm:text-lg text-[#667084]">
            Master industry-standard skills through expert-led teaching, hands-on training, real-world projects, and personalized mentorship.
          </p> */}

        
          <SectionTitle title="Level Up Your Skills and"  blueColorTitle="Land Your Dream Job"  description="Master industry-standard skills through expert-led teaching, hands-on training, real-world projects, and personalized mentorship." />
          <div className="bg-white p-[28px] rounded-[20px] border-[#e4e7ec] border-1 xl:max-w-[85%] 2xl:max-w-[78%]">
             <div className="flex content-center items-center w-full gap-4">
             <div className="flex items-center gap-3 w-1/2 ">
                <img src="500+.svg" alt="500+ Assisted" className="w-9 h-9" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">500+</h3>
                  <p className="text-sm text-gray-600">Get Assisted</p>
                </div>
              </div>
               {/* horizantaal divider */}
             <div className="h-12 w-[3px] bg-[#f2f3f6] mx-4 md:mx-10"></div>
            
              <div className="flex items-center gap-3 w-1/2 ">
                <img src="10+.svg" alt="500+ Assisted" className="w-9 h-9" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">10+</h3>
                  <p className="text-sm text-gray-600">Collaborations</p>
                </div>
              </div>
              </div>

              <div  className="flex  items-center gap-[25%] my-10">
                  <div className="w-full md:w-3/4 xl:w-1/2 h-[2px] bg-[#f2f3f6]">

                  </div>
                  <div className="w-full md:w-3/4 xl:w-1/2 h-[2px] bg-[#f2f3f6]"> </div>
              </div>

              <div className="flex content-center items-center w-full gap-4">
             <div className="flex items-center gap-3 w-1/2 ">
                <img src="6LPA.svg" alt="500+ Assisted" className="w-9 h-9" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">6LPA</h3>
                  <p className="text-sm text-gray-600">Average Salary</p>
                </div>
              </div>
               {/* horizantaal divider */}
             <div className="h-12 w-[3px] bg-[#f2f3f6] mx-4 md:mx-10"></div>
            
              <div className="flex items-center gap-3 w-1/2 ">
                <img src="18LPA.svg" alt="500+ Assisted" className="w-9 h-9" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">18LPA</h3>
                  <p className="text-sm text-gray-600">Highest Salary</p>
                </div>
              </div>
              </div>
          
          </div>
        </div>

        {/* Right Section */}
        <section id="contact-section">
        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8   lg:max-w-[95%] xl:max-w-[95%]">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Let's get in touch</h2>
          <ContactForm/>
        </div>
        </section>
      </div>
    </div>
    

  );
};