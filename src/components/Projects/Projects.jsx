import React from 'react';
import Carousel from '../Carousel/Carousel';
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="projects">Projects</h2>
        <p className="text">A showcase of some of my projects and learning exercises done during my journey to become a Frontend Developer. You can find more details about each one of them in my  <a href="https://github.com/epicnessinha" target="_blank" rel="noreferrer">Github</a> page.</p>
        <Carousel />
      </div>
    </section>
  );
};

export default Projects;
