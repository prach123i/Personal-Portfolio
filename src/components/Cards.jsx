/* eslint-disable react/prop-types */
// import React from "react";

export default function Cards(props){
    return(
        <div className="card bg-sky-950 shadow-md shadow-current hover:text-white p-7 rounded-md mb-5 mt-10 h-80 py-5 hover:bg-black transition-colors duration-100 group">
            <div className=" h-72 overflow-y-hiddens">
                <div className="flex h-full flex-col gap-5 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
            <h1 className="text-5xl px-5 text-red-600">{props.icon}</h1>
            <h1 className="text-2xl text-left mx-6 text-white font-bold">{props.title}</h1>
            <p className="mx-6 text-left text-white">{props.description}</p>
            <p className="text-xl px-5 text-red-600">{props.svg}</p>
            </div>
            </div>
        </div>
    )
}

