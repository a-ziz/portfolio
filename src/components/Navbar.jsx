import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import * as Scroll from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const scroller = Scroll.scroller;

  const scrollToContact = () => {
    scroller.scrollTo("contact", {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -80,
    });
  };

  const location = useLocation();
  // console.log(location.pathname);

  const scrollToHome = () => {
    if (menu) {
      setMenu(!menu);
    }
    if (location.pathname !== "/") {
      window.scrollTo(0, 0);
    } else {
      scroller.scrollTo("home", {
        duration: 1000,
        delay: 100,
        smooth: true,
        offset: -100,
      });
    }
  };

  const scrollToProject = () => {
    if (location.pathname !== "/projects") {
      window.scrollTo(0, 0);
    } else {
      scroller.scrollTo("projects", {
        duration: 1000,
        delay: 100,
        smooth: true,
        offset: -100,
      });
    }
  };

  const scrollToAbout = () => {
    if (location.pathname !== "/about") {
      window.scrollTo(0, 0);
    } else {
      scroller.scrollTo("about", {
        duration: 1000,
        delay: 100,
        smooth: true,
        offset: -100,
      });
    }
  };

  return (
    <div className="app-style flex items-center justify-between h-20 pb-1 shadow-primary sticky top-0 z-50">
      <Link to="/" onClick={scrollToHome}>
        <h1 className="text-xl font-mono">Aziz Ahmed</h1>
      </Link>
      <div className="flex justify-between gap-8 items-center">
        <div className="hidden md:block">
          <Link
            onClick={scrollToProject}
            to="/projects"
            className="hover:text-hoverblue"
          >
            Projects
          </Link>
        </div>
        <div className="hidden md:block">
          <Link
            to="/about"
            onClick={scrollToAbout}
            className="hover:text-hoverblue"
          >
            About
          </Link>
        </div>
        <div className="hidden md:block">
          <span
            className="cursor-pointer hover:text-hoverblue"
            onClick={scrollToContact}
          >
            Contact
          </span>
        </div>

        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>
      {/* menu icon */}
      <div onClick={handleMenu} className="block md:hidden cursor-pointer z-10">
        {menu ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      {/* mobile menu */}
      <div
        className={
          menu
            ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[91%] bg-primary ease-in duration-500 z-10"
            : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300"
        }
      >
        <ul className="w-full p-4 text-center">
          <li onClick={handleMenu} className="border-b py-6">
            <Link
              onClick={scrollToProject}
              to="/projects"
              className="hover:text-hoverblue"
            >
              Projects
            </Link>
          </li>
          <li onClick={handleMenu} className="border-b py-6">
            <Link
              onClick={scrollToAbout}
              to="/about"
              className="hover:text-hoverblue"
            >
              About
            </Link>
          </li>
          <li onClick={handleMenu} className="border-b py-6">
            <span
              className="cursor-pointer hover:text-hoverblue"
              onClick={scrollToContact}
            >
              Contact
            </span>
          </li>
          <li className="py-4 flex justify-center">
            <ThemeToggle />
          </li>
        </ul>
        <div className="flex flex-between gap-8 items-center pb-2 my-8">
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
      </div>
    </div>
  );
};

export default Navbar;
