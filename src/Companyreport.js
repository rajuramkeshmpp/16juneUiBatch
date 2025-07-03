import React from 'react';
import './App.css';

function Companyreport() {
  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white fw-bold fs-5 text-center">
          Company Report
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Company Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>City</th>
                <th>Pincode</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MRA Infotech</td>
                <td>info@mrainfotech.com</td>
                <td>9876543210</td>
                <td>12 Pavan City</td>
                <td>Surat</td>
                <td>395007</td>
              </tr>
              <tr>
                <td>SoftX Solutions</td>
                <td>hr@softx.com</td>
                <td>9123456789</td>
                <td>Sector 18</td>
                <td>Noida</td>
                <td>201301</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Companyreport;
