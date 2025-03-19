export const LeftRightSection = () => {
  return (
      <div className="flex flex-col lg:flex-row gap-20 my-8 mx-5 lg:mx-20 items-center lg:items-start pt-[70px]">
        {/* Left Section */}
<div className="lg:w-1/2 w-full p-5 pt-15 text-center lg:text-left">
  <h1 className="text-[44px] lg:text-[44px] text-gray-800 font-semibold leading-tight">
    Level Up Your Skills and<br></br>
    <span className="text-2xl lg:text-[44px] text-blue-500 font-bold mb-3"> Land Your Dream Job </span>
  </h1>
  <p className="text-gray-600 text-[16px] mb-6">
    Master industry-standard skills through expert-led teaching, hands-on training, real-world projects, and personalized mentorship.
  </p>

  {/* Adjusted Box Section */}
  <div className="p-6 border border-gray-300 flex justify-start items-start rounded-[10%] h-[230px] bg-white w-full lg:w-[63%] max-w-[930px] lg:mx-0 mx-auto">
    <div className="grid grid-cols">
      {/* Get Assisted */}
      <div className="flex items-center gap-5 mr-[5%] justify-end">
        {/* Icon */}
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
          <img src="tick.svg" alt="Get Assisted" className="w-8 h-8 object-cover" />
        </div>
        {/* Text Content */}
        <div>
          <p className="text-lg font-semibold">500+</p>
          <p className="text-sm text-gray-600">Get Assisted</p>
        </div>
      </div>
      {/* Vertical Line */}
      <div className="flex justify-center items-center mx-5">
        <div className="h-12 w-[2px] bg-gray-300"></div>
      </div>

      {/* Collaborations */}
      <div className="flex items-center gap-5 justify-start">
        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
          <img src="deal.png" alt="Collaborations" className="w-8 h-8 object-cover" />
        </div>
        <div>
          <p className="text-lg font-semibold">10+</p>
          <p className="text-sm text-gray-600">Collaborations</p>
        </div>
      </div>

      {/* Divider */}
      <div className="col-span-3 my-8 flex flex-col-4">
        <div className="w-[45%] border-t-2 border-gray-300"></div>
        <div className="w-[15%]"></div>
        <div className="w-[45%] border-t-2 border-gray-300"></div>
      </div>

      {/* Average Salary */}
      <div className="flex items-center gap-5 justify-end">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
          <img src="coin.png" alt="Average Salary" className="w-8 h-8 object-cover" />
        </div>
        <div>
          <p className="text-lg font-semibold">6 LPA</p>
          <p className="text-sm text-gray-600">Average Salary</p>
        </div>
      </div>
      {/* Vertical Line */}
      <div className="flex justify-center items-center mx-5">
        <div className="h-14 w-[2px] bg-gray-300"></div>
      </div>

      {/* Highest Salary */}
      <div className="flex items-center gap-5 justify-start">
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
          <img src="salary.png" alt="Highest Salary" className="w-8 h-8 object-cover" />
        </div>
        <div>
          <p className="text-lg font-semibold">18 LPA</p>
          <p className="text-sm text-gray-600">Highest Salary</p>
        </div>
      </div>
    </div>
  </div>
</div>

          {/* Right Section */}
          <div className=" w-[40%] p-6  bg-white border border-gray-200 rounded-4xl shadow-md">
  <h1 className="text-left text-2xl font-bold mb-6">Let's get in touch</h1>
  <form className="space-y-3">
    {/* Name */}
    <div className="flex flex-col gap-1">
      <label className="text-gray-700 text-sm font-medium">Name</label>
      <input type="text" placeholder="Enter your full name" className="w-full p-1 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>

    {/* Mobile Number */}
    <div className="flex flex-col gap-1">
      <label className="text-gray-700 text-sm font-medium">Mobile Number</label>
      <input type="tel" placeholder="Enter your 10-digit mobile number" className="w-full p-1 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>

    {/* Email */}
    <div className="flex flex-col gap-1">
      <label className="text-gray-700 text-sm font-medium">Email ID</label>
      <input type="email" placeholder="Enter your email address" className="w-full p-1 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>

    {/* Highest Graduation */}
    <div className="flex flex-col gap-1">
      <label className="text-gray-700 text-sm font-medium">Highest Graduation</label>
      <input type="text" placeholder="Enter your highest graduation" className="w-full p-1 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>

    {/* Start Date & End Date */}
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col gap-1 w-full">
        <label className="text-gray-700 text-sm font-medium">Start Date</label>
        <input type="date" className="w-full p-1 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label className="text-gray-700 text-sm font-medium">End Date</label>
        <input type="date" className="w-full p-1 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
    </div>

    {/* Referral Code */}
    <div className="flex flex-col gap-1">
      <label className="text-gray-700 text-sm font-medium">Referral Code</label>
      <input type="text" placeholder="Enter your referral code" className="w-full p-1 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>

    {/* Submit Button */}
    <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition duration-200">
      Submit
    </button>
  </form>
</div>
      </div>
  )
}
