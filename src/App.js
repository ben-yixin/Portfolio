import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "tailwindcss/tailwind.css"
//import { Link } from 'react-router';
function App() {
  return (
  <main>
    <Navbar/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
  </main>
  );
}

export default App;

