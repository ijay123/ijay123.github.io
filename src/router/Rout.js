import React from "react";
import { Route, Routes } from "react-router";
// import Navigation from "../components/navigation/Navigation";
import LandingPage from "../screens/landing-page/LandingPage";
import About from "../screens/about-page/About";
import Projects from "../screens/projects-page/Projects";
import Contact from "../screens/contact-page/Contact";
import Ecommerce from "../screens/projects-page/AllProjects/Ecommerce";

const Rout = () => {
  return (
    
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ecommerce" element={<Ecommerce />} />

        </Routes>
    
  );
};

export default Rout;