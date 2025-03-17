export const LeftRightSection=()=>{
    return (
        <div className="flex flex-col lg:flex-row gap-10 my-8 mx-5 lg:mx-20 items-center lg:items-start">
        {/* Left Section */}
        <div className="lg:w-1/2 w-full p-5 text-center lg:text-left">
          <h2 className="text-3xl lg:text-5xl text-gray-800 font-semibold leading-tight">Level Up Your Skills and</h2>
          <h1 className="text-2xl lg:text-4xl text-blue-500 font-bold mb-3">Land Your Dream Job</h1>
          <p className="text-gray-600 text-lg mb-6">
            Master industry-standard skills through expert-led teaching, hands-on training, real-world projects, and personalized mentorship.
          </p>
          <div className="p-5 border border-gray-300 rounded-lg shadow-md bg-white grid grid-cols-2 gap-5">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-blue-600 mb-1"></div>
              <p className="text-lg font-semibold">500+</p>
              <p className="text-sm text-gray-600">Get Assisted</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-blue-600 mb-1"></div>
              <p className="text-lg font-semibold">10+</p>
              <p className="text-sm text-gray-600">Collaborations</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-blue-600 mb-1"></div>
              <p className="text-lg font-semibold">6 LPA</p>
              <p className="text-sm text-gray-600">Average Salary</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-blue-600 mb-1"></div>
              <p className="text-lg font-semibold">18 LPA</p>
              <p className="text-sm text-gray-600">Highest Salary</p>
            </div>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="lg:w-1/2 w-full p-5 bg-white rounded-lg shadow-md">
          <h1 className="text-center mb-5 text-xl font-bold">Let's get in touch</h1>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-2 border border-gray-300 rounded-md" />
            <input type="tel" placeholder="Mobile Number" className="w-full p-2 border border-gray-300 rounded-md" />
            <input type="email" placeholder="Email Address" className="w-full p-2 border border-gray-300 rounded-md" />
            <input type="text" placeholder="Highest Graduation" className="w-full p-2 border border-gray-300 rounded-md" />
            <div className="flex flex-col md:flex-row gap-4">
              <input type="date" className="w-full p-2 border border-gray-300 rounded-md" />
              <input type="date" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <input type="text" placeholder="Referral Code (Optional)" className="w-full p-2 border border-gray-300 rounded-md" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-700">Submit</button>
          </form>
        </div>
      </div>
    )
} 