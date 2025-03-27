// const RequestCallbackButton=()=>{
  
//   return (
//   <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-extrabold hover:bg-blue-700 transition">
//        Request Call Back
//      </button>

//   ); 
// }

// export default RequestCallbackButton;

"use client";

const RequestCallbackButton = ({ alignRight = true, className = "" }) => {
  const handleScroll = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      const offsetTop = formSection.offsetTop;
      window.scrollTo({
        top: offsetTop - 200,
        behavior: "smooth",
      });

      // Add animation class after scroll
      setTimeout(() => {
        formSection.classList.add("animate-fade-in");
      }, 800); // Delay to match scroll duration
    }
  };

  return (
    <>
      <style jsx global>{`
        /* Button animations */
        .animated-request-button {
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          transform: translateY(0);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }
        .animated-request-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2);
        }
        .animated-request-button:active {
          transform: translateY(1px);
        }
        .animated-request-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }
        .animated-request-button:hover::after {
          transform: translateX(100%);
        }
        
        /* Form fade-in animation */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        /* Pulse animation for attention */
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-pulse-once {
          animation: pulse 0.5s ease-in-out;
        }
      `}</style>

      <div className={`w-full flex ${alignRight ? "justify-end" : "justify-center"} py-10 ${className}`}>
        <button
          onClick={handleScroll}
          className="animated-request-button px-6 py-3 bg-blue-600 text-white rounded-lg font-extrabold hover:bg-blue-700 transition"
          onMouseEnter={(e) => e.currentTarget.classList.add("animate-pulse-once")}
          onAnimationEnd={(e) => e.currentTarget.classList.remove("animate-pulse-once")}
        >
          Request Call Back
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 inline-block ml-2 transition-transform group-hover:translate-x-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default RequestCallbackButton;