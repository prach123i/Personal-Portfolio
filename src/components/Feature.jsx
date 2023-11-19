import React from "react";
import Cards from "./Cards";
import { FaArrowAltCircleDown, FaArrowAltCircleRight, FaArrowRight, FaBars } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { LuBarChart3 } from "react-icons/lu";
import { AiFillAppstore, AiFillLinkedin } from "react-icons/ai";
export default function Features(){
    return(
    <div>
        <div className="feature text-left text-2xl leading-10">
      <h4 className="text-md mt-3 text-red-700 ">Features</h4>
      <h1 className="text-6xl text-white">What I Do</h1>
      </div>
      <div className="cardscontainer grid grid-cols-1 md:grid-cols-3 xl:gap-20">
  <Cards
icon={ <FaBars/>}
  title="Proect Management"
  description="Want to gain real-life experience of managing a complete software project cycle."
  svg={<FaArrowRight/>}
  />
  <Cards
  icon={<MdWeb/>}
  title="Web Development"
  description=" Have developed various projects and hosted them too, check them on my github."
  svg={<FaArrowRight/>}

  />
  <Cards
  icon={<AiFillAppstore/>}
  title="App Development"
  description="will learn this soon in near future"
  svg={<FaArrowRight/>}

  />
  <Cards
  icon={<LuBarChart3/>}
  title="Data Analyst"
  description="will learn this soon in near future"
  svg={<FaArrowRight/>}

  />
  <Cards
  icon={<FaBrain/>}
  title="Machine Learning"
  description="will learn this soon in near future"
  svg={<FaArrowRight/>}

  />
  </div>

    </div>
    )
}