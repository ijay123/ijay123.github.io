import React from "react";

import Snowfall from "react-snowfall";
import Typewriter from "typewriter-effect";
import { FaGithub } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="bg-[#F7F6FB] " id="home">
      <Snowfall color="blue" snowflakeCount={60} className="z-[1]" />
      {/* <Snowfall color="blue" snowflakeCount={60} /> */}
      {/* <Snowfall color="red" snowflakeCount={60} /> */}
      <div className="flex flex-col-reverse lg:flex-row lg:pl-[200px] pt-[100px] lg:pt-[180px] lg:px-[60px] h-[100%]  min-md:gap-[150px] lg:gap-[200px] ml-auto mr-auto items-center">
        <div className=" lg:text-[40px] lg:w-[60vw] lg:px[0px] px-[20px] mt-[80px]">
          <p>
            Hi👋, <br />
            My name is Ijeoma Igbokwe. <br />
            <span className="text-[#e4b153]">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: ["I'm a Full stack Developer.", "MERN stack"],
                }}
              />
            </span>
          </p>

          <p className="lg:text-[20px] text-[13px]  font-400">
            {" "}
            <i>
              I’m a developer dedicated to making the world a better place
              <br /> one line of code at a time.
            </i>{" "}
          </p>
        </div>

        <div className="flex lg:flex-row flex-col w-[100vw] z-[1]">
          <img src="/images/WhatsApp Image 2024-01-09 at 18.38.33.jpeg" alt="" className="" />
          <div className="flex flex-row lg:flex-col gap-[35px] text-[black] bg-[grey] p-[10px]">
         
         <a href="https://www.linkedin.com/in/ijeoma-igbokwe-55a441198/"><img src="/images/linkedin.png" alt="" /></a>
         
          <a href="https://github.com/ijay123?tab=repositories"><FaGithub className="text-[white] text-[24px]"/></a>
        </div> 
        </div>

       
      </div>
    </div>
  );
};

export default LandingPage;
