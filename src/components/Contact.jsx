import React from "react";
import { useState } from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

const Contact=()=>{
const[username, setUsername] = useState("");
const[phoneNumber, setPhoneNumber] = useState("");
const[email,setEmail] = useState("");
const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

{/* =============Email verification============= */}
const emailValidation=()=>{
    return String(email).toLocaleLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
}
{/*====end====*/}
const handleSend=(e)=>{
    e.preventDefault();
    if(username === ""){
        setErrMsg("Username is required!");
    }
    else if(phoneNumber===""){
        setErrMsg("Phone number is required!");
    }
    else if(email===""){
        setErrMsg("Please give your Email!");
    }
    else if(!emailValidation(email)){
        setErrMsg("Give a valid Email!");
    }
    else if(subject===""){
        setErrMsg("Please give your Subject!");
    }
    else if(message===""){
        setErrMsg("Message is required!");
    }
    else{
        setSuccessMsg(
            `Thank you dear ${username}, Your Messages has been sent Successfully!`
        );
        setErrMsg("");
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
    }
};
    return(
        <>
        <section className="w-full py-20">
        <div className="flex flex-col justify-center text-center py-20">
            <p className="text-red-600 ">Contact</p>
            <p className="text-6xl text-white mt-5">Let's Connect</p>
        </div>
        <div className="w-full flex flex-row gap 10 h-4/5 ">
        <div className="1 w-2/3 bg-sky-900 rounded-lg p-10 text-left text-gray-900 text-md">{/*Helllo*/} 
        <img className="rounded-lg" src="./img/contact.jpg"/>
        <p className="text-left text-4xl font-bold mt-5 text-white">Prachi Sharma</p>
        <p className="text-left text-lg">BE Student</p>
        <p className="text-left "> A highly motivated and hardworking individual looking for a
          responsible role in a reputable organization. I am seeking a role in a
          company where I can contribute my ideas and be mentored towards a
          successful career.</p>
          <h2>Phone: +916378113537</h2>
          <h3>Email: prachi61975@gmail.com</h3>
          <p className="mt-5">FIND ME ON</p>
          <div className="icons flex gap-5 mt-2 text-3xl ">
              <AiFillLinkedin />
              <AiFillGithub />
              <AiFillMail />
            </div>
        </div>
        <div className="2 w-full ml-10 flex flex-col h-4/5 bg-sky-900 rounded-lg p-5">{/* world */}
        <div className="gap-10 pt-5 text-left flex flex-row">
        <div className="text-white flex flex-col h-30 w-30 ">
            <p className="text-gray-400 mb-3">YOUR NAME</p>
        <input className="text-red-600 h-10 w-80 bg-gray-800 rounded-lg p-3" type="text"/>
        </div>
        <div >
            <p className="text-gray-400 mb-3">PHONE NUMBER</p>
            <input className="h-10 w-80 text-red-600 bg-gray-800 rounded-lg p-3" type="text"/>
        </div> 
        </div>
        <div className="text-left">
        <p className="text-left py-3 text-gray-400">EMAIL</p>
        <input className="h-10 w-full text-red-600 bg-gray-800 rounded-lg p-3" type="Email"/>
        </div>
        <div className=" text-left">
        <p className="text-left py-3 text-gray-400">SUBJECT</p>
        <input className="h-10 w-full text-red-600 bg-gray-800 rounded-lg p-3" type="subject"/>
        </div>
        <div className="text-left">
            <p className="text-left py-3 text-gray-400">MESSAGE</p>
            <textarea className="false contactTextArea h-32 w-full mb-7 text-red-600 bg-gray-800 rounded-lg p-3" cols="30" rows="8"></textarea>
        </div>
        <div>
            <button className=" text-center text-gray-600 bg-black rounded-lg h-10 w-full mb-10 hover:border-red-600 hover:border-[1px]"> SEND MESSAGE</button>
        </div>
        </div>
        
        </div>
        </section>
        </>
    )
}
export default Contact