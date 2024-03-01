import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { LiaReact } from "react-icons/lia";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoJava } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { Cursor, useTypewriter } from "react-simple-typewriter";

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
      <div className="cont1 h-500 w-10/6  leading-10 text-white text-left">
        <h1 className="text-6xl font-bold my-10 text-left">
          Hi, I'm <span className="text-red-700">Prachi Sharma</span>
        </h1>
        <h2 className="text-4xl font-bold text-white text-left my-5">
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
        <div className="subcont flex start p-12 font-bold ml-16 mt-6">
          <div className="subcont1 mr-72 text-xl  ">
            <h2>FIND ME ON</h2>
            <div className="icons flex justify-evenly mt-2 text-3xl  gap-5 ">
              <a href="https://www.linkedin.com/in/prachi-sharma-5682a3253/" target="_blank"> <AiFillLinkedin/></a>
              <a href="https://github.com/prach123i" target="_blank"><AiFillGithub/></a>
              <AiFillMail/>
            </div>
          </div>
          <div className="subcont2 text-xl ">
            <h3>BEST WEB STACK</h3>
            <div className="icons flex justify-evenly mt-2 text-3xl  gap-5">
              <LiaReact />
              <SiTailwindcss />
              <BiLogoJava />
              <RiJavascriptFill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LeftBanner;
