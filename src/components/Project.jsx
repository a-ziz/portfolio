import React from "react";

const styles = {
  h1Text: "text-xl text-center m-2 font-semibold",
  border:
    "flex mx-auto rounded-full max-w-[100px] py-1 my-3 bg-gradient-to-tr from-[#4674eb] via-[#95f4fc] to-[#3e05ff]",
};

const Project = (props) => {
  return (
    <div className="p-4 border-b-2 border-secondary shadow-[0_2px_10px_-4px_rgba(0,0,0,0.3)] rounded-sm">
      <div>
        <iframe
          src={props.src}
          height="300px"
          width="100%"
          title={props.title}
        />
      </div>
      <h2 className={styles.h1Text}>{props.name}</h2>
      <div className={styles.border}></div>
      <div className="text-center my-2 mx-12 font-thin">
        {/* <img src={props.src} alt={props.alt} loading="lazy" /> */}
        {props.description}
        <div className="font-semibold my-3">
          Technologies Used:{" "}
          <span className="font-normal">{props.technologies}</span>
        </div>
      </div>
      <div className="flex justify-around my-8">
        <div>
          <a
            className="bg-button text-white  rounded-xl py-2 px-5 hover:bg-[#294471]"
            href={props.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        </div>
        <div>
          <a
            className="bg-button text-white rounded-xl py-2 px-5 hover:bg-[#294471]"
            href={props.demo}
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
