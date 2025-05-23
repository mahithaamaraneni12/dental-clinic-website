import React from 'react';
import services from '../data/services';
import FAQ from '../components/FAQ';

function Home() {
  return (
    <div>
    
      <section className="hero text-center py-5 bg-light">
        <div className="container">
          <h1 >Welcome to Todays Dental Services</h1>
          <p className="lead">
            Where your smile gets the care it deserves. Experience compassionate, comprehensive dental care in a modern and comfortable setting.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg mt-3">
            Book Your Appointment
          </a>
        </div>
      </section>

      
      <section className="py-5 bg-white text-center">
        <div className="container">
          <h2>About Our Clinic</h2>
          <p className="mt-3">
          Todays Dental Services has been serving the community with personalized and gentle care for over 10 years. 
            Our team of experienced dentists and staff are committed to helping you maintain excellent oral health and a beautiful smile.
          </p>
          <p>
            Whether you need a routine check-up or advanced cosmetic procedures, we use the latest techniques and technology to ensure the best outcomes.
          </p>
        </div>
      </section>

     
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Our Core Services</h2>
          <div className="row">
            {services.slice(0, 3).map((service, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card text-center h-100 shadow-sm">
                  <div className="card-body">
                    <i className={`bi ${service.icon} fs-1 text-primary`}></i>
                    <h5 className="card-title mt-3">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <a href="/services" className="btn btn-outline-primary">
              View All Services
            </a>
          </div>
        </div>
      </section>

     
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <FAQ />
        </div>
      </section>
    </div>
  );
}

export default Home;
