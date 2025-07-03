import React from 'react';

function About() {
  return (
    <div
      className="container mt-4 p-4 rounded"
      style={{
        backgroundColor: '#66cdaa',
        boxShadow: '0 0 20px rgba(0, 255, 127, 0.3)',
        color: '#000',
      }}
    >
      <div
        className="p-4 rounded"
        style={{
          backgroundColor: '#fff',
          color: '#000',
          boxShadow: '0 0 12px rgba(0,0,0,0.1)',
        }}
      >
        <h2 className="mb-3 text-success fw-bold">About Us</h2>
        <p className="lead">
          Welcome to <strong>MRA Job Portal</strong>, your one-stop destination for connecting job seekers with top companies across the globe. Our mission is to simplify hiring through technology and deliver a seamless experience to both employers and candidates.
        </p>

        <h4 className="text-dark fw-semibold mt-4">What We Do</h4>
        <ul className="list-unstyled ms-3">
          <li>✅ Help jobseekers find jobs that match their profile</li>
          <li>✅ Allow companies to post jobs and find the best candidates</li>
          <li>✅ Provide analytics reports like profile matches, applications, and feedback</li>
          <li>✅ Easy and secure login/signup system for Admins and Employees</li>
        </ul>

        <h4 className="text-dark fw-semibold mt-4">Our Vision</h4>
        <p>
          At <strong>MRA Infotech</strong>, we aim to empower careers and boost business productivity by bridging the gap between talent and opportunity using modern tools and design.
        </p>

        <h4 className="text-dark fw-semibold mt-4">Technologies Used</h4>
        <p>
          💡 <strong>Frontend:</strong> React.js, Bootstrap 5, Custom CSS <br />
          ⚙️ <strong>Backend:</strong> Java Spring Boot (optional) <br />
          🗄️ <strong>Database:</strong> MySQL / MongoDB
        </p>
      </div>
    </div>
  );
}

export default About;
