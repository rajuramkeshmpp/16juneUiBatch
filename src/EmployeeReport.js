import React, { useState } from 'react';

const employees = [
  {
    name: "Rizwan Ahmad",
    email: "rizwan@ss.com",
    role: "Frontend Developer",
    mobile: "+91-9876543210",
    status: "Active"
  },
   {
    name: "Vivek",
    email: "viv@ss.com",
    role: "Java Developer",
    mobile: "+91-9876743210",
    status: "Active"
  },
  {
    name: "Piyush Mehta",
    email: "piyush@ss.com",
    role: "Backend Developer",
    mobile: "+91-9234567890",
    status: "Inactive"
  }
  // Add more employee data if needed
];

function EmployeeReport() {
  const [selectedEmail, setSelectedEmail] = useState("");

  const emp = employees.find(e => e.email === selectedEmail);

  return (
    <div className="container">
      <h4 className="mb-3">Select Email</h4>
      <select
        className="form-select mb-4"
        value={selectedEmail}
        onChange={(e) => setSelectedEmail(e.target.value)}
      >
        <option value="">-- Select --</option>
        {employees.map((e, idx) => (
          <option key={idx} value={e.email}>{e.email}</option>
        ))}
      </select>

      {emp && (
        <div>
          <p><strong>Name:</strong> {emp.name}</p>
          <p><strong>Email:</strong> {emp.email}</p>
          <p><strong>Role:</strong> {emp.role}</p>
          <p><strong>Mobile:</strong> {emp.mobile}</p>
          <p><strong>Status:</strong> {emp.status}</p>
        </div>
      )}
    </div>
  );
}

export default EmployeeReport;
