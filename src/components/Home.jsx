import React from "react";
import Leftbanner from "./Leftbanner";
import Rightbanner from "./Rightbanner";
export default function Home(){
  return (
    <div>
      <div className="container flex justify-around text-black">
      <Leftbanner/>
      <Rightbanner/>
      </div>
    </div>
  );
}