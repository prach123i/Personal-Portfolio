// import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Feature";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
export default function App() {
  return (
    <>
      <div className=" bg-gradient-to-r from-sky-950 to-cyan-950">
        <Navbar/>
        <Home />
        <hr className="line h-0.5 bg-black"></hr>
        <Features />
        <hr className="line h-0.5 bg-black"></hr>
        <Project />
        <hr className="line h-0.5 bg-black"></hr>
        <Resume />
        <hr className="line h-0.5 bg-black"></hr>
        <Contact />
      </div>
    </>
  );
}
