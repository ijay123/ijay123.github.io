import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import About from "../../screens/about-page/About";
import LandingPage from "../../screens/landing-page/LandingPage";
import Contact from "../../screens/contact-page/Contact";
import Projects from "../../screens/projects-page/Projects";
import { HashLink as Link } from "react-router-hash-link";
import { FiMenu } from "react-icons/fi";
import "./Navigation.css";

const Navigation = () => {
  const [bar, setBar] = useState(false);
  return (
    <BrowserRouter>
      <div className="flex fixed w-[100%] lg:w-[100%] justify-between bg-[white] items-center px-[20px] lg:px-[70px] z-[9999] h-[90px] focus:hover:text-orange-500 border-b-[grey]">
        <div className="lg:pl-[200px]">
          <i className="text-[navy]">
            <img src="/images/portfolio-link.png" className="w-[30px]" alt="" />
          </i>
        </div>
        <div className="hidden lg:flex justify-around gap-[60px] " id="navbar">
          <Link to="#home" className="hover:text-blue-600" smooth>
            Home
          </Link>
          <Link to="#about" className="hover:text-blue-600" smooth>
            About
          </Link>
          <Link to="#projects" className="hover:text-blue-600" smooth>
            Projects
          </Link>
          <Link to="#contact" className="hover:text-blue-600" smooth>
            Contact
          </Link>
          <a href="https://docs.google.com/document/d/1qK-cpxePkbyTbZ3YgmUOL3hhsod2ARJvk2KrNRvxFZ0/edit?usp=sharing" className="text-[orange] border p-[4px] bg-[green] rounded-[10px]">CV</a>
        </div>
        <div className="lg:hidden" onClick={() => setBar(!bar)}>
          <FiMenu />
        </div>
        {bar && (
          <div className="lg:hidden absolute top-[90px] right-0 gap-[30px] bg-[grey] px-[30px] py-[20px] flex flex-col">
            <Link to="#home" smooth>
              Home
            </Link>
            <Link to="#about" smooth>
              About
            </Link>
            <Link to="#projects" smooth>
              Projects
            </Link>
            <Link to="#contact" smooth>
              Contact
            </Link>
          </div>
        )}
      </div>

      <LandingPage />
      <About />
      <Projects />
      <Contact />
    </BrowserRouter>
  );
};

export default Navigation;
