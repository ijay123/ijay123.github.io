import React from "react";
import projectData from "../../database/projectData";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Projects = () => {
  // const navigate = useNavigate()
  return (
    <div className="text-white lg:h-[60vw] flex flex-col items-center justify-center w-100% bg-[#343D68] pb-[50px]" id="projects">
      <p className="text-center mb-[60px] pt-[50px] lg:text-[40px]">My Projects</p>

      <div className="flex flex-wrap justify-center gap-[70px]">
        {projectData.map((project, id) => (
          <div className="border bg-[#262C4D]" key={id}>
            <p className=" w-[250px] h-[200px] border-[#0D54BE] bg-black opacity-[0.9] cursor-pointer">
              <img src={project.bg_img} alt="" className="bg-cover w-[100%] h-[100%]" />
            </p>
            <p className="p-[15px] w-[250px]">{project.title}</p>
            <p>{project.description}</p>
            <a href={project.url}>
              <button className="bg-[#007DFC] px-[30px] py-[10px] flex justify-center rounded-[4px] items-center m-auto mb-[10px]">
                More
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
