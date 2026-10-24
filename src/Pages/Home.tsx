import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Gallery from "../components/Gallery/Gallery";
import DebugLog from "../components/DebugLog/DebugLog";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Gallery />
      <DebugLog />
      <Footer />
      <footer>© 2026 Rahil Saiyed — APIs, architecture & a touch of creativity.</footer>
    </React.Fragment>
  );
};

export default Home;
