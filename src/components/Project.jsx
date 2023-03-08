import React from "react";

const styles = {
  h1Text: "text-xl text-center mb-3",
};

const Project = (props) => {
  return (
    <div className="p-4 border-b-2 border-secondary shadow-[0_2px_10px_-4px_rgba(0,0,0,0.3)] rounded-sm">
      <h2 className={styles.h1Text}>{props.name}</h2>
      <div>
        <img src={props.src} alt="" loading="lazy" />
        {props.description}
        <div className="font-bold my-3">
          Technologies Used:{" "}
          <span className="font-normal">{props.technologies}</span>
        </div>
      </div>
      <div className="flex justify-around my-8">
        <div>
          <button className="bg-button text-white  rounded-xl py-2 px-5 hover:bg-[#294471]">
            GitHub Repo{props.github}
          </button>
        </div>
        <div>
          <button className="bg-button text-white rounded-xl py-2 px-5 hover:bg-[#294471]">
            Demo{props.demo}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
