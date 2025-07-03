import React from 'react';

function Myaccount() {
  return (
    <div className="container mt-4">
      <h2 className="text-primary">My Account</h2>
      <form className="bg-light p-4 rounded shadow-sm">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Company Name</label>
            <input type="text" className="form-control" value="KKC Academy" readOnly />
          </div>
          <div className="col-md-6 mb-3">
            <label>Address</label>
            <input type="text" className="form-control" value="12 Pavan City" readOnly />
          </div>
          <div className="col-md-6 mb-3">
            <label>City</label>
            <input type="text" className="form-control" value="Surat" readOnly />
          </div>
          <div className="col-md-6 mb-3">
            <label>Pincode</label>
            <input type="text" className="form-control" value="352222" readOnly />
          </div>
          <div className="col-md-6 mb-3">
            <label>Mobile</label>
            <input type="text" className="form-control" value="65656565656" readOnly />
          </div>
          <div className="col-md-6 mb-3">
            <label>Contact Person</label>
            <input type="text" className="form-control" value="Vivek" readOnly />
          </div>
          <div className="col-md-6 mb-3">
            <label>Type</label>
            <input type="text" className="form-control" value="Software Development" readOnly />
          </div>
          <div className="col-md-12 mb-3">
            <label>Detail</label>
            <textarea className="form-control" rows="2" value="Software development company." readOnly></textarea>
          </div>
        </div>
        <button className="btn btn-primary">Update Details</button>
      </form>
    </div>
  );
}

export default Myaccount;
