import  {  useState } from 'react'
import Education from './Education';
import Skills from './Skills';


const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
     <a href="https://drive.google.com/file/d/1P72shOs2kdswoRjbycH-EUbmz6I5nJty/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
       <button className='text-xl bg-sky-800 text-white rounded-md p-3'>view Resume</button>
       </a>
      <div className="flex justify-center items-center text-center">
      </div>
      <div>
        <ul className="text-3xl text-center mt-10 text-white flex flex-row justify-evenly">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) 
            }
            className={`${
              educationData
                ? "border-designcolor"
                : "border-transparent"
            } resumeLi bg-sky-900 h-20 w-6/12 hover:border-red-600 hover:border-2 hover:rounded-lg hover:cursor-pointer`}
          >
            <h5 className='mt-5 px-20'> Education</h5>
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) 
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi bg-sky-900 h-20 w-6/12 hover:border-red-600 hover:border-2 hover:rounded-lg hover: cursor-pointer `}
          >
            <h5 className='mt-5 px-20'> Skills</h5>
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      
 
    </section>
  );
}

export default Resume