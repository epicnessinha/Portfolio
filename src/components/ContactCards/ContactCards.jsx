import React from 'react';
import './ContactCards.css';

const ContactCards = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fa fa-phone text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Phone</h4>
                <hr className="my-4" />
                <div className="small text-black-50">+1 (555) 123-4567</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fa fa-envelope text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Email</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <a href="mailto:you@example.com">you@example.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fa fa-map-marker text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Address</h4>
                <hr className="my-4" />
                <div className="small text-black-50">1234 Street St, City, Country</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
