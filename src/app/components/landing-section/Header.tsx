// export const Header = () => {
//   return (
//     <header className="flex flex-col sm:flex-row justify-between items-center px-5 sm:px-10 py-4 bg-white border-b border-gray-300 fixed top-0 left-0 z-50 w-full">
//       {/* Logo Section */}
//       <div className="text-center sm:text-left">
//         <h1 className="text-[#175CD3] text-2xl md:text-3xl font-bold">HyperSonic</h1>
//         <p className="text-[#98a1B2] text-sm md:text-base">Training and Consultancy Services</p>
//       </div>

//       {/* Navigation */}
//       <nav className="mt-2 sm:mt-0">
//         <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
//           <li><a href="#mainone" className="text-blue-500 text-sm md:text-base font-bold hover:underline scroll-mt-[100px]">Home</a></li>
//           <li><a href="#programs" className="text-blue-500 text-sm md:text-base font-bold hover:underline scroll-mt-[100px]">Programs</a></li>
//           <li><a href="#why-us" className="text-blue-500 text-sm md:text-base font-bold hover:underline scroll-mt-[100px]">Why Us</a></li>
//           <li><a href="#testimonials" className="text-blue-500 text-sm md:text-base font-bold hover:underline scroll-mt-[100px]">Testimonials</a></li>
//           <li><a href="#faqs" className="text-blue-500 text-sm md:text-base font-bold hover:underline scroll-mt-[100px]">FAQ's</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };




// export const Header = () => {
//   return (
//     <header className="flex flex-col sm:flex-row justify-between items-center sm:px-16 px-4 py-5 bg-white border-b border-gray-300 fixed top-0 left-0 w-full z-50">
//       {/* Logo Section */}
//       <div className="text-center sm:text-left mb-4 sm:mb-0">
//         <h1 className="text-[#175CD3] text-[35px] font-bold">HyperSonic</h1>
//         <p className="text-[#98A1B2] text-[12px]">Training and Consultancy Services</p>
//       </div>

//       {/* Navigation */}
//       <nav>
//         <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
//           <li><a href="#mainone" className="text-[#53B0FD] text-[12px] font-semibold hover:underline">Home</a></li>
//           <li><a href="#programs" className="text-[#53B0FD] text-[12px] font-semibold hover:underline">Programs</a></li>
//           <li><a href="#why-us" className="text-[#53B0FD] text-[12px] font-semibold hover:underline">Why Us</a></li>
//           <li><a href="#testimonials" className="text-[#53B0FD] text-[12px] font-semibold hover:underline">Testimonials</a></li>
//           <li><a href="#faqs" className="text-[#53B0FD] text-[12px] font-semibold hover:underline">FAQ's</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };


export const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center sm:px-16 px-4 py-3 bg-white border-b border-gray-300 fixed top-0 left-0 w-full z-50">
      {/* Logo Section */}
      <div className="text-center sm:text-left mb-4 sm:mb-0">
        <h1 className="text-[#175CD3] text-[34px] font-bold">HyperSonic</h1>
        <p className="text-gray-500 text-[12px]">Training and Consultancy Services</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <a href="./#hero" className="text-blue-400 text-[16px] font-semibold hover:underline">Home</a>
        <a href="./#programs" className="text-blue-400 text-[16px] font-semibold hover:underline">Programs</a>
        <a href="./#why-hypersonicc" className="text-blue-400 text-[16px] font-semibold hover:underline">Why Us</a>
        <a href="./#testimonials" className="text-blue-400 text-[16px] font-semibold hover:underline">Testimonials</a>
        <a href="./#faqs" className="text-blue-400 text-[16px] font-semibold hover:underline">FAQ’s</a>
      </nav>
    </header>
  );
};