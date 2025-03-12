import { useState } from "react";
import { Link } from "react-scroll";
import { navLinksdata } from "./index.jsx";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-sky-950 h-20 rounded-lg sticky top-0 z-50 flex justify-between items-center px-4 md:px-10">
 

      {/* Hamburger Menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white text-3xl md:hidden z-50"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Navbar Links */}
      <div
        className={`absolute md:relative top-0 ml-auto w-full md:w-auto bg-sky-950 md:bg-transparent md:flex transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        } z-40`}
      >
        <ul className="flex flex-col md:flex-row gap-5 md:gap-10 p-5 md:p-0 items-center">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="font-normal text-white tracking-wide cursor-pointer text-xl text-center duration-300 hover:text-red-600"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
