import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Gallery from "../components/Gallery/Gallery";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Gallery />
    </React.Fragment>
  );
};

export default Home;
