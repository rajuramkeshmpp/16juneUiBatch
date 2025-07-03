// EmployeeSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeSidebar = () => (
  <div className="sidebar p-3 border-end" style={{ width: "200px" }}>
    <h5 className="fw-bold">Menu</h5>
    <ul className="list-unstyled">
      <li><Link to="/Postnewjob">Post New Job</Link></li>
      <li><Link to="/Mypostedjob">My Posted Job</Link></li>
      <li><Link to="/Myaccount">My Account</Link></li>
      <li><Link to="/Profilematch">Profile Match</Link></li>
      <li><Link to="/Appliedjob">Applied Job</Link></li>
      <li><Link to="/Changepassword">Change Password</Link></li>
      <li><Link to="/Logout">Log Out</Link></li>
    </ul>
  </div>
);

export default EmployeeSidebar;
