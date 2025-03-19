export const LeftRightSection=()=>{
   return (
    <div className="flex flex-col lg:flex-row gap-10 my-8 mx-5 lg:mx-20 items-center lg:items-start">
    {/* Left Section */}
    <div className="lg:w-1/2 w-full p-5 text-center lg:text-left">
        <h2 className="text-3xl lg:text-5xl text-gray-800 font-semibold leading-tight">
            Level Up Your Skills and
        </h2>
        <h1 className="text-2xl lg:text-4xl text-blue-500 font-bold mb-3">
            Land Your Dream Job
        </h1>
        <p className="text-gray-600 text-lg mb-6">
            Master industry-standard skills through expert-led teaching, hands-on training, real-world projects, and personalized mentorship.
        </p>

        {/* Key Points Grid */}
        <div className="bg-white p-6 rounded-[32px] shadow-md w-full lg:w-[75%] mt-[36px]">
                    <div className="grid grid-cols-2 gap-[32px]">
                        <div className="flex justify-center items-center gap-[12px]">
                            <div>
                                <img src="500+.svg" alt="Check Icon" className="w-[36px] h-[36px]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[18px] text-[#0F1728]">500+</h3>
                                <p className="text-[14px] text-[#475466]">Get Assisted</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-[12px]">
                            <div>
                                <img src="10+.svg" className="w-[36px] h-[36px]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[18px] text-[#0F1728]">10+</h3>
                                <p className="text-[14px] text-[#475466]">Collaborations</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-[12px]">
                            <div>
                                <img src="6LPA.svg" className="w-[36px] h-[36px]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[18px] text-[#0F1728]">6LPA</h3>
                                <p className="text-[14px] text-[#475466]">Average Salary</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-[12px]">
                            <div>
                                <img src="18Lpa.svg" className="w-[36px] h-[36px]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[18px] text-[#0F1728]">18 LPA</h3>
                                <p className="text-[14px] text-[#475466]">Highest Salary</p>
                            </div>
                        </div>
                    </div> 
                    </div>
                    </div>       
        {/* Right Section */}
        <div className="font-inter max-w-[600px] m-0 bg-white rounded-[24px] border border-[#E4E7EC] shadow-[0_4px_6px_#E4E7EC] p-[32px]">
  <h2 className="font-bold text-[28px] text-[#1A202C] md:text-[24px] sm:text-[20px]">Let's get in touch</h2>
  <form action="#" className="mt-6">
    <div className="space-y-4">
      <div>
        <label className="text-[16px] text-[#475466] sm:text-[14px]">Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-3 sm:py-1.5"
        />
      </div>
      <div>
        <label className="text-[16px] text-[#475466] sm:text-[14px]">Mobile Number</label>
        <input
          type="text"
          placeholder="Enter your 10-digit mobile number"
          className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-3 sm:py-1.5"
        />
      </div>
      <div>
        <label className="text-[16px] text-[#475466] sm:text-[14px]">Email ID</label>
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-3 sm:py-1.5"
        />
      </div>
      <div>
        <label className="text-[16px] text-[#475466] sm:text-[14px]">Highest Graduation</label>
        <input
          type="text"
          placeholder="Enter your highest graduation"
          className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-3 sm:py-1.5"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
        <div>
          <label className="text-[16px] text-[#475466] sm:text-[14px]">Start Date</label>
          <div className="flex items-center">
            <input
              type="date"
              placeholder="dd-mm-yyyy"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-3 sm:py-1.5"
            />
          </div>
        </div>
        <div>
          <label className="text-[16px] text-[#475466] sm:text-[14px]">End Date</label>
          <div className="flex items-center">
            <input
              type="date"
              placeholder="dd-mm-yyyy"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-3 sm:py-1.5"
            />
          </div>
        </div>
      </div>
      <div>
        <label className="text-[16px] text-[#475466] sm:text-[14px]">Referral Code</label>
        <input
          type="text"
          placeholder="Enter your referral code"
          className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-3 sm:py-1.5"
        />
      </div>
    </div>
    <button
      type="submit"
      className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 sm:py-1.5 sm:px-3"
    >
      Submit
    </button>
  </form>
</div>
      </div>
    )
} 