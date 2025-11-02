import React, { useState } from "react";

{/* -------<<< Todo Section >>>------- */}

function Section() {

  let [todos , setTodos] = useState([])
  let [newTodo, setNewTodo] = useState("")
  let [editId, setEditId] = useState("")
  let [searchInp, setsearchInp] = useState("")

  // Handling Add Todos
  function addTodo() {
    if (newTodo.trim === "") return

    if (editId) {
      let updatedTodos = todos.map( todo => todo.id === editId ? {...todo , task : newTodo} : todo )
      setTodos(updatedTodos)
      setEditId(null)
    }
    else {
      setTodos([...todos, { id: Date.now(), task: newTodo }]);
    }

    setNewTodo("");

  }

  // Handling Edit Todos
  function editTodo(id) {

    setEditId(id)
    let todo = todos.find((todo) => todo.id === id)
    setNewTodo(todo.task)

  }

  // Handling Delete Todos
  function delTodo(id) {
    setTodos( todos.filter(todo => todo.id != id) )
  }

  // Handling Search Todos
  function searchTodo() {
    return todos.filter(todo => todo.task.toLowerCase().includes(searchInp.toLowerCase()))
  }

  const filteredTodos = searchTodo();

  return (

    <section className="flex flex-col items-center flex-grow justify-center">
        <div className="w-[90%] space-y-6 max-w-lg bg-white shadow-lg transition-all duration-300 rounded-2xl p-8 border border-gray-200">

          {/* Title */}
          <h2 className="text-[24px] font-bold space-x-2 text-center text-gray-800 tracking-wide">
            
            <i className="fa-solid fa-list-check"></i>
            Your <span className="text-blue-600">Tasks</span>
            
          </h2>

          {/* Search bar */}
          <div className="flex items-center gap-2 ">

            <input type="text" placeholder="Search Todos..." value={searchInp} onChange={(e) => setsearchInp(e.target.value)}
              className="text-[15px] font-medium w-full border border-gray-300 rounded-lg px-4 py-2.5 ring-1 ring-gray-300 ring-offset-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1.5 transition-all duration-500"/>
            <button className="bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-all ease-in-out duration-500 hover:cursor-pointer hover:scale-95">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

          </div>

          {/* Todo items list */}
          <ul className="space-y-3 ">
            
            {filteredTodos.length > 0 ? (
              filteredTodos.map((todo) => (
  
                <li key={todo.id} className="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-all hover:cursor-pointer">

                  <span className="text-gray-800 font-medium">{todo.task}</span>
                  <div className="space-x-2">
                    <button onClick={() => editTodo(todo.id)} className="text-[18px] text-blue-700 duration-400 hover:cursor-pointer">
                      <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button onClick={() => delTodo(todo.id)} className="text-[18px] text-blue-700 duration-400 hover:text-red-600 hover:cursor-pointer">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>

                </li>
                
              )) ) : (
                <li className="text-gray-500 text-center bg-gray-50 border border-gray-200 rounded-lg py-3">
                  No todos found...
                </li>
            )}
            
          </ul>

          {/* Add new task */}
          <div className="">

            <p className="text-gray-600 mb-2 text-sm">Add a new todo...</p>
            <div className="flex gap-2">
              <input type="text" placeholder="Enter a task" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
              className="text-[15px] font-medium w-full border border-gray-300 rounded-lg px-4 py-2.5 ring-1 ring-gray-300 ring-offset-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1.5 transition-all duration-500"/>
              <button onClick={addTodo} className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all ease-in-out duration-500 hover:cursor-pointer hover:scale-95">
                {editId ? "Update" : "Add"}
              </button>
            </div>

          </div>
          
        </div>
    </section>

  )

}

export default Section