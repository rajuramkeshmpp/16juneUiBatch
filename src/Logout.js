import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage or session if needed
    // localStorage.removeItem('token');
    // sessionStorage.clear();

    // Redirect to Home
    navigate('/home');
  };

  return (
    <div className="container mt-5 text-center">
      <h3 className="text-danger mb-4">Are you sure you want to logout?</h3>
      <button className="btn btn-outline-danger px-4 py-2 fw-bold" onClick={handleLogout}>
        Yes, Logout
      </button>
    </div>
  );
}

export default Logout;
