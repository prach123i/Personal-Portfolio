import React from "react";
import { motion } from "framer-motion";
import Resumecard from "./Resumecard";
const Education = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col md:flex-row gap-10"
      >
        {/*part-1*/}
        <div>
          <div className="text-left py-6 flex flex-col gap-4">
            <p className="text-sm text-red-500">2007-2026</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Educational Qualification</h2>
          </div>
          <div className="mt-6 w-full h-auto border-1-[6px] border-1-black border-opacity-30 flex flex-col gap-10">
            <Resumecard
              title="BTech in Computer Science"
              subtitle="Chandigarh University(2022-2026)"
              result=" 7.5 CGPA "
              des="Studied CSE related subjects like DBMS, Operating System, OOPS, Web Development, DSA, ML"
            />
            <Resumecard
              title="Higher Secondary Education"
              subtitle="Kalpesh Sr. Sec. School(2020-2021)"
              result="97%"
              des="Studied in this school from 11th to 12th std. RBSE Subjects: PCM, English, Hindi."
            />
            <Resumecard
              title="Primary & Secondary School Education"
              subtitle="Kalpesh Sr. Sec. School(2019-2020)"
              result="87%"
              des="Studied in this school from Nursery to 10th std. RBSE Subjects: English, Hindi, Maths, Science, Social Sciences."
            />
          </div>
        </div>
        {/*part-2*/}
        <div>
          <div className="text-left py-6 flex flex-col gap-4">
            <p className="text-sm text-red-500">2022-2026</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Certificates</h2>
          </div>
          <div className="mt-6 w-full h-auto border-1-[6px] border-1-black border-opacity-30 flex flex-col gap-10">
            <Resumecard
              title="Introduction to Product Management"
              subtitle="Coursera"
              result="Online"
              des="Learn How to manage a project and learn leadership skills."
            />
            <Resumecard
              title="Web-Development in JavaScript"
              subtitle="Cousera"
              result="Online"
              des="Learn the concept of JavaScript and i Create projects based on js to learn from this course"
            />
            <Resumecard
              title="Multi-core Computer Archietecture"
              subtitle="NPTEL"
              result="online"
              des="Learn the concept of computer organization and archietecture, internal process of computer"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Education;