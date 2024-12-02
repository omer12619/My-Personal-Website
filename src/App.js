import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Career from "./components/Career";
import Breaker from "./components/Breaker";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Breaker />
      <Projects />
      <Breaker />
      <Career />
      <Breaker />
      <Skills />
      <Breaker />
      <Contact />
    </div>
  );
}

export default App;
