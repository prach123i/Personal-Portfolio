import React from "react";
import Projectcards from "./projectcards";
import {AiFillGithub } from "react-icons/ai";
export default function Project(){
    return(
        <>
        <div className="projects">
  <h3 className="mt-10 text-red-700">CHECK THESE OUT ON MY GITHUB</h3>
  <h1 style={{fontWeight:"bold", fontSize:"50px", color:"white"}}>My Projects</h1>
  </div>
  <div className="cardscontainer grid grid-cols-1 md:grid-cols-3 xl:gap-20">
  <Projectcards
  icon= {<img className="h-30 w-50" src="./img/tictoe_img.png" alt="hello"/>}
  title="Tic-toe-tac"
  giticon={<a href="https://github.com/prach123i/Tic-Toe-Tac-Game.git" target="_blank"><AiFillGithub/></a>}
  description="This is a game creating using a React and Tailwind css. "
  />
  <Projectcards
    icon={<img className="h-30 w-50" src="./img/port.png"/>}
  title="Portfolio Website"
  giticon={<AiFillGithub/>}
  description="This is a portfolio website creating using React, Tailwind css. Basically this is a website which tell about me."
  />
  <Projectcards
  icon={<img className="h-30 w-50" src="./img/spotify.png"/>}
  title="Spotify Clone"
  giticon={<a href="https://github.com/prach123i/Spotify-clone.git" target="_blank"><AiFillGithub/></a>}
  description="This i a song website creating using HTML, CSS and Javascript. Using this user play the songs which i mentioned their"
  />
  </div>
        </>
    )
}