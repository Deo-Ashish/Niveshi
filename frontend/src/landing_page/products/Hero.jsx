import React from "react";

function Hero() {
  return (
    <div className="container p-5 border-bottom">
      <div className="row text-center my-5 pt-5">
        <h2 className="mb-3">Zerodha Products</h2>
        <h5 className="fw-normal text-muted">
          Sleek, modern, and intuitive trading platforms
        </h5>
        <p className="text-muted mt-3">
          Check out our{" "}
          <a href="">
            investment offerings <i className="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
