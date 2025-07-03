import React, { useState } from 'react';

function Postnewjob() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    type: 'Full-Time',
    salary: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Job Posted Successfully!");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-success mb-4">Post New Job</h2>
      <form onSubmit={handleSubmit} className="border rounded p-4 shadow-sm bg-light">
        <div className="mb-3">
          <label className="form-label">Job Title</label>
          <input type="text" className="form-control" name="title" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Job Description</label>
          <textarea className="form-control" rows="3" name="description" onChange={handleChange} required></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input type="text" className="form-control" name="location" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Job Type</label>
          <select className="form-select" name="type" onChange={handleChange}>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input type="text" className="form-control" name="salary" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success w-100">Post Job</button>
      </form>
    </div>
  );
}

export default Postnewjob;
