import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container-fluid p-2">
        <Link className="navbar-brand ps-5 ms-5" to="/">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            className="ms-5 pb-2"
            style={{ width: "20%" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <div className="d-flex ps-5 ms-2">
            <ul className="navbar-nav mb-2 ps-5 mb-lg-0 gap-4">
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-bars"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;