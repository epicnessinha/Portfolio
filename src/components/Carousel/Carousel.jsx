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

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={homepage} className="w-100" alt="Project 1" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
          <img src={haute} className="w-100" alt="Project 2" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
          <img src={Petland} className="w-100" alt="Project 2" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
          <img src={geekshubstore} className="w-100" alt="Project 1" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
          <img src={music} className="w-100" alt="Project 1" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
          <img src={todolist} className="w-100" alt="Project 1" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        {/* <div className="carousel-item">
          <img src={MyCartel} className="w-100" alt="Project 1" />
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div> */}
        <div className="carousel-item">
          <img src={movieland} className="w-100" alt="Project 1" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
          <img src={SimsChar} className="w-100" alt="Project 1" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
          <img src={nintendo} className="w-100" alt="Project 1" />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
          <img src={Sims} className="w-100" alt="Project 1" />
          <div className="carousel-caption d-none d-md-block"></div>
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
