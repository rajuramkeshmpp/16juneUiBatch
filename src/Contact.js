import React from 'react';

function Contact() {
  return (
    <div className="container mt-4">
      <h2 className="text-info mb-3">Contact Us</h2>
      <form className="bg-light p-4 rounded shadow-sm">
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Your Email" />
        </div>
        <div className="mb-3">
          <label>Message</label>
          <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button className="btn btn-success">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
