import React from 'react';
import "./Carousel.css"


const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/assets/Petland.png" className="w-100" alt="Project 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Project 1</h5>
            <p>Project 1 description.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/assets/Nessa5.png" className="w-100" alt="Project 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Project 2</h5>
            <p>Project 2 description.</p>
          </div>
        </div>
        {/* Add more carousel-items for more projects */}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
