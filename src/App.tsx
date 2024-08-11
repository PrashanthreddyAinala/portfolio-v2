import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Blogs from "./pages/blogs";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <section id="about">
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="blogs">
        <Blogs />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default App;
