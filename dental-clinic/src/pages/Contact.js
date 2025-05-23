import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

 const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({ ...form, [name]: value });

 
  setErrors(prevErrors => {
    const newErrors = { ...prevErrors };
    if (value.trim()) {
      delete newErrors[name]; 
    }
    return newErrors;
  });
};


  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', form);

      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you for contacting us. We will get back to you soon.',
        timer: 2500,
        timerProgressBar: true,
        showConfirmButton: false
      });

      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Something went wrong. Please try again later.',
        timer: 2500,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  }
};

  return (
    <div>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Subject</label>
          <input
            type="text"
            name="subject"
            className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
            value={form.subject}
            onChange={handleChange}
          />
          {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            rows="4"
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            value={form.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">Send Message</button>
        </div>
      </form>

      <div className="mt-5">
        <h4>Clinic Information</h4>
        <p><i className="bi bi-telephone"></i> +91 98765 43210</p>
        <p><i className="bi bi-envelope"></i> contact@dentalclinic.com</p>
        <p><i className="bi bi-geo-alt"></i> 123 Smile Street, Hyderabad, India</p>

        <div className="mt-3">
          <iframe
            title="Todays Dental Services Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.005849685454!2d78.4867!3d17.385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb977f85c5d40d%3A0x6b35f90cf69c88b5!2sHyderabad!5e0!3m2!1sen!2sin!4v1614335091483!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
