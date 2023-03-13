import React, { useState } from "react";
import Project from "../components/Project";
import Contact from "./Contact";
import blogWebsite from "../assets/blogwebsite.png";
import singlePageWebsite from "../assets/data_service_website.png";
import cryptoWebsite from "../assets/crypto_website.png";
import todoApp from "../assets/todo_app.png";
import customerMaintenance from "../assets/customer_maintenance_app.png";
import javaCalculator from "../assets/java_calculator.png";
import Popup from "../components/Popup";
import RenderImage from "../components/RenderImage";
import javaCalcDemo from "../assets/java_calculator_demo.gif";
import javaGame from "../assets/java_game.png";
import javaGameDemo from "../assets/java_pong_game.gif";
import customerMaintenanceDemo from "../assets/customer_maintenance_demo.gif";

const Projects = () => {
  const [project1, setProject1] = useState(false);
  const [project2, setProject2] = useState(false);
  const [project3, setProject3] = useState(false);

  // disable scroll when pop up is opened
  const disableScroll = () => {
    document.body.style = "overflow: hidden";
  };

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
          description="This is a crypto API app, displayed crypto coins can be saved and viewed later by logging into your account."
          technologies="React, TailwindCSS, Firebase, REST API"
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
          description="This is a blogs website created with Gatsby Framework that consists of blog posts which are managed through Contentful CMS."
          technologies="React, SCSS, Gatsby, GraphQL, Contentful CMS"
          github="https://github.com/"
          demo="https://azizblogs.netlify.app/blog/"
        />
        <Project
          imgSrc={todoApp}
          imgAlt="Todo App"
          name="CRUD Todo App"
          description="A react and firebase todo app, firebase database is used to implement CRUD operations"
          technologies="React, TailwindCSS, Firebase"
          github="https://github.com/a-ziz/todo-app"
          demo="https://todo-app-react-tailwindcss.web.app/"
        />
      </div>
      <div>
        <span className="flex mx-auto font-bold text-3xl my-8 border-b-2 border-sky-600 rounded-sm w-[210px]">
          Other Projects
        </span>
        <div className="grid md:grid-cols-2 gap-6 m-2">
          <div className="p-4 border-b-2 border-secondary shadow-[0_2px_10px_-4px_rgba(0,0,0,0.3)] rounded-sm">
            <div>
              <img
                src={customerMaintenance}
                alt="Customer Maintenance App"
                loading="lazy"
                style={{ height: "300px", width: "90%", margin: "0 auto" }}
              />
            </div>
            <h2 className="text-xl text-center m-2 font-semibold">
              Customer Maintenance App
            </h2>
            <div className="flex mx-auto rounded-full max-w-[100px] py-1 my-3 bg-gradient-to-tr from-[#4674eb] via-[#95f4fc] to-[#3e05ff]"></div>
            <div className="text-center my-2 mx-12 font-thin">
              This is a customer invoice app using Visual Basic and .NET
              framework. Using the CRUD method to manage customers and their
              information using XML database.
              <div className="font-semibold my-3">
                Technologies Used:
                <span className="font-normal">
                  Visual Basic, XML database, C#, .NET Framework
                </span>
              </div>
            </div>
            <div className="flex justify-around my-8 items-center">
              <div>
                <a
                  className="bg-button text-white rounded-xl py-2 px-5 hover:bg-[#294471]"
                  href="#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
              <div>
                <button
                  className="bg-button text-white rounded-xl py-2 px-5 hover:bg-[#294471]"
                  onClick={() => {
                    setProject1(true);
                    disableScroll();
                  }}
                >
                  Demo
                </button>
                <Popup trigger={project1} setTrigger={setProject1}>
                  <RenderImage
                    imageSrc={customerMaintenanceDemo}
                    imageAlt="Customer Maintenance"
                  />
                  <h1 className="text-center mt-4 text-xl text-white">
                    Customer Maintenance Demo
                  </h1>
                </Popup>
              </div>
            </div>
          </div>
          {/* Java calculator container */}
          <div className="p-4 border-b-2 border-secondary shadow-[0_2px_10px_-4px_rgba(0,0,0,0.3)] rounded-sm">
            <div>
              <img
                src={javaCalculator}
                alt="Java calculator"
                loading="lazy"
                style={{ height: "300px", margin: "0 auto" }}
              />
            </div>
            <h2 className="text-xl text-center m-2 font-semibold">
              Java Calculator
            </h2>
            <div className="flex mx-auto rounded-full max-w-[100px] py-1 my-3 bg-gradient-to-tr from-[#4674eb] via-[#95f4fc] to-[#3e05ff]"></div>
            <div className="text-center my-2 mx-12 font-thin">
              A simple Java Calculator using Java Swing library
              <div className="font-semibold my-3">
                Technologies Used:
                <span className="font-normal">Java, Java Swing Library</span>
              </div>
            </div>
            <div className="flex justify-around my-8 items-center">
              <div>
                <a
                  className="bg-button text-white rounded-xl py-2 px-5 hover:bg-[#294471]"
                  href="#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
              <div>
                <button
                  className="bg-button text-white rounded-xl py-2 px-5 hover:bg-[#294471]"
                  onClick={() => {
                    setProject2(true);
                    disableScroll();
                  }}
                >
                  Demo
                </button>
                <Popup trigger={project2} setTrigger={setProject2}>
                  <RenderImage
                    imageSrc={javaCalcDemo}
                    imageAlt="Customer Maintenance"
                  />
                  <h1 className="text-center mt-4 text-xl text-white">
                    Java Calculator Demo
                  </h1>
                </Popup>
              </div>
            </div>
          </div>

          {/* Java bouncing ball container  */}
          <div className="p-4 border-b-2 border-secondary shadow-[0_2px_10px_-4px_rgba(0,0,0,0.3)] rounded-sm">
            <div>
              <img
                src={javaGame}
                alt="Java Pong Game"
                loading="lazy"
                style={{ height: "300px", margin: "0 auto" }}
              />
            </div>
            <h2 className="text-xl text-center m-2 font-semibold">
              Java Pong Game
            </h2>
            <div className="flex mx-auto rounded-full max-w-[100px] py-1 my-3 bg-gradient-to-tr from-[#4674eb] via-[#95f4fc] to-[#3e05ff]"></div>
            <div className="text-center my-2 mx-12 font-thin">
              Java Pong game using Java Swing library, a ball can be released by
              player and player must hit the ball with the paddle and avoid
              letting the ball touch the wall to score point.
              <div className="font-semibold my-3">
                Technologies Used:
                <span className="font-normal">Java, Java Swing Library</span>
              </div>
            </div>
            <div className="flex justify-around my-8 items-center">
              <div>
                <a
                  className="bg-button text-white rounded-xl py-2 px-5 hover:bg-[#294471]"
                  href="#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
              <div>
                <button
                  className="bg-button text-white rounded-xl py-2 px-5 hover:bg-[#294471]"
                  onClick={() => {
                    setProject3(true);
                    disableScroll();
                  }}
                >
                  Demo
                </button>
                <Popup trigger={project3} setTrigger={setProject3}>
                  <RenderImage
                    imageSrc={javaGameDemo}
                    imageAlt="Customer Maintenance"
                  />
                  <h1 className="text-center mt-4 text-xl text-white">
                    Java Pong Game Demo
                  </h1>
                </Popup>
              </div>
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

export default Projects;
