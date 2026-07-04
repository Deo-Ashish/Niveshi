import React from "react";
function Education() {
  return (
    <div className="container d-flex p-5">
      <div className="row pe-5">
        <div className="col-6">
          <img src="media/images/education.svg" />
        </div>
        <div className="col-6 my-auto">
          <h3 className="mb-4">Free and open market education</h3>
          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#">
            Varsity <i class="fa-solid fa-arrow-right"></i>
          </a>
          <br></br>
          <br></br>
          <p className="text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#">
            TradingQ&A <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
