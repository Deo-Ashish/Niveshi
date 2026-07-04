import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row p-5">
        <div className="col-5">
          <h3>Unbeatable pricing</h3>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#">
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="col-7 m-auto">
          <div className="row">
            <div className="col-4 d-flex align-items-end">
              <img
                src="media/images/pricing0.svg"
                style={{ width: "7.5rem" }}
              />
              <p
                style={{
                  fontSize: "0.65rem",
                  marginLeft: "-1rem",
                  marginBottom: "2rem",
                }}
              >
                Free account opening
              </p>
            </div>
            <div className="col-4 d-flex align-items-end">
              <img
                src="media/images/pricingEquity.svg"
                style={{ width: "7.5rem" }}
              />
              <p
                style={{
                  fontSize: "0.65rem",
                  marginLeft: "-1rem",
                  marginBottom: "1.2rem",
                }}
              >
                Free equity delivery & direct mutual funds
              </p>
            </div>
            <div className="col-4 d-flex align-items-end">
              <img
                src="media/images/other-trades.svg"
                style={{ width: "7.5rem" }}
              />
              <p style={{ fontSize: "0.65rem", marginBottom: "2rem" }}>
                Intraday and F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
