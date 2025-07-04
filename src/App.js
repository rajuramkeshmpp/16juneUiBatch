import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import Sample1 from './Sample1';
import Sample2 from './Sample2';
import Sample3 from './Sample3';

function Sidebar() {
  const location = useLocation();

  return (
    <div className="bg-dark text-light vh-100" style={{ width: "250px" }}>
      <div className="p-3">
        {/* <h4 className="mb-4"><i className="bi bi-grid-fill me-2"></i>Navigation</h4> */}
        <ul className="nav nav-pills flex-column gap-2">
          <li className="nav-item">
            <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
              <i className="bi bi-speedometer2 me-2"></i> Dashboard <span className="badge bg-primary ms-auto">New</span>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/society" className={`nav-link d-flex align-items-center ${location.pathname === "/society" ? "active" : "text-light"}`}>
              <i className="bi bi-building me-2"></i> Add Society <span className="badge bg-success ms-auto">Hot</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/house" className={`nav-link d-flex align-items-center ${location.pathname === "/house" ? "active" : "text-light"}`}>
              <i className="bi bi-house-fill me-2"></i> Add House <span className="badge bg-warning text-dark ms-auto">Updated</span>
            </Link>
          </li> */}

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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
