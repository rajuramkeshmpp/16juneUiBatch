import React, { useState } from 'react';

function Feedbackreport() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div
      className="container mt-4 p-4 rounded"
      style={{
        backgroundColor: "#66cdaa",
        boxShadow: "0 0 20px rgba(0, 255, 127, 0.4)",
        color: "#000",
      }}
    >
      <h2 className="mb-4 text-dark fw-bold">Feedback Form</h2>

      {submitted && (
        <div className="alert alert-success" role="alert">
          Thank you for your feedback!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control"
            style={{ backgroundColor: "#fff", color: "#000", border: "1px solid #ccc" }}
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-control"
            style={{ backgroundColor: "#fff", color: "#000", border: "1px solid #ccc" }}
          />
        </div>

        <div className="mb-3">
          <label>Feedback</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-control"
            style={{ backgroundColor: "#fff", color: "#000", border: "1px solid #ccc" }}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success px-4">Submit</button>
      </form>
    </div>
  );
}

export default Feedbackreport;
