// import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillCode } from "react-icons/ai";
import { LiaReact } from "react-icons/lia";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoJava } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaNodeJs } from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Front End Developer.",
      "Looking for a responsible role which give me such a great Experience",
      "Wildlife Enthusiast Capturing Wonders Through My Lens 📸",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 5,
    delaySpeed: 2000,
  });
  return (
    <>
      <div className="cont1 h-500 w-full md:w-10/6 leading-10 text-white text-left">
        <h1 className="text-4xl md:text-6xl font-bold my-10 text-left">
          Hi, I'm <span className="text-red-700">Prachi Sharma</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white text-left my-5">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          {" "}
          A highly motivated and hardworking individual looking for a
          responsible role in a reputable organization. I am seeking a role in a
          company where I can contribute my ideas and be mentored towards a
          successful career.
        </p>
        <div className="subcont flex flex-col md:flex-row start p-12 font-bold ml-0 md:ml-16 mt-6">
          <div className="subcont1 text-xl mb-6 md:mb-0 md:mr-72">
            <h2>FIND ME ON</h2>
            <div className="icons flex justify-evenly mt-2 text-3xl gap-5">
              <a href="https://www.linkedin.com/in/prachi-sharma-5682a3253/" target="_blank" rel="noreferrer"> <AiFillLinkedin/></a>
              <a href="https://github.com/prach123i" target="_blank" rel="noreferrer"><AiFillGithub/></a>
              <AiFillMail/>
              <a href="https://leetcode.com/u/prachi61975/" target="_blank" rel="noreferrer"><AiFillCode/></a>
            </div>
          </div>
          <div className="subcont2 text-xl">
            <h3>BEST WEB STACK</h3>
            <div className="icons flex justify-evenly mt-2 text-3xl gap-5">
              <LiaReact />
              <SiTailwindcss />
              <BiLogoJava />
              <RiJavascriptFill />
              <FaNodeJs/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LeftBanner;
