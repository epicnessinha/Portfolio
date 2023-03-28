import React from 'react';
import { Link } from 'react-scroll';
import CV from '../../assets/CV_VanessaFerreira_2023.pdf';
import './Navbar.css';

const Navbar = () => {
  const downloadPdf = () => {
    window.open(CV);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container navbar-container">
        <Link className="navbar-brand" to="page-top" smooth={true} duration={1000}>
          Home
        </Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="about" smooth={true} duration={1000}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="projects" smooth={true} duration={1000}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact" smooth={true} duration={1000}>
                Contacts
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link cv-btn" onClick={downloadPdf}>
                CV/Resume
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
