
"use client";
import { SectionWrapper } from "@/Common/SectionWrapper";
import FormSession from "@/Common/FormSession";
import { SectionTitle } from "@/Common/SectionTitle";
import Image from 'next/image';

export const LeftRightSection = () => {
  return (
    <section id="contact-us">
    <SectionWrapper
      showRequestCallbackButton={false}
      cs=" bg-white pt-12 md:pt-18 lg:pt-32"
    >
      <div className="pt-12 max-w-[90%] sm:max-w-[83%] md:max-w-[75%] lg:max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-[10%]">
        {/* Left Section */}
        <div className="flex flex-col gap-6 max-w-xl ">
          <SectionTitle
            title="Level Up Your Skills and"
            blueColorTitle="Land Your Dream Job"
            description="Master industry-standard skills through expert-led teaching, hands-on training, real-world projects, and personalized mentorship."
            mainTitle={false}
            titleAlign="left"
            className="!items-start !text-left"
            // titleSize="large"
            // largeTitle={true} // This enables the extra large size
          />
          {/* Statistics Box */}
<div className="bg-white p-4 sm:p-6 md:p-[28px] rounded-[20px] border border-[#e4e7ec] w-full xl:max-w-[85%] 2xl:max-w-[78%]">
  {/* Mobile: Single Column */}
  <div className="flex flex-col gap-6  md:hidden">
    {/* 500+ Assisted */}
    <div className="bg-gray-50 p-6 rounded-lg border border-[#e4e7ec] flex items-center gap-3">
      <Image
        src="/500+.svg"
        alt="500+ Assisted"
        width={36}
        height={36}
        className="w-9 h-9"
      />
      <div>
        <h3 className="text-md font-semibold text-gray-900">500+</h3>
        <p className="text-xs text-gray-600">Get Assisted</p>
      </div>
    </div>
    
    {/* Full-width Horizontal Divider */}
    <div className="w-full h-[2px] bg-[#f2f3f6]"></div>
    
    {/* 10+ Collaborations */}
    <div className="bg-gray-50 p-6 rounded-lg border border-[#e4e7ec] flex items-center gap-3">
      <Image
        src="/10+.svg"
        alt="10+ Collaborations"
        width={36}
        height={36}
        className="w-9 h-9"
      />
      <div>
        <h3 className="text-md font-semibold text-gray-900">10+</h3>
        <p className="text-xs text-gray-600">Collaborations</p>
      </div>
    </div>
    
    {/* Full-width Horizontal Divider */}
    <div className="w-full h-[2px] bg-[#f2f3f6]"></div>
    
    {/* 6LPA Average Salary */}
    <div className="bg-gray-50 p-6 rounded-lg border border-[#e4e7ec] flex items-center gap-3">
      <Image
        src="/6LPA.svg"
        alt="6LPA Average Salary"
        width={36}
        height={36}
        className="w-9 h-9"
      />
      <div>
        <h3 className="text-md font-semibold text-gray-900">6LPA</h3>
        <p className="text-xs text-gray-600">Average Salary</p>
      </div>
    </div>
    
    {/* Full-width Horizontal Divider */}
    <div className="w-full h-[2px] bg-[#f2f3f6]"></div>
    
    {/* 18LPA Highest Salary */}
    <div className="bg-gray-50 p-6 rounded-lg border border-[#e4e7ec] flex items-center gap-3">
      <Image
        src="/18LPA.svg"
        alt="18LPA Highest Salary"
        width={36}
        height={36}
        className="w-9 h-9"
      />
      <div>
        <h3 className="text-md font-semibold text-gray-900">18LPA</h3>
        <p className="text-xs text-gray-600">Highest Salary</p>
      </div>
    </div>
  </div>

  {/* Tablet+: Two Column Layout (hidden on mobile) */}
  <div className="hidden md:block">
    {/* First Row */}
    <div className="flex items-center w-full gap-4">
      <div className="flex items-center gap-3 w-1/2">
        <Image
          src="/500+.svg"
          alt="500+ Assisted"
          width={36}
          height={36}
          className="w-9 h-9"
        />
        <div>
          <h3 className="text-md font-semibold text-gray-900">500+</h3>
          <p className="text-xs text-gray-600">Get Assisted</p>
        </div>
      </div>
      <div className="h-12 w-[5px] bg-[#f2f3f6] mx-4 md:mx-10"></div>
      <div className="flex items-center gap-3 w-1/2">
        <Image
          src="/10+.svg"
          alt="10+ Collaborations"
          width={36}
          height={36}
          className="w-9 h-9"
        />
        <div>
          <h3 className="text-md font-semibold text-gray-900">10+</h3>
          <p className="text-xs text-gray-600">Collaborations</p>
        </div>
      </div>
    </div>

    {/* Horizontal Dividers (keeping the split style for tablet/desktop) */}
    <div className="flex items-center gap-[25%] my-10">
      <div className="w-full md:w-3/4 xl:w-1/2 h-[4px] bg-[#f2f3f6]"></div>
      <div className="w-full md:w-3/4 xl:w-1/2 h-[4px] bg-[#f2f3f6]"></div>
    </div>

    {/* Second Row */}
    <div className="flex items-center w-full gap-4">
      <div className="flex items-center gap-3 w-1/2">
        <Image
          src="/6LPA.svg"
          alt="6LPA Average Salary"
          width={36}
          height={36}
          className="w-9 h-9"
        />
        <div>
          <h3 className="text-md font-semibold text-gray-900">6LPA</h3>
          <p className="text-xs text-gray-600">Average Salary</p>
        </div>
      </div>
      <div className="h-12 w-[5px] bg-[#f2f3f6] mx-4 md:mx-10"></div>
      <div className="flex items-center gap-3 w-1/2">
        <Image
          src="/18LPA.svg"
          alt="18LPA Highest Salary"
          width={36}
          height={36}
          className="w-9 h-9"
        />
        <div>
          <h3 className="text-md font-semibold text-gray-900">18LPA</h3>
          <p className="text-xs text-gray-600">Highest Salary</p>
        </div>
      </div>
    </div>
  </div>
</div>
         </div>

        {/* Right Section */}
        <div className="bg-white rounded-3xl p-6 border border-gray-200 sm:p-8 lg:max-w-[95%] xl:max-w-[95%]">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Let&apos;s get in touch
          </h2>
          <FormSession/>
        </div>
      </div>
    </SectionWrapper>
    </section>
  );
};