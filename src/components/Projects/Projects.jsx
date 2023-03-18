import React from 'react';
import Carousel from '../Carousel/Carousel';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="text-center">Projects</h2>
        <p className="text-center">A showcase of some of my best projects.</p>
        <Carousel />
      </div>
    </section>
  );
};

export default Projects;
