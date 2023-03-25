import React from "react";
import "./ContactCards.css";

const ContactCards = () => {
  return (
    <>
      <h2 className="contacts">Contacts</h2>
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i
                    className="fa fa-phone"
                    style={{ color: "rgb(19, 165, 213)" }}
                  ></i>

                  <hr className="my-4" />
                  <div className="small text-black-50">+351 910085402</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i
                    className="fa fa-envelope"
                    style={{ color: "rgb(19, 165, 213)" }}
                  ></i>

                  <hr className="my-4" />
                  <div className="small text-black-50">
                    <a href="mailto:you@example.com">
                      vanessa.ferreira.dev@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
         <div class="col-md-4 mb-3 mb-md-0">
  <div class="card py-4 h-100">
    <div class="card-body text-center">
      <div class="d-flex justify-content-between align-items-center">
        <a href="https://github.com/epicnessinha">
          <i class="fab fa-github"></i>
        </a>
        <span class="ml-3 px-2">
          <a href="https://github.com/epicnessinha">/epicnessinha</a>
        </span>
      </div>
      <hr class="my-4" />
      <div class="d-flex justify-content-between align-items-center">
        <a href="https://www.linkedin.com/in/vanessabio/">
          <i class="fab fa-linkedin text-primary"></i>
        </a>
        <span class="ml-3 px-2">
          <a href="https://www.linkedin.com/in/vanessabio/">/vanessabio</a>
        </span>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactCards;
