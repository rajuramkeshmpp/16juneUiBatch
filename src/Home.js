import React from 'react';

function Home() {
  return (
    <div className="container mt-4">
      <div className="text-center">
        <h1 className="text-success mb-3">Welcome to MRA Infotech Job Portal</h1>
        <p className="lead">Connecting talented professionals with top companies</p>
        <img
          src="https://img.freepik.com/free-vector/job-search-concept-illustration_114360-499.jpg"
          alt="Job Portal"
          className="img-fluid rounded mt-4 shadow-sm"
          style={{ maxWidth: "600px" }}
        />
      </div>
    </div>
  );
}

export default Home;
