import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  SiJavascript,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiGatsby,
  SiGraphql,
} from "react-icons/si";

import { FaReact, FaJava } from "react-icons/fa";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="app-style border-none" id="home">
      <div className="grid items-center">
        <div className="mx-8 md:py-4">
          <h1 className="my-4 text-2xl sm:text-4xl font-thin font-mono">
            Front-End Web-Developer
          </h1>
          <p className="font-thin sm:text-2xl mb-8 sm:mb-12 font-sans leading-7 sm:leading-[38px]">
            {" "}
            I am a web developer with 2 years of experience in building and
            maintaining websites. I have strong understanding of HTML, CSS, and
            JavaScript and web development library such as React. I am also
            well-versed in responsive design, and cross-browser compatibility.
            In addition to my technical abilities, I like to solve problems and
            have a passion for creating visually appealing and user-friendly
            websites. I am always eager to learn new technologies and follow the
            latest industry trends.{" "}
          </p>
          <Link
            to="/about"
            className="rounded-3xl py-1 px-14 text-2xl sm:py-3 sm:px-10 font-semibold bg-gradient-to-tr from-[#afb1f0] via-[#70a1e7] to-[#8491f7] text-[#2d2827] hover:from-[#199aea] hover:to-[#a5c0ed]"
          >
            Learn More
          </Link>
        </div>
        <div className="py-12 text-center">
          <h2 className="font-bold my-6 uppercase text-accent text-2xl sm:4xl">
            Skills & Technologies
          </h2>
          <p className="text-left font-thin my-4 mx-6 sm:text-2xl leading-8 sm:leading-[50px] max-w-[800px]">
            I have worked with a range of technologies in the web development
            world. I have a passion for design systems, web accessibility, and
            smooth user interface.
          </p>
          <ul className="grid gap-8 grid-cols-3 py-4 my-8 items-center">
            <li className="grid grid-rows-2">
              <span>
                <SiJavascript className="mx-auto text-4xl" />
              </span>
              <span>JavaScript</span>
            </li>
            <li className="grid grid-rows-2">
              <span>
                <FaReact className="mx-auto text-4xl" />
              </span>
              <span>React</span>
            </li>
            <li className="grid grid-rows-2">
              <span>
                <AiFillHtml5 className="mx-auto text-4xl" />
              </span>
              <span>HTML5</span>
            </li>

            <li className="grid grid-rows-2">
              <span>
                <SiCss3 className="mx-auto text-4xl" />
              </span>
              <span>CSS3</span>
            </li>
            <li className="grid grid-rows-2">
              <span>
                <SiTailwindcss className="mx-auto text-4xl" />
              </span>
              <span>TailwindCSS</span>
            </li>
            <li className="grid grid-rows-2">
              <span>
                <SiBootstrap className="mx-auto text-4xl" />
              </span>
              <span>Bootstrap</span>
            </li>
            <li className="grid grid-rows-2">
              <span>
                <SiGatsby className="mx-auto text-4xl" />
              </span>
              <span>Gatsby</span>
            </li>
            <li className="grid grid-rows-2">
              <span>
                <SiGraphql className="mx-auto text-4xl" />
              </span>
              <span>GraphQL</span>
            </li>
            <li className="grid grid-rows-2">
              <span>
                <FaJava className="mx-auto text-4xl" />
              </span>
              <span>Java</span>
            </li>
          </ul>
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
