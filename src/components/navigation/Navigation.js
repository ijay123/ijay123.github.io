import React from "react";
import { BrowserRouter } from "react-router-dom";
import About from "../../screens/about-page/About";
import LandingPage from "../../screens/landing-page/LandingPage";
import Contact from "../../screens/contact-page/Contact";
import Projects from "../../screens/projects-page/Projects";
import { HashLink as Link } from "react-router-hash-link";

const Navigation = () => {
  return (
    <BrowserRouter>
    <div className="flex fixed w-[100%] justify-between bg-white items-center px-[70px] z-[9999] h-[90px] focus:hover:text-orange-500 border-b-[grey]">
      <div className="pl-[200px]">LOGO</div>
    <div className="flex justify-around gap-[60px]">
        <Link to="#home" smooth>Home</Link>
        <Link to="#about" smooth>About</Link>
        <Link to="#projects" smooth>Projects</Link>
        <Link to="#contact" smooth>Contact</Link>
      </div>
    </div>
   
      
        <LandingPage />
        <About />
        <Projects />
        <Contact />
   
    </BrowserRouter>
  );
};

export default Navigation;
