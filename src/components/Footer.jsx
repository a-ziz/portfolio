import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="app-style mt-4 text-primary border-t-2 p-4 border-primary">
      <div className="grid grid-rows-2 gap-2 justify-center bottom-0">
        <div className="flex flex-between gap-4 items-center">
          <h2 className="text-xl">Connect with me</h2>
          <a
            href="https://github.com/a-ziz"
            className="cursor-pointer text-4xl hover:bg-[#000000] p-1 rounded-full hover:text-[#679cfe]"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/azizahmed-dev/"
            className="cursor-pointer text-4xl hover:bg-[#000000] p-1 hover:text-[#679cfe]"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="flex items-center">
          <p>2023 &copy; Designed by Aziz Ahmed.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
