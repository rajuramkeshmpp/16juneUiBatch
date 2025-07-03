import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';

import Postnewjob from './Postnewjob';
import Mypostedjob from './Mypostedjob';
import Myaccount from './Myaccount';
import Profilematch from './Profilematch';
import Appliedjob from './Appliedjob';
import Changepassword from './Changepassword';
import Jobseekerreport from './Jobseekerreport';
import Companyreport from './Companyreport';
import Feedbackreport from './Feedbackreport';
import Logout from './Logout';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Adminlogin from './Adminlogin';

// Optionally import CSS or Bootstrap if not already done

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="d-flex">
        {/* ✅ Sidebar goes here */}
        <div className="sidebar p-3 border-end bg-light" style={{ width: "240px", minHeight: "100vh" }}>
          <h5 className="fw-bold">Menu</h5>
          <ul className="list-unstyled">
            <li><Link to="/Postnewjob">Post New Job</Link></li>
            <li><Link to="/Mypostedjob">My Posted Job</Link></li>
            <li><Link to="/Myaccount">My Account</Link></li>
            <li><Link to="/Profilematch">Profile Match</Link></li>
            <li><Link to="/Appliedjob">Applied Job</Link></li>
            <li><Link to="/Changepassword">Change Password</Link></li>
            <li><Link to="/Jobseekerreport">Jobseeker Report</Link></li>
            <li><Link to="/Companyreport">Company Report</Link></li>
            <li><Link to="/Feedbackreport">Feedback Report</Link></li>
            <li><Link to="/Adminlogin">Admin Login</Link></li>
            <li><Link to="/Logout">Log Out</Link></li>
          </ul>
        </div>

        {/* ✅ Page content here */}
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/Postnewjob" element={<Postnewjob />} />
            <Route path="/Mypostedjob" element={<Mypostedjob />} />
            <Route path="/Myaccount" element={<Myaccount />} />
            <Route path="/Profilematch" element={<Profilematch />} />
            <Route path="/Appliedjob" element={<Appliedjob />} />
            <Route path="/Changepassword" element={<Changepassword />} />
            <Route path="/Jobseekerreport" element={<Jobseekerreport />} />
            <Route path="/Companyreport" element={<Companyreport />} />
            <Route path="/Feedbackreport" element={<Feedbackreport />} />
            <Route path="/Adminlogin" element={<Adminlogin />} />
            <Route path="/Logout" element={<Logout />} />
   
<Route path="/home" element={<Home />} />


            {/* Optional: Fallback Route */}
            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
