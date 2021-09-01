import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/HeroSection";
import About from "../components/About";
import Experience from "../components/Experience";
import Abilities from "../components/Abilities";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About />
      <Experience />
      <Abilities />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
