import React from "react";
import Project from "../components/Project";
import Contact from "./Contact";

const Projects = () => {
  return (
    <div className="app-style py-2 m-4 " id="projects">
      <span className="flex mx-auto font-bold text-3xl mb-8 border-b-4 border-sky-600 rounded-sm w-[220px]">
        Recent Projects
      </span>
      <div className="grid md:grid-cols-2 gap-6 m-2">
        <Project
          name="Crypto Coin Watch"
          description="This is a react project created with firebase authentication, users can view list of crypto coins and check the current trending coins. Users can also create an account to sign in and save crypto coins to their list. Users can view the list of crypto coins later."
          technologies="React, TailwindCSS, Firebase"
        />
        <Project
          name="Photography Website"
          description="This is a photography website that displays an album, photographer's information and contact to services. "
          technologies="HTML5, CSS3, JavaScript"
        />
        <Project
          name="Data Service Landing Page"
          description="A responsive for all devices landing page that displays information about a data service company. "
          technologies="React, TailwindCSS, SASS"
        />
      </div>
      <div>
        <span className="flex mx-auto font-bold text-3xl my-8 border-b-2 border-sky-600 rounded-sm w-[210px]">
          Other Projects
        </span>
        <div className="grid md:grid-cols-2 gap-6 m-2">
          <Project
            name="VB.NET Project"
            description="in this project I made a customer invoice application using Visual Basic on .NET framework. This project uses the CRUD method to create a customer, customer's invoices, and it includes date/time ."
            technologies="Visual Basic, .NET Framework"
          />
          <Project
            name="Java Calculator GUI APP"
            description="A Java Calculator GUI APP using Java library"
            technologies="Java, Java Library"
          />

          <Project
            name="Bouncing Ball Game"
            description="Bouncing Ball Game using Java GUI library, a ball will be bouncing on the walls and player must avoid it touching the bottom of screen to score points"
            technologies="Java, Java swing library"
          />
          <Project
            name="Command Line Book Library"
            description="A C++ command line project that searches, updates books by title, author and ISBN"
            technologies="C++"
          />
        </div>
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Projects;
