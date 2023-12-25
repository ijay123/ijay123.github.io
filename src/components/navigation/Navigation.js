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
      <div className="flex justify-around p-[30px] bg-black text-white fixed w-[100%] z-[9999]">
        <Link to="#home" smooth>Home</Link>
        <Link to="#about" smooth>About</Link>
        <Link to="#projects" smooth>Projects</Link>
        <Link to="#contact" smooth>Contact</Link>
      </div>
      
        <LandingPage />
        <About />
        <Projects />
        <Contact />
   
    </BrowserRouter>
  );
};

export default Navigation;
