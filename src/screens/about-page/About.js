import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript, DiNodejsSmall } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";

const About = () => {
  return (
    <div
      className="pt-[250px] flex justify-center h-[100vh] w-[100%] gap-[300px] px-[60px] relative z-[10] bg-[#F7F6FB]"
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
<div><img src="/images/cartoon.png" alt=""/></div>
 
    </div>
  );
};

export default About;
