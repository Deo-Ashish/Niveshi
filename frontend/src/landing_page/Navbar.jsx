import React from "react";

function Navbar() {
  return (
    <div
      className="container-fluid"
      style={{ height: "70px", borderBottom: "1px solid black" }}
    >
      <div className="row">
        <div className="col-6">
          <img src="media/images/logo.svg" style={{ width: "10rem" }} />
        </div>
        <div className="col-6 ">
            <span>Signup</span>
            <span>About</span>
            <span>Products</span>
            <span>Pricing</span>
            <span>Support</span>
            <span>Dropdown</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
