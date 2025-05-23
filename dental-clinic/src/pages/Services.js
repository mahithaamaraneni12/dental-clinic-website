import React, { useState } from 'react';
import services from '../data/services';

function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Dental Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body text-center">
                <i className={`bi ${service.icon} fs-1`}></i>
                <h5 className="card-title mt-3">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <button
                  className="btn btn-outline-primary btn-sm mt-2"
                  onClick={() => toggleAccordion(index)}
                >
                  {openIndex === index ? 'Hide Details' : 'View Details'}
                </button>
                {openIndex === index && (
                  <div className="mt-3 text-start">
                    <hr />
                    <p>{service.details}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
