import  { useState } from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email).toLocaleLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please provide your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Please provide a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please provide a Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      // Send email using EmailJS
      emailjs.sendForm('service_7rllh6j', 'template_c9iiqip', e.target, 'vDG4OP_0sjtP8IpH2')
        .then((result) => {
          console.log(result.text);
          setSuccessMsg(`Thank you, ${username}! Your message has been sent successfully!`);
        }, (error) => {
          console.log(error.text);
          setErrMsg("Failed to send the message. Please try again.");
        });

      // Clear form fields
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <>
      <section className="w-full py-20">
        <div className="flex flex-col justify-center text-center py-20">
          <p className="text-red-600 ">Contact</p>
          <p className="text-6xl text-white mt-5">Let's Connect</p>
        </div>
        <div className="w-full flex flex-row gap-10 h-4/5 ">
          <div className="w-4/5 bg-sky-900 rounded-lg p-10 text-left text-gray-900 text-md">
            <img className="rounded-lg" src="./img/contact.jpg" alt="Contact" />
            <p className="text-left text-4xl font-bold mt-5 text-white">Prachi Sharma</p>
            <p className="text-left text-lg">BE Student</p>
            <p className="text-left">
I am a highly motivated and dedicated individual seeking a challenging software engineering position at a reputable organization. With a proven track record of solving over 350 DSA questions on LeetCode and a solid foundation in low-level system design, I am eager to apply my problem-solving skills and technical expertise to contribute to innovative projects. I am looking for an opportunity where I can both leverage my skills and be mentored towards a successful and impactful career in software engineering.
            </p>
            <h2>Phone: +916378113537</h2>
            <h3>Email: prachi61975@gmail.com</h3>
            <p className="mt-5">FIND ME ON</p>
            <div className="icons flex gap-5 mt-2 text-3xl ">
              <AiFillLinkedin />
              <AiFillGithub />
              <AiFillMail />
            </div>
          </div>
          <div className="w-full ml-10 flex flex-col h-4/5 bg-sky-900 rounded-lg p-5">
            <form onSubmit={handleSend} className="flex flex-col gap-5">
              <div className="flex flex-row gap-10 pt-5 text-left">
                <div className="text-white flex flex-col h-30 w-30">
                  <p className="text-gray-400 mb-3">YOUR NAME</p>
                  <input
                    className="text-red-600 h-10 w-80 bg-gray-800 rounded-lg p-3"
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <p className="text-gray-400 mb-3">PHONE NUMBER</p>
                  <input
                    className="h-10 w-80 text-red-600 bg-gray-800 rounded-lg p-3"
                    type="text"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="text-left">
                <p className="text-left py-3 text-gray-400">EMAIL</p>
                <input
                  className="h-10 w-full text-red-600 bg-gray-800 rounded-lg p-3"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="text-left">
                <p className="text-left py-3 text-gray-400">SUBJECT</p>
                <input
                  className="h-10 w-full text-red-600 bg-gray-800 rounded-lg p-3"
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="text-left">
                <p className="text-left py-3 text-gray-400">MESSAGE</p>
                <textarea
                  className="contactTextArea h-32 w-full mb-7 text-red-600 bg-gray-800 rounded-lg p-3"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  cols="30"
                  rows="8"
                  required
                />
              </div>
              <div>
                {errMsg && <p className="text-red-500">{errMsg}</p>}
                {successMsg && <p className="text-green-500">{successMsg}</p>}
                <button
                  className="text-center text-gray-600 bg-black rounded-lg h-10 w-full mb-10 hover:border-red-600 hover:border-[1px]"
                  type="submit"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
