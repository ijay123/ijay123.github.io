import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript, DiNodejsSmall } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";

const About = () => {
  return (
    <div className="lg:h-[70vw] lg:justify-center pt-[100px] lg:pt-[200px] flex flex-col  bg-[#F7F6FB] lg:items-center">
      {" "}
      {/* <p className=" text-[30px] pl-[10px] pt-[100px] lg:pb-[40px] bg-[#F7F6FB]">My Skills</p> */}
      <p className="text-[30px] pl-[10px] pb-[50px] bg-[#F7F6FB] lg:px-[60px]">My Skills</p>
      <div
        className=" flex flex-wrap flex-col-reverse justify-center items-center lg:min-h-[100vh] w-[100%] lg:gap-[200px] lg:px-[60px] bg-[#F7F6FB]"
        id="about"
      >
          
        <div className="">
          <ul className="flex lg:flex-col flex-row flex-wrap gap-[25px] text-[20px]">
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
        <div className="pb-[50px]">
          <img src="/images/cartoon.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
