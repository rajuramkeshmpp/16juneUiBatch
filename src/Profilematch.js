import React, { useState } from 'react';

function Profilematch() {
  const [searchTerm, setSearchTerm] = useState("");

  const matchedJobs = [
    { title: "Frontend Developer", skills: "React, JavaScript, HTML, CSS", salary: "₹6 LPA" },
    { title: "Backend Developer", skills: "Node.js, MongoDB, Express", salary: "₹7.5 LPA" },
    { title: "Full Stack Developer", skills: "React, Node, SQL", salary: "₹9 LPA" },
    { title: "Java Developer", skills: "Core Java, Spring Boot", salary: "₹8 LPA" },
  ];

  const filteredJobs = matchedJobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.skills.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="container mt-4 p-4 rounded"
      style={{
        backgroundColor: "#66cdaa",
        boxShadow: "0 0 20px rgba(0, 255, 127, 0.3)",
        color: "#000",
      }}
    >
      <h2 className="mb-4 text-dark fw-bold">Profile Match</h2>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by job title or skill..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          backgroundColor: "#fff",
          color: "#000",
          border: "1px solid #ccc",
        }}
      />

      {filteredJobs.length > 0 ? (
        <div className="row">
          {filteredJobs.map((job, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div
                className="card shadow-sm"
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  border: "1px solid #ccc",
                  boxShadow: "0 0 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title text-success fw-bold">{job.title}</h5>
                  <p className="card-text"><strong>Skills:</strong> {job.skills}</p>
                  <p className="card-text"><strong>Salary:</strong> {job.salary}</p>
                  <button className="btn btn-sm btn-success">Apply Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-danger fw-bold">No jobs found matching your profile.</p>
      )}
    </div>
  );
}

export default Profilematch;
