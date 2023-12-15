import React from "react";
import About from "../about-page/About";
import Contact from "../contact-page/Contact";
import Projects from "../projects-page/Projects";
import Snowfall from "react-snowfall";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-black relative z-[-1]">
      <Snowfall color="orange" snowflakeCount={60} />
      <Snowfall color="blue" snowflakeCount={60} />
      <Snowfall color="red" snowflakeCount={60} />
      <div className="flex pt-[180px] px-[60px] h-[100%] gap-[100px] items-center relative z-[10]">
        <div>
          <img
            src="/images/portfolio-pics.png"
            alt=""
            className="h-[600px] rounded-[30%]"
          />
        </div>

        <div className="text-white text-[40px] mt-[80px]">
          <p>
            
            Hello, <br />
            My name is Ijeoma Igbokwe. <br />
       
            <span className="text-[#f0c575]">
           
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: ["I'm a Web Developer."],
                 
                }}
              />
            </span>
          </p>
          <p></p>
        </div>

        <div className=" flex flex-col gap-[35px]">
          <img src="/images/facebook.png" alt="" className="" />
          <Link to={"/about"}>
          <p className="text-white">click me</p>
          </Link>
          <img src="/images/linkedin.png" alt="" />
          <img src="/images/instagram.png" alt="" />
          <img src="/images/twitter.png" alt="" />
        </div>
      </div>
      <div id="ab">
        <About />
      </div>
      <div id="ac">
        <Projects />
      </div>

      <div id="ad">
        <Contact />
      </div>
    </div>
  );
};

export default LandingPage;
