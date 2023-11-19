import React from "react";
import { Link } from "react-scroll";
import { navLinksdata } from "./index.jsx";

const Navbar = () => {
  return (
    <div className="w-full bg-sky-950 h-20 rounded-lg sticky top-0 z-50 flex justify-end items-center">
      <div>
        <ul className=" mdl:inline-flex gap-10 flex flex-row lg:gap-10 items-end">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className=" font-normal text-white tracking-wide cursor-pointer text-2xl text-center duration-300  hover:text-red-600"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
              
            </li>
          ))}
        </ul>
        <hr className="line h-1 bg-black"></hr>
      </div>

    </div>
  );
};

export default Navbar;
