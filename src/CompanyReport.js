import React, { useState } from 'react';

const companies = [
  {
    name: "Shiwansh Solutions",
    type: "IT Company",
    contact: "Mr. Anil Kumar Sah",
    city: "Mohali",
    address: "45 New Market, Mohali",
    email: "info@shiwansh.com",
    mobile: "+91-9123456789",
    description: "Software development and training services."
  },
  {
    name: "MRA Infotech",
    type: "IT Company",
    contact: "Mr. Md Rizwan Ahmad",
    city: "Muzaffarpur",
    address: "Maripur, Muzaffarpur",
    email: "info@mra.com",
    mobile: "+91-7319970198",
    description: "Software development ."
  },
  {
    name: "I.R.F.A.N Goat Farm",
    type: "Agriculture company",
    contact: "Mr. Asar",
    village: "Manpura",
    address: "Muzaffarpur, Bihar",
    email: "info@IRFAN.com",
    mobile: "+91-9934210484",
    description: "Goat farm for quality milk, meat, and breeding."
  },
  // Add more companies as needed
];

function CompanyReport() {
  const [selectedCompany, setSelectedCompany] = useState("");

  const company = companies.find(c => c.name === selectedCompany);

  return (
    <div className="container">
      <h4 className="mb-3">Select Company</h4>
      <select
        className="form-select mb-4"
        value={selectedCompany}
        onChange={(e) => setSelectedCompany(e.target.value)}
      >
        <option value="">-- Select --</option>
        {companies.map((c, idx) => (
          <option key={idx} value={c.name}>{c.name}</option>
        ))}
      </select>

      {company && (
        <div>
          <p><strong>Name:</strong> {company.name}</p>
          <p><strong>Type:</strong> {company.type}</p>
          <p><strong>Contact:</strong> {company.contact}</p>
          <p><strong>City:</strong> {company.city}</p>
          <p><strong>Address:</strong> {company.address}</p>
          <p><strong>Email:</strong> {company.email}</p>
          <p><strong>Mobile:</strong> {company.mobile}</p>
          <p><strong>Description:</strong> {company.description}</p>
        </div>
      )}
    </div>
  );
}

export default CompanyReport;
