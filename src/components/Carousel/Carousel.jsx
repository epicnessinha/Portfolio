import React from "react";
import homepage from "../../assets/home.png";
import Petland from "../../assets/Petland.png";
import geekshubstore from "../../assets/geekshubstore.png";
import haute from "../../assets/haute.png";
import movieland from "../../assets/movieland.png";
import music from "../../assets/music.png";
import nintendo from "../../assets/nintendo.png";
import Sims from "../../assets/simsacademy.png";
import SimsChar from "../../assets/simschar.png";
import todolist from "../../assets/todolist.png";
import "./Carousel.css";

const carouselImages = [
  { src: homepage, alt: "Project 1" },
  { src: haute, alt: "Project 2" },
  { src: Petland, alt: "Project 3" },
  { src: geekshubstore, alt: "Project 4" },
  { src: music, alt: "Project 5" },
  { src: todolist, alt: "Project 6" },
  { src: movieland, alt: "Project 7" },
  { src: SimsChar, alt: "Project 8" },
  { src: nintendo, alt: "Project 9" },
  { src: Sims, alt: "Project 10" },
  
];

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-item${index === 0 ? " active" : ""}`}
          >
            <img src={image.src} className="w-100" alt={image.alt} />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        ))}
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
