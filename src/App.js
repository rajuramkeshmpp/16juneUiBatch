import { BrowserRouter, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import Sample1 from './Sample1';
import Sample2 from './Sample2';
import Sample3 from './Sample3';
import EmployeeReport from './EmployeeReport';
import CompanyReport from './CompanyReport';
import FeedbackReport from './FeedbackReport';

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Example: localStorage.removeItem("adminToken");
    navigate('/'); // Redirect to homepage or login
  };

  return (
    <div className="bg-dark text-light vh-100" style={{ width: "250px" }}>
      <div className="p-3">
        <h4 className="mb-4">
          <i className="bi bi-grid-fill me-2"></i> Navigation
        </h4>
        <ul className="nav nav-pills flex-column gap-2">
          <li className="nav-item">
            <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
              <i className="bi bi-speedometer2 me-2"></i> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sample1" className={`nav-link d-flex align-items-center ${location.pathname === "/sample1" ? "active" : "text-light"}`}>
              <i className="bi bi-file-earmark-text me-2"></i> Sample 1
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sample2" className={`nav-link d-flex align-items-center ${location.pathname === "/sample2" ? "active" : "text-light"}`}>
              <i className="bi bi-file-earmark-text me-2"></i> Sample 2
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sample3" className={`nav-link d-flex align-items-center ${location.pathname === "/sample3" ? "active" : "text-light"}`}>
              <i className="bi bi-file-earmark-text me-2"></i> Sample 3
            </Link>
          </li>
        </ul>

        <hr className="text-light mt-4" />
        <h5 className="text-white mb-3">Admin Menu</h5>
        <ul className="nav nav-pills flex-column gap-2">
          <li className="nav-item">
            <Link to="/admin/employee-report" className={`nav-link d-flex align-items-center ${location.pathname === "/admin/employee-report" ? "active" : "text-light"}`}>
              <i className="bi bi-person me-2"></i> Employee Report
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/company-report" className={`nav-link d-flex align-items-center ${location.pathname === "/admin/company-report" ? "active" : "text-light"}`}>
              <i className="bi bi-building me-2"></i> Company Report
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/feedback-report" className={`nav-link d-flex align-items-center ${location.pathname === "/admin/feedback-report" ? "active" : "text-light"}`}>
              <i className="bi bi-chat-left-text me-2"></i> Feedback Report
            </Link>
          </li>
          <li className="nav-item">
            <button onClick={handleLogout} className="nav-link btn btn-link text-start text-light d-flex align-items-center">
              <i className="bi bi-box-arrow-right me-2"></i> Admin Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sample1" element={<Sample1 />} />
            <Route path="/sample2" element={<Sample2 />} />
            <Route path="/sample3" element={<Sample3 />} />

            {/* Admin Report Pages */}
            <Route path="/admin/employee-report" element={<EmployeeReport />} />
            <Route path="/admin/company-report" element={<CompanyReport />} />
            <Route path="/admin/feedback-report" element={<FeedbackReport />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
