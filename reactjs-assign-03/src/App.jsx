import React from "react";
import Navbar from "./components/navbar";
import Section from "./components/section";
import Footer from "./components/footer";

function TodoApp() {

  return (

    <div className="flex flex-col h-screen justify-between">
      
      <Navbar />
      <Section />
      <Footer />
      
    </div>

  );
  
}

export default TodoApp