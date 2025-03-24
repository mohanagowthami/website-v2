// const RequestCallbackButton=()=>{
  
//   return (
//   <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-extrabold hover:bg-blue-700 transition">
//        Request Call Back
//      </button>

//   ); 
// }

// export default RequestCallbackButton;


const RequestCallbackButton = ({ alignRight = true, className = "" }) => {
  return (
    <div className={`w-full flex ${alignRight ? "justify-end" : "justify-center"} py-10 ${className}`}>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-extrabold hover:bg-blue-700 transition">
        Request Call Back
      </button>
    </div>
  );
};

export default RequestCallbackButton;
