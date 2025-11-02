import React from "react";

{/* -------<<< Footer >>>------- */}

function Footer() {

  return (

    <footer className="sticky bottom-0 bg-white border-t border-gray-300 py-3 text-center shadow-inner shadow-gray-200 mt-10">

      <p className="text-gray-600 text-[16px]">
        <span className="font-medium text-gray-800">© {new Date().getFullYear()} </span>
        <span className="font-semibold text-gray-800">
          Todo<span className="text-blue-600">App</span>
        </span>
        <span className="font-medium text-[14px] text-gray-800"> — Built with using React & Tailwind CSS</span>
      </p>
        
    </footer>

  )
    

}

export default Footer