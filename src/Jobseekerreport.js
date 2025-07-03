import React from 'react';
import './App.css';

function Jobseekerreport() {
  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-success text-white fw-bold fs-5 text-center">
          Jobseeker Report
        </div>
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead className="table-success">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Qualification</th>
                <th>Skills</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rizwan Ahmad</td>
                <td>rizwan@gmail.com</td>
                <td>9988776655</td>
                <td>B.Tech</td>
                <td>Java, React</td>
              </tr>
              <tr>
                <td>Vivek</td>
                <td>Vivek@gmail.com</td>
                <td>7788996655</td>
                <td>MCA</td>
                <td>Python, Django</td>
              </tr>
              <tr>
                <td>Piyush Kumar</td>
                <td>piyush@gmail.com</td>
                <td>8899776655</td>
                <td>BCA</td>
                <td>HTML, CSS, JS</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Jobseekerreport;
