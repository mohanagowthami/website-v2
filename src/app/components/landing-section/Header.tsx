export  const Header=()=>{
    return (
        <header className="flex flex-col sm:flex-row justify-between items-center px-[20px] sm:px-[40px] py-[20px] bg-white border-b border-gray-300">
        {/* Logo Section */}
        <div className="ml-0 text-center sm:ml-[60px] sm:text-left">
          <h1 className="text-[#1a73e8] text-[30px] sm:text-[40px] font-bold mb-[5px]">
            HyperSonic
          </h1>
          <p className="text-gray-600 text-[13px] sm:text-[15px] sm:ml-[50px]">
            Training and Consultancy Services
          </p>
        </div>
  
        {/* Navigation */}
        <nav className="mt-4 sm:mt-0">
          <ul className="flex flex-col sm:flex-row gap-[20px] sm:gap-[50px] items-center">
            <li><a href="#mainone" className="text-[#1a73e8] text-[16px] sm:text-[18px] font-bold hover:underline">Home</a></li>
            <li><a href="#programs" className="text-[#1a73e8] text-[16px] sm:text-[18px] font-bold hover:underline">Programs</a></li>
            <li><a href="#why-us" className="text-[#1a73e8] text-[16px] sm:text-[18px] font-bold hover:underline">Why Us</a></li>
            <li><a href="#testimonials" className="text-[#1a73e8] text-[16px] sm:text-[18px] font-bold hover:underline">Testimonials</a></li>
            <li><a href="#faqs" className="text-[#1a73e8] text-[16px] sm:text-[18px] font-bold hover:underline">FAQ's</a></li>
          </ul>
        </nav>
      </header>
    )
} 



