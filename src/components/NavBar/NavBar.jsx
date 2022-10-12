import React from "react";
import { RiArrowDownLine } from "react-icons/ri";

const NavBar = () => {
  return (
    <nav className="fixed left-0 top-0 w-full shadow bg-gray-900 z-50">
      <div className="container flex items-center justify-center p-6 mx-auto capitalize text-gray-300">
        <a
          href="#home"
          className="border-b-2 border-transparent hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Home
        </a>
        <a
          href="#about"
          className="border-b-2 border-transparent hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          About me
        </a>

        <a
          href="#projects"
          className="border-b-2 border-transparent hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="border-b-2 border-transparent hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Contact
        </a>
        <a
          href="../../CV - Gonzalo Fara.pdf"
          className="border-b-2 border-transparent hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          <span className="flex items-center gap-px">
            <p>CV</p>
            <RiArrowDownLine />
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
