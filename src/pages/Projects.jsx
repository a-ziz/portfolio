import React from "react";
import Project from "../components/Project";
import Contact from "./Contact";
import blogWebsite from "../assets/blogwebsite.png";
import singlePageWebsite from "../assets/data_service_website.png";
import cryptoWebsite from "../assets/crypto_website.png";

const Projects = () => {
  return (
    <div className="app-style py-2 m-4 " id="projects">
      <span className="flex mx-auto font-bold text-3xl sm:mb-8 border-b-4 border-sky-600 rounded-sm w-[220px]">
        Recent Projects
      </span>
      <div className="grid md:grid-cols-2 gap-6 m-2">
        <Project
          imgSrc={cryptoWebsite}
          imgAlt="Crypto Coin Website"
          name="Crypto Coin Watch"
          description="This is a react project created with firebase authentication, users can view list of crypto coins and check the current trending coins. Users can also create an account to sign in and save crypto coins to their list. Users can view the list of crypto coins later."
          technologies="React, TailwindCSS, Firebase"
          github="https://github.com/a-ziz/service-site"
          demo="https://cryptolist-8c1cd.web.app/"
        />
        <Project
          name="Data Service Landing Page"
          imgSrc={singlePageWebsite}
          imgAlt="Demo Data Service Website"
          description="A responsive for all devices landing page that displays information about a data service company. "
          technologies="React, TailwindCSS, Single-Page Design"
          github="https://github.com/a-ziz/service-app"
          demo="https://demoserviceapp.netlify.app/"
        />
        <Project
          name="Blogs Website"
          imgSrc={blogWebsite}
          imgAlt="Blog Website"
          description="This is a blogs website that consists of blog posts that can be clicked to viewed. Content creator can edit the blogs easily through ContentFul CMS"
          technologies="React, SCSS, Gatsby, GraphQL, Contentful CMS"
          github="https://github.com/"
          demo="https://azizblogs.netlify.app/blog/"
        />
        <Project
          name="Photography Website"
          description="This is a photography website that displays an album, photographer's information and contact to services. "
          technologies="HTML5, CSS3, JavaScript"
          github="https://github.com/"
          demo="http://www.photography"
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
            technologies="Visual Basic, XML database, C#, .NET Framework"
            github="https://github.com/"
            demo="http://www.photography"
          />
          <Project
            name="Java Calculator GUI APP"
            description="A Java Calculator GUI APP using Java library"
            technologies="Java, Java Library"
            github="https://github.com/"
            demo="http://www.photography"
          />

          <Project
            name="Java Bouncing Ball Game"
            description="Bouncing Ball Game using Java GUI library, a ball will be bouncing on the walls and player must avoid it touching the bottom of screen to score points"
            technologies="Java, Java library"
            github="https://github.com/"
            demo="http://www.photography"
          />
          {/* <Project
            name="Command Line Book Library"
            description="A C++ command line project that searches, updates books by title, author and ISBN"
            technologies="C++"
          /> */}
        </div>
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Projects;
