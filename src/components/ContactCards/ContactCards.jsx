import React from 'react';
import './ContactCards.css';

const ContactCards = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fa fa-phone text-primary mb-2"></i>
                <h4 className="m-0">Phone</h4>
                <hr className="my-4" />
                <div className="small text-black-50">+351 910085402</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fa fa-envelope text-primary mb-2"></i>
                <h4 className="m-0">Email</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <a href="mailto:you@example.com">vanessa.ferreira.dev@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fa fa-map-marker text-primary mb-2"></i>
                <h4 className="m-0">Address</h4>
                <hr className="my-4" />
                <div className="small text-black-50">Aveiro, Portugal</div>
              </div>
            </div>
          </div> */}
          {/* New LinkedIn card */}
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fab fa-linkedin text-primary mb-2"></i>
                <h4 className="m-0">LinkedIn</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <a href="https://www.linkedin.com/in/yourlinkedinprofile">linkedin.com/in/vanessabio</a>
                </div>
              </div>
            </div>
          </div>
          {/* New Github card */}
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fab fa-github text-primary mb-2"></i>
                <h4 className="m-0">Github</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <a href="https://github.com/yourgithubprofile">github.com/epicnessinha</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
