import React from "react";

import Snowfall from "react-snowfall";
import Typewriter from "typewriter-effect";

const LandingPage = () => {
  return (
    <div className="bg-[#F7F6FB]" id="home">
      {/* <Snowfall color="orange" snowflakeCount={60} />
      <Snowfall color="blue" snowflakeCount={60} />
      <Snowfall color="red" snowflakeCount={60} /> */}
      <div className="flex flex-col-reverse lg:flex-row pt-[100px] lg:pt-[180px] lg:px-[60px] h-[100%]  min-md:gap-[150px] lg:gap-[200px] items-center relative">
        <div className=" lg:text-[40px] px-[20px]  mt-[80px]">
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
          </p>

          <p className="lg:text-[20px] text-[13px]  font-400">
            {" "}
            <i>
              I’m a developer dedicated to making the world a better place
              <br /> one line of code at a time.
            </i>{" "}
          </p>
        </div>

        <div>
          <img src="/images/port2.png" alt="" className="" />
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
