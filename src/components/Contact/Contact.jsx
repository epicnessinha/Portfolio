import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Contact.css";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <Card className="text-center border-0">
              <Card.Body>
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <h4>Phone</h4>
                <p>+351910085402</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <Card className="text-center border-0">
              <Card.Body>
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <h4>Address</h4>
                <p>Aveiro, Portugal</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center border-0">
              <Card.Body>
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <h4>Email</h4>
                <p>vanessa.ferreira.dev@gmail.com</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6} className="mb-3 mb-md-0">
            <Card className="text-center border-0">
              <Card.Body>
                <div className="contact-icon">
                  <FaGithub />
                </div>
                <a
                  href="https://github.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/epicnessinha
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="text-center border-0">
              <Card.Body>
                <div className="contact-icon">
                  <FaLinkedin />
                </div>
                <a
                  href="https://www.linkedin.com/in/username"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/vanessabio
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
