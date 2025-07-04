import Projectcards from "./Projectcards";
import {AiFillGithub } from "react-icons/ai";
export default function Project(){
    return(
        <>
        <div className="projects">
  <h3 className="mt-10 text-red-700">CHECK THESE OUT ON MY GITHUB</h3>
  <h1 style={{fontWeight:"bold", fontSize:"50px", color:"white"}}>My Projects</h1>
  </div>
  <div className="cardscontainer grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-20">
  <Projectcards
    icon={
      <a href="https://dsa-hub-qc4u.onrender.com" target="_blank" rel="noreferrer">
        <img className="h-30 w-50" src="./img/dsa1.png" alt="DSA HUB" />
      </a>
    }
  title="DSA HUB"
  giticon={<a href="https://github.com/prach123i/final_dsa_hub.git" target="_blank" rel="noreferrer"><AiFillGithub/></a>}
  description="DSA Hub is a platform where users can practice LeetCode questions categorized by patterns. It helps in mastering Data Structures and Algorithms by providing a structured approach to problem-solving."
  />
  <Projectcards
  icon= {<img className="h-30 w-50" src="./img/tictoe_img.png" alt="hello"/>}
  title="Tic-toe-tac"
  giticon={<a href="https://github.com/prach123i/Tic-Toe-Tac-Game.git" target="_blank" rel="noreferrer"><AiFillGithub/></a>}
  description="This is a game creating using a React and Tailwind css. "
  />
  <Projectcards
    // icon={<img className="h-30 w-50" src="./img/port.png"/>}
    icon={
      <a href="https://personal-portfolio-drab-rho-74.vercel.app/" target="_blank" rel="noreferrer">
        <img className="h-30 w-50" src="./img/port.png" alt="DSA HUB" />
      </a>
    }
  title="Portfolio Website"
  giticon={<AiFillGithub/>}
  description="This is a portfolio website creating using React, Tailwind css. Basically this is a website which tell about me."
  />
  <Projectcards
  icon={<img className="h-30 w-50" src="./img/spotify.png"/>}
  title="Spotify Clone"
  giticon={<a href="https://github.com/prach123i/Spotify-clone.git" target="_blank" rel="noreferrer"><AiFillGithub/></a>}
  description="This is a song website creating using HTML, CSS and Javascript. Using this user play the songs which i mentioned their"
  />
  </div>
        </>
    )
}