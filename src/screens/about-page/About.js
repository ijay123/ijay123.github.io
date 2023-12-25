import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript, DiNodejsSmall } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";

const About = () => {
  return (
    <div
      className="pt-[250px] flex justify-center text-white h-[100vh] w-[100%] gap-[150px] px-[60px] relative z-[10] bg-black"
      id="about"
    >
      <div className="">
        <p className="text-[30px] pb-[40px]">My Skills</p>
        <ul className="flex flex-col gap-[25px] text-[20px]">
          <li className="flex items-center gap-[10px]">
            <FaHtml5 className="text-red-300 text-[35px]" />
            HTML
          </li>
          <li className="flex items-center gap-[10px]">
            <IoLogoCss3 className="text-blue-300 text-[35px]" />
            CSS
          </li>
          <li className="flex items-center gap-[10px]">
            <DiJavascript className="text-yellow-300 text-[35px]" />
            JavaScript
          </li>
          <li className="flex items-center gap-[10px]">
            <FaReact className="text-blue-300 text-[35px]" />
            React
          </li>
          <li className="flex items-center gap-[10px]">
            <BiLogoTailwindCss className="text-green-300 text-[35px]" />
            Tailwind CSS
          </li>
          <li className="flex items-center gap-[10px]">
            <DiNodejsSmall className="text-green-300 text-[35px]" />
            NodeJS
          </li>
          <li>MongoDB</li>
        </ul>
      </div>

      <div className="w-[50%]">
        <p className="text-[35px] hover:text-[#d9b264]">About Me</p>
        <p className="pt-[40px] text-[28px] font-[200] hover:text-[orange]">
          Hello, my name is Ijeoma Igbokwe. As of 2021, I graduated from the
          southwestern University of Nigeria where I bagged a bachelor's degree
          in Computer science and did my NYSC service in Bayelsa state of
          Nigeria in 2023. Still pursuing my dreams, I'm currently a web
          developer at Itskills Centre.
        </p>
      </div>
    </div>
  );
};

export default About;
