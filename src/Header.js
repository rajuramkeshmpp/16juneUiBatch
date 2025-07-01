import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaUser, FaSignInAlt } from 'react-icons/fa';
import './App.css';

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  // Login Form
  const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
      e.preventDefault();

      if (email === 'admin@gmail.com' && password === 'Admin@123') {
        setShowLogin(false);
        navigate('/dashboard');
      } else {
        alert('Invalid email or password!');
      }
    };

    return (
      <form className="custom-login-form" onSubmit={handleLogin}>
        <h4 className="text-center text-success mb-4">Login</h4>
        <div className="row">
          <div className="mb-3 col-md-12">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 col-md-12">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="text-center mt-3">
          <button type="submit" className="btn btn-success w-100">Login</button>
        </div>
      </form>
    );
  };

  // Signup Form
  const SignupForm = () => (
    <form className="custom-signup-form">
      <h4 className="text-center text-success mb-4">Register Here</h4>

      <div className="row">
        <div className="mb-3 col-md-6">
          <label className="form-label">First Name</label>
          <input type="text" className="form-control" placeholder="First Name" />
        </div>
        <div className="mb-3 col-md-6">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control" placeholder="Last Name" />
        </div>

        <div className="mb-3 col-md-6">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="mb-3 col-md-6">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Password" />
        </div>

        <div className="mb-3 col-md-6">
          <label className="form-label">Mobile</label>
          <input type="tel" className="form-control" placeholder="Mobile Number" />
        </div>
        <div className="mb-3 col-md-6">
          <label className="form-label">Country</label>
          <select className="form-select">
            <option value="">Select Country</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>
        </div>

        <div className="mb-3 col-md-12">
          <label className="form-label">Address</label>
          <textarea className="form-control" rows="2" placeholder="Address"></textarea>
        </div>

        <div className="mb-3 col-md-6">
          <label className="form-label d-block">Gender</label>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" id="male" value="Male" />
            <label className="form-check-label" htmlFor="male">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" id="female" value="Female" />
            <label className="form-check-label" htmlFor="female">Female</label>
          </div>
        </div>

        <div className="mb-3 col-md-6">
          <label className="form-label d-block">Qualification</label>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="tenth" />
            <label className="form-check-label" htmlFor="tenth">10th</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="twelfth" />
            <label className="form-check-label" htmlFor="twelfth">12th</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="graduate" />
            <label className="form-check-label" htmlFor="graduate">Graduation</label>
          </div>
        </div>
      </div>

      <div className="text-center mt-3">
        <button type="submit" className="btn btn-success px-4">Register</button>
      </div>
    </form>
  );

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">SS Infotech</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link hover-effect" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hover-effect" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hover-effect" to="/contact">ContactUs</Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn btn-outline-light me-2" onClick={() => setShowSignup(true)}>
                <FaUser /> Sign Up
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-light" onClick={() => setShowLogin(true)}>
                <FaSignInAlt /> Login
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal d-block custom-modal-bg" tabIndex="-1" onClick={() => setShowLogin(false)}>
          <div className="modal-dialog modal-dialog-centered custom-modal-size" onClick={e => e.stopPropagation()}>
            <div className="modal-content custom-modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login</h5>
                <button type="button" className="btn-close" onClick={() => setShowLogin(false)}></button>
              </div>
              <div className="modal-body">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="modal d-block custom-modal-bg" tabIndex="-1" onClick={() => setShowSignup(false)}>
          <div className="modal-dialog modal-dialog-centered custom-modal-size" onClick={e => e.stopPropagation()}>
            <div className="modal-content custom-modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Sign Up</h5>
                <button type="button" className="btn-close" onClick={() => setShowSignup(false)}></button>
              </div>
              <div className="modal-body">
                <SignupForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
