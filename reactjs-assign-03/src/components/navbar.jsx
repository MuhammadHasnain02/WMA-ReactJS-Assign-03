import React from "react";

{/* -------<<< Navbar >>>------- */}

function Navbar() {

    return (

        <nav className="sticky top-0 bg-white flex flex-col items-center w-full shadow-lg py-2 border-b border-gray-200 mb-10">
            
            <div className="flex items-center gap-3">

                <div className="w-16">
                    <img src="./logo.png" alt="" />
                </div>
                <div>
                    <h1 className="text-[26px] font-semibold text-gray-800">Todo<span className="text-blue-600">App</span></h1>
                    <p className="text-[14px] font-medium text-gray-700 -mt-1.5">organize your day</p>
                </div>

            </div>
            
        </nav>

    )
    

}

export default Navbar