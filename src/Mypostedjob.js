import React from 'react';

function Mypostedjob() {
  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4">My Posted Job List</h2>
      <div className="card p-3">
        <label>Select Job:</label>
        <select className="form-select w-50">
          <option>ASP.Net Developer</option>
          <option>React Developer</option>
        </select>
        <button className="btn btn-dark mt-3">Select</button>
      </div>
    </div>
  );
}

export default Mypostedjob;
