export const LeftRightSection = () => {
  return (
    <div className="bg-white w-full p-6 py-12 md:p-12 lg:px-[56px] lg:py-[60px]">
      <div className="max-w-[90%] sm:max-w-[83%] md:max-w-[75%] lg:max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-[15%] ">
        {/* Left Section */}
        <div className="space-y-6">
          <h1 className="text-4xl  xl:text-5xl font-bold text-gray-900">
            Level Up Your Skills and{" "}
            <span className="text-blue-600">Land Your Dream Job</span>
          </h1>
          <p className="text-sm md:text-base sm:text-lg text-[#667084]">
            Master industry-standard skills through expert-led teaching, hands-on training, real-world projects, and personalized mentorship.
          </p>
          <div className="bg-white p-[28px] rounded-[20px] border-[#e4e7ec] border-1 xl:max-w-[85%] 2xl:max-w-[78%]">
             <div className="flex content-center items-center w-full gap-4">
             <div className="flex items-center gap-3 w-1/2 ">
                <img src="500+.svg" alt="500+ Assisted" className="w-9 h-9" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">500+</h3>
                  <p className="text-sm text-gray-600">Get Assisted</p>
                </div>
              </div>
               {/* horizontal divider */}
             <div className="h-12 w-[3px] bg-[#f2f3f6] mx-4 md:mx-10"></div>
            
              <div className="flex items-center gap-3 w-1/2 ">
                <img src="500+.svg" alt="500+ Assisted" className="w-9 h-9" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">500+</h3>
                  <p className="text-sm text-gray-600">Get Assisted</p>
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
                <img src="500+.svg" alt="500+ Assisted" className="w-9 h-9" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">500+</h3>
                  <p className="text-sm text-gray-600">Get Assisted</p>
                </div>
              </div>
               {/* horizontal divider */}
             <div className="h-12 w-[3px] bg-[#f2f3f6] mx-4 md:mx-10"></div>
            
              <div className="flex items-center gap-3 w-1/2 ">
                <img src="500+.svg" alt="500+ Assisted" className="w-9 h-9" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">500+</h3>
                  <p className="text-sm text-gray-600">Get Assisted</p>
                </div>
              </div>
              </div>
          
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8  lg:max-w-[85%] xl:max-w-[75%]">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Let's get in touch</h2>
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                type="text"
                placeholder="Enter your 10-digit mobile number"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email ID</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Highest Graduation</label>
              <input
                type="text"
                placeholder="Enter your highest graduation"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="date"
                  placeholder="dd-mm-yyyy"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">End Date</label>
                <input
                  type="date"
                  placeholder="dd-mm-yyyy"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Referral Code</label>
              <input
                type="text"
                placeholder="Enter your referral code"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
