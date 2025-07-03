import React from 'react';

function Changepassword() {
  return (
    <div className="container mt-4">
      <h2 className="text-center text-danger mb-4">Change Password</h2>
      <div className="card p-4">
        <form>
          <div className="mb-3">
            <label>New Password</label>
            <input type="password" className="form-control" placeholder="Enter new password" />
          </div>
          <div className="mb-3">
            <label>Confirm Password</label>
            <input type="password" className="form-control" placeholder="Confirm password" />
          </div>
          <button className="btn btn-danger">Change Password</button>
        </form>
      </div>
    </div>
  );
}

export default Changepassword;
