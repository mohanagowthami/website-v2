

export function Contentsection(){
    return (
        
      /* Content Section */
      <div className="flex flex-col md:flex-row   gap-5 w-1/2  ml-14 p-4">
      {/* Left Section - List */}
      <div className="lg:text-[22px] sm:text-[16px] md:text-[16px] text-gray-500 space-y-4 ">

<ul className="space-y-3">
<li className="hover:text-blue-600 hover:translate-x-1 transition-all duration-300"><span className="flex items-center gap-2">
    <img src="../../video-player-movie-svgrepo-com.svg" alt="video icon" className="w-6 h-6" /> Live Learning Sessions </span> </li>

        <li className="hover:text-blue-600 hover:translate-x-1 transition-all duration-300"><span className="flex items-center gap-2"> <img src="../../laptop-svgrepo-com.svg" alt="video icon" className="w-7 h-7 " /> Hands-On Projects</span></li>
         <li className="hover:text-blue-600 hover:translate-x-1 transition-all duration-300"> <span className="flex items-center gap-2"> <img src="../../male-student-studying-question-svgrepo-com.svg" alt="video icon" className="w-7 h-7" />Quick Doubt Solving</span></li>
          <li className="hover:text-blue-600 hover:translate-x-1 transition-all duration-300"><span className="flex items-center gap-2"> <img src="../../teamwork-team-svgrepo-com.svg" alt="video icon" className="w-7 h-7" />  Learn From Industry Experts</span></li>
          <li className="hover:text-blue-600 hover:translate-x-1 transition-all duration-300"><span className="flex items-center gap-2"> <img src="../../skills-svgrepo-com.svg" alt="video icon" className="w-7 h-7" /> Weekly Challenging Contests</span></li>
        </ul>
                
        
      </div>
      </div>

 );
        
}