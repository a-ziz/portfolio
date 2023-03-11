import React from "react";
import Contact from "./Contact";

const About = () => {
  return (
    <div className="app-style">
      <div id="about" className="py-2 m-2 grid">
        <div>
          <h1 className="mt-2 px-2 text-2xl sm:text-4xl font-extrabold border-l-4 border-sky-600 rounded-sm w-[200px]">
            About Me
          </h1>
          <p className="font-thin py-8 sm:text-2xl sm:leading-[44px]">
            I am a motivated recent Information Technology Graduate with web
            development experience. My focus is building fast, unbreakable,
            responsive and elegant JavaScript websites and web applications. I
            am open to new opportunities to grow my front-end development skills
            in an innovative environment. I am currently a freelance web
            developer based in Buffao, NY, and would love to work at a company
            whose ideals and mission line up well with my interests and
            passions.
          </p>
        </div>
        <div className="max-w-7xl my-12 mx-auto sm:w-[70%] grid grid-cols-9 text-white">
          {/* Year 2020 */}
          <div className="col-span-4 w-full h-full py-4">
            <div className="bg-indigo-700 rounded-xl w-full h-full p-3">
              <h1 className="text-xl font-medium py-1">2020</h1>
              <p className="sm:text-sm text-xs">
                Worked as TA and guided 60+ students to with web development
                course
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-500"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-600 z-10 text-primary text-center"></div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
          {/* Year 2021 */}
          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-500"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-600 z-10 text-primary text-center"></div>
          </div>
          <div className="col-span-4 w-full h-full">
            <div className="bg-indigo-700 rounded-xl w-full h-full p-3">
              <h1 className="text-xl font-medium py-1">2021</h1>
              <p className="sm:text-sm text-xs">
                Web development internship at L3Harris Technologies
              </p>
            </div>
          </div>
          {/* Year 2022 */}
          <div className="col-span-4 w-full h-full">
            <div className="bg-indigo-700 rounded-xl w-full h-full p-3">
              <h1 className="text-xl font-medium py-1">2022</h1>
              <p className="sm:text-sm text-xs">
                Graduated with B.S in Information Technology
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-500"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-600 z-10 text-center"></div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
          {/* year 2023 */}
          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-500"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-600 z-10 text-primary text-center"></div>
          </div>
          <div className="col-span-4 w-full h-full">
            <div className="bg-indigo-700 rounded-xl w-full h-full p-3">
              <h1 className="text-xl font-medium py-1">2023</h1>
              <p className="sm:text-sm text-xs">
                Web Development Bootcamp <br />
                Freelance Web Developer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default About;
