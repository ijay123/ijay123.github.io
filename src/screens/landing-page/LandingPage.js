import React from "react";

import Snowfall from "react-snowfall";
import Typewriter from "typewriter-effect";


const LandingPage = () => {
  return (
    <div className="bg-[#F7F6FB]" id="home">
      {/* <Snowfall color="orange" snowflakeCount={60} />
      <Snowfall color="blue" snowflakeCount={60} />
      <Snowfall color="red" snowflakeCount={60} /> */}
      <div className="flex pt-[180px] px-[60px] h-[100%] gap-[150px] items-center relative z-[10]">
      

        <div className=" text-[40px] mt-[80px]">
          <p>
            
           Hi👋, <br />
            My name is Ijeoma Igbokwe. <br />
       
            <span className="text-[#e4b153]">
           
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: ["I'm a Web Developer.", "MERN stack"],
                 
                }}
              />
            </span>
          </p >

       <p className="text-[20px] font-400">     I’m a developer dedicated to making the world a better place<br/> one line of code at a time.</p>
        </div>

        <div>
          <img
            src="/images/port2.png"
            alt=""
            className=""
          />
        </div>

        {/* <div className=" flex flex-col gap-[35px]">
          <img src="/images/facebook.png" alt="" className="" />
          <img src="/images/linkedin.png" alt="" />
          <img src="/images/instagram.png" alt="" />
          <img src="/images/twitter.png" alt="" />
        </div> */}
      </div>
    
    </div>
  );
};

export default LandingPage;
