import React from "react";

function TodoApp() {
  return (

    <div className="flex flex-col h-screen justify-between">

      {/* -------<<< Navbar >>>------- */}
      <nav className="flex flex-col items-center w-full shadow-lg py-2 border-b border-gray-200">
        <div className="flex items-center gap-3">

          <div className="w-16">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy1eDovRF0hLYHH1QG9iakiuxcmINKCIklew&s" alt="" />
          </div>
          <div>
            <h1 className="text-[26px] font-semibold text-gray-800">Todo<span className="text-blue-600">App</span></h1>
            <p className="text-[14px] text-gray-700 -mt-1.5">organize your day</p>
          </div>
        </div>
            
      </nav>

      {/* -------<<< Todo Section >>>------- */}
      <section className="flex flex-col items-center">
        
        <div className="w-[90%] max-w-md bg-gray-50 shadow-md rounded-2xl p-6 border border-gray-200">

          {/* Search bar */}
          <input
            type="text"
            placeholder="Search Todos"
            className="w-full border border-gray-300 rounded-lg p-2.5 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Todo items list */}
          <ul className="space-y-3">
            
            <li className="flex justify-between items-center bg-white border border-gray-300 rounded-lg px-3 py-2 shadow-sm">
              <span className="text-gray-800">Buy groceries</span>
              <div className="flex gap-3 text-blue-600">
                <button className="hover:text-blue-800">
                  <i className="fa-solid fa-check"></i>
                </button>
                <button className="hover:text-red-600">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </li>

            <li className="flex justify-between items-center bg-white border border-gray-300 rounded-lg px-3 py-2 shadow-sm">
              <span className="text-gray-800">Finish homework</span>
              <div className="flex gap-3 text-blue-600">
                <button className="hover:text-blue-800">
                  <i className="fa-solid fa-check"></i>
                </button>
                <button className="hover:text-red-600">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </li>
            
          </ul>

          {/* Add new task */}
          <div className="mt-6">
            <p className="text-gray-600 mb-1 text-sm">Add a new todo...</p>
            <input
              type="text"
              placeholder="Enter a task"
              className="w-full border border-gray-300 rounded-lg p-2.5 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-300">
              Add Task
            </button>
          </div>
        </div>

      </section>

      {/* -------<<< Footer >>>------- */}
      <footer className="border-t border-gray-300 py-3 text-center mt-10 shadow-inner shadow-gray-200">

        <p className="text-gray-600 text-[15px]">
          <span className="font-medium text-gray-800">© {new Date().getFullYear()} </span>
          <span className="font-semibold text-gray-800">
            Todo<span className="text-blue-600">App</span>
          </span>
          <span className="font-normal text-gray-800"> — Built with using React & Tailwind CSS</span>
        </p>
        
      </footer>

    </div>




  );
}

export default TodoApp