import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Dashboard from './Dashboard';

function AddSociety() {
  return <h2>Add Society Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mt-3 d-flex">
        {/* Sidebar */}
        <div className="sidebar p-3 border-end" style={{ width: "200px" }}>
          <h5>Menu</h5>
          <ul className="list-unstyled">
            <li>
              <Link to="/add-society">Add Society</Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/add-society" element={<AddSociety />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
