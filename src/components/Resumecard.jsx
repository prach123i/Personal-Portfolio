import React from "react";
export default function Resumecard(props){
    return(
        <>
        <div  className="text-left  bg-sky-950 shadow-md shadow-current hover:text-white hover:bg-black h-3/6 flex flex-col w-full p-6 rounded-lg gap-4">
        <h3 className="text-3xl font-bold ">{props.title}</h3>
        <div className="flex flex-row">
        <h5 >{props.subtitle}</h5>
        <p className=" text-red-700 bg-black rounded-lg ml-20 p-1 mx-6">{props.result}</p>
        </div>
        <p>{props.des}</p>
        </div>
        </>
    )
}