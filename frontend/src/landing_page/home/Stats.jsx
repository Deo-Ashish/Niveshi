import React from "react";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6 pe-5">
          <h3 className="mb-5">Trust with confidence</h3>

          <h5 className="mb-2">Customer-first always</h5>
          <p className="mb-5  text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h5 className="mb-2">No spam or gimmicks</h5>
          <p className="mb-5 text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Our philosophies.
            </a>
          </p>

          <h5 className="mb-2">The Zerodha universe</h5>
          <p className="mb-5 text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h5 className="mb-2">Do better with money</h5>
          <p className="mb-5 text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6">
          <img src="media/images/ecosystem.png" style={{ width: "105%" }} />
          <div className="row text-center text-primary mt-4 fw-semibold">
            <div className="col-6 d-flex justify-content-end">
              <a>
                Explore our products <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="col-6">
              Try Kite demo <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
