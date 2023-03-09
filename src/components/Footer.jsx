import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiSmartphone } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="app-style mt-4 text-primary border-t-2 p-4 border-primary">
      <div className="grid grid-rows-2 gap-2 justify-center bottom-0">
        <h2 className="text-xl text-center">Connect with me</h2>
        <div className="flex flex-between gap-4 items-center">
          <span className="grid grid-flow-col">
            <MdEmail className="text-3xl" />: azizahmed.dev@gmail.com
          </span>
          <a
            href="https://github.com/a-ziz"
            className="cursor-pointer text-4xl rounded-full hover:bg-icon hover:text-[#ffffff]"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/azizahmed-dev/"
            className="cursor-pointer text-4xl hover:bg-icon hover:text-[#ffffff]"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="flex mx-auto">
          <span className="grid grid-flow-col">
            <GiSmartphone className="text-2xl" />: 716-305-9294
          </span>
          <a href="#/" className="mx-6 hover:text-hoverblue">
            View Resume
          </a>
        </div>
        <div className="flex mx-auto">
          <p>2023 &copy; Designed by Aziz Ahmed.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
