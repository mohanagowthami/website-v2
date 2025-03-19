export const LeftRightSection = () => {
  return (
      <div className="flex flex-col lg:flex-row gap-20 my-8 mx-5 lg:mx-20 items-center lg:items-start pt-[100px]">
          {/* Left Section */}
          <div className="lg:w-1/2 w-full p-5 text-center lg:text-left">
              <h1 className="text-3xl lg:text-[36px] text-gray-800 font-semibold leading-tight">
                  Level Up Your Skills and
                  <span className="text-2xl lg:text-4xl text-blue-500 font-bold mb-3"> Land Your Dream Job </span>
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                  Master industry-standard skills through expert-led teaching, hands-on training, real-world projects, and personalized mentorship.
              </p>
              
              <div className="p-6 border border-gray-300 rounded-[5%] h-[250px] bg-white w-full max-w-[930px] mx-auto ">
                <div className="grid grid-cols">
                {/* Get-assisted */}
              <div className="flex  items-center gap-5   mr-[5%] justify-end">
               {/* Icon */}
               <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center ">
                        <img src="tick.svg" alt="Collaborations" className="w-8 h-8 object-cover" />
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
                  <div className="flex   items-center gap-5 justify-start ">
                      <div className="w-10 h-10 rounded-full  bg-yellow-100 flex items-center justify-center">
                        <img src="deal.png" alt="Collaborations" className="w-8 h-8 object-cover" />
                      </div>
                      <div>
                      <p className="text-lg font-semibold">10+</p>
                      <p className="text-sm text-gray-600">Collaborations</p>
                      </div>
                  </div>
                           {/* Divider */}
                         <div className="col-span-3   justify-center my-8  flex flex-col-4 ">
                            <div className="w-[45%] border-t-2 border-gray-300 " ></div>
                            <div className="w-[15%]  " ></div>
                            <div className="w-[45%] border-t-2 border-gray-300 " ></div>
                         </div>
                        {/* Average salary */}

                  <div className="flex   items-center gap-5 justify-end">
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
                  {/* Highestsalary */}
                  <div className="flex   items-center gap-5 justify-start">
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
          <div className="lg:w-1/2 w-full p-4 bg-white border border-gray-200 rounded-[4%] shadow-md ">
              <h1 className="text-left lg:text-[28px] sm:text-[24px] mb-5 text-xl font-bold">Let's get in touch</h1>
              <form className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-[16px] text-gray-[#475466]"> Name</label>
                  <input type="text" placeholder="Full Name" className="w-full p-2 border border-gray-200  text-gray-300 rounded-md" />
                  </div>
                  <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-[16px] text-gray-[#475466]"> Mobile Number</label>
                  <input type="tel" placeholder="Mobile Number" className="w-full p-2 border border-gray-200  text-gray-300 rounded-md" />
                  </div>
                  <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-[16px] text-gray-[#475466]"> Email Address</label>
                  <input type="email" placeholder="Email Address" className="w-full p-2 border border-gray-200 text-gray-300 rounded-md" />
                  </div>
                  <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-[16px] text-gray-[#475466]"> Highest Graduation</label>
                  <input type="text" placeholder="Highest Graduation" className="w-full p-2 border border-gray-200  text-gray-300 rounded-md" />
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                  <label htmlFor="fullName" className="text-[16px] text-gray-[#475466]"> Date of Birth</label>
                      <input type="date" className="w-[50%] p-2 border border-gray-200 text-gray-300 rounded-md" />
                      <input type="date" className="w-[50%] p-2 border border-gray-200 text-gray-300 rounded-md" />
                  </div>
                  <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-[16px] text-gray-[#475466]"> Referral Code (Optional)</label>
                  <input type="text" placeholder="Referral Code (Optional)" className="w-full p-2 border border-gray-200  rounded-md text-gray-300" />
                  </div>
                  <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-[90%] ml-[5%]  hover:bg-blue-700">Submit</button>
              </form>
          </div>
      </div>
  )
}
