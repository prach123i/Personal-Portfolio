import Cards from "./Cards";
import { FaArrowRight, FaBars } from "react-icons/fa";
import { SiWeb3Dotjs } from "react-icons/si";

import { FaBrain } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { AiFillAppstore} from "react-icons/ai";
export default function Features(){
    return(
    <div>
        <div className="feature text-left text-2xl leading-10">
      <h4 className="text-md mt-3 text-red-700 ">Features</h4>
      <h1 className="text-4xl md:text-6xl text-white">What I Do</h1>
      </div>
      <div className="cardscontainer grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-20">
  <Cards
icon={ <FaBars/>}
  title="Proect Management"
  description="Want to gain real-life experience of managing a complete software project cycle."
  svg={<FaArrowRight/>}
  />
  <Cards
  icon={<MdWeb/>}
  title="Web Development"
  description=" Have developed various projects and hosted them too, check them on my github."
  svg={<FaArrowRight/>}

  />
  <Cards
  icon={<AiFillAppstore/>}
  title="System Design"
  description="Focused on the basics of System design and gradually moving towards advanced topics"
  svg={<FaArrowRight/>}
  />
  <Cards 
  icon={<FaBrain/>}
  title="Problem solving skill"
  description="350+ DSA Questions on leetcode check my leetcode profile"
 svg={<FaArrowRight/>}
  />
  <Cards
  icon={<SiWeb3Dotjs/>}
  title="Blochchain"
  description="have basic knowledge"
  svg={<FaArrowRight/>}

  />
  </div>

    </div>
    )
}