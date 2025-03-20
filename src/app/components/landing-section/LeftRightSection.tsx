export const LeftRightSection = () => {
  return (
    <div className="bg-white w-full px-10 sm:px-6 lg:px-26 py-24 sm:py-10 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Section */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Level Up Your Skills and{" "}
            <span className="text-blue-600">Land Your Dream Job</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Master industry-standard skills through expert-led teaching, hands-on training, real-world projects, and personalized mentorship.
          </p>
          <div className="bg-white p-6 rounded-3xl shadow-md w-full lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <img src="500+.svg" alt="500+ Assisted" className="w-9 h-9" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">500+</h3>
                  <p className="text-sm text-gray-600">Get Assisted</p>
                </div>
              </div>
              {/* Vertical Line */}
      <div className="flex justify-center items-center mx-5">
        <div className="h-12 w-[3px] bg-gray-300"></div>
      </div>

              <div className="flex items-center gap-3">
                <img src="10+.svg" alt="10+ Collaborations" className="w-9 h-9" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">10+</h3>
                  <p className="text-sm text-gray-600">Collaborations</p>
                </div>
              </div>
                    {/* Divider */}
      <div className="col-span-3 my-8 flex flex-col-4">
        <div className="w-[45%] border-t-3 border-gray-300"></div>
        <div className="w-[15%]"></div>
        <div className="w-[45%] border-t-3 border-gray-300"></div>
      </div>

              <div className="flex items-center gap-3">
                <img src="6LPA.svg" alt="6LPA Average Salary" className="w-9 h-9" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">6LPA</h3>
                  <p className="text-sm text-gray-600">Average Salary</p>
                </div>
              </div>
              {/* Vertical Line */}
      <div className="flex justify-center items-center mx-5">
        <div className="h-12 w-[3px] bg-gray-300"></div>
      </div>

              <div className="flex items-center gap-3">
                <img src="18Lpa.svg" alt="18LPA Highest Salary" className="w-9 h-9" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">18 LPA</h3>
                  <p className="text-sm text-gray-600">Highest Salary</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
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