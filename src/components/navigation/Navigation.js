import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex justify-around p-[30px] bg-black text-white fixed w-[100%]">
      <div>LOGO</div>
      <div className="flex gap-[50px]">
       
        <Link to={'/'}>HOME</Link>
         <a href="#ab">ABOUT ME</a>
        <a href="#ac">MY PROJECTS</a>
        <a href="#ad">CONTACT ME</a>
      </div>
    </div>
  );
};

export default Navigation;
