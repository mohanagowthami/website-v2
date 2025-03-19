export const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center px-5 sm:px-10 py-4 bg-white border-b border-gray-300 fixed top-0 left-0 z-50 w-full">
      {/* Logo Section */}
      <div className="text-center sm:text-left">
        <h1 className="text-[#175CD3] text-2xl md:text-3xl font-bold">HyperSonic</h1>
        <p className="text-[#98a1B2] text-sm md:text-base">Training and Consultancy Services</p>
      </div>

      {/* Navigation */}
      <nav className="mt-2 sm:mt-0">
        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
          <li><a href="#mainone" className="text-blue-500 text-sm md:text-base font-bold hover:underline scroll-mt-[100px]">Home</a></li>
          <li><a href="#programs" className="text-blue-500 text-sm md:text-base font-bold hover:underline scroll-mt-[100px]">Programs</a></li>
          <li><a href="#why-us" className="text-blue-500 text-sm md:text-base font-bold hover:underline scroll-mt-[100px]">Why Us</a></li>
          <li><a href="#testimonials" className="text-blue-500 text-sm md:text-base font-bold hover:underline scroll-mt-[100px]">Testimonials</a></li>
          <li><a href="#faqs" className="text-blue-500 text-sm md:text-base font-bold hover:underline scroll-mt-[100px]">FAQ's</a></li>
        </ul>
      </nav>
    </header>
  );
};
