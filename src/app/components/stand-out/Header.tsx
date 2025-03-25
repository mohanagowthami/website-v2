export  function Heading() {
    return (
      <section className="flex flex-col items-center  p-6  overflow-x-hidden bg-[#f5faff]" id="Why-Us">
      {/* Heading Section */}
      <div className="text-center ">
        <h1 className="lg:text-[36px] sm:text-[26px] md:text-[26px] font-bold ">
          What Makes <span className="text-blue-700">Hypersonic</span> Stand Out?
        </h1>
        <p className="lg:text-[16px] sm:text-[14px] md:text-[14px] text-gray-600">
          A personalized learning experience that blends mentorship, flexibility, and job-ready skills.
        </p>
      </div>

      {/* Overview Section */}
      <article className="mt-8  w-full text-left ml-14">
        <h1 className="lg:text-[24px] sm:text-[18px] md:text-[18px]  text-gray-700 font-bold">
          Step into the world of holistic Upskilling
        </h1>
        <h2 className= "text-orange-500 lg:text-[22px] sm:text-[16px] md:text-[18px] font-bold">
          🤩 Get an Overview of the Platform
        </h2>
      </article>
      </section>
    );
  }
  