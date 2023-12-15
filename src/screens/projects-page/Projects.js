import React from "react";
import projectData from "../../database/projectData";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Projects = () => {
  // const navigate = useNavigate()
  return (
    <div className="text-white relative z-[10]">
      <p className="text-center mb-[60px] text-[40px]">My Projects</p>

      <div className="flex justify-center gap-[70px]">
        {projectData.map((project, id) => (
          <div className="" key={id}>
            <p className=" w-[250px] h-[200px] border bg-black opacity-[0.9] cursor-pointer">
              <img src={project.bg_img} alt="" className="p-[20px]" />
            </p>
            <p>{project.title}</p>
            <p>{project.description}</p>
            <Link to={"/ecommerce"}>
              <button className="bg-[#007DFC] px-[30px] py-[10px] ">
                More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
