import React from "react";
import homepage from "../../assets/home.png";
import geekshubstore from "../../assets/geekshubstore.png";
import haute from "../../assets/haute.png";
import music from "../../assets/music.png";
import nintendo from "../../assets/nintendo.png";
import Sims from "../../assets/simsacademy.png";
import SimsChar from "../../assets/simschar.png";
import todolist from "../../assets/todolist.png";
import mycartel from "../../assets/mycartel.png";
import mycartelquest from "../../assets/mycartelquest.png"
import githubflix from "../../assets/githubflix.jpeg"
import githubflixedit from "../../assets/githubflixedit.jpeg"
import homecv from "../../assets/Homepage.png"
import experiencecv from "../../assets/Experience.png"
import educationcv from "../../assets/Education.png"
import contactscv from "../../assets/Contacts.png"
import aboutmecv from "../../assets/About me.png"
import "./Carousel.css";

const carouselImages = [
  { src: homecv, alt: "CV homepage" },
  { src: educationcv, alt: "CV education" },
  { src: contactscv, alt: "CV contacts" },
  { src: experiencecv, alt: "CV experience" },
  { src: aboutmecv, alt: "CV about me" },
  { src: homepage, alt: "Github-discovery homepage" },
  { src: githubflix, alt: "Project 15" },
  { src: githubflixedit, alt: "Project 17" },
  { src: haute, alt: "Project 2" },
  { src: geekshubstore, alt: "Project 4" },
  { src: nintendo, alt: "Project 9" },
  { src: Sims, alt: "Project 10" },
  { src: SimsChar, alt: "Project 8" },
  { src: music, alt: "Project 5" },
  { src: mycartel, alt: "Project 11" },
  { src: mycartelquest, alt: "Project 12" },
  { src: todolist, alt: "Project 6" },
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
