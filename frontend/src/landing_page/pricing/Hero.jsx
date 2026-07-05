import React from "react";

function Hero() {
  return (
    <div className="container p-5 pb-0 border-bottom">
      <div className="row text-center my-5">
        <h2 className="mb-3">Charges</h2>
        <h5 className="fw-normal text-muted">List of all charges and taxes </h5>
      </div>
      <div className="row p-5 pb-0 text-center text-muted">
        <div className="col-4">
          <img src="media/images/pricing0.svg" style={{ height: "40%" }} />
          <h2 className="pb-3">Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/other-trades.svg" style={{ height: "40%" }} />
          <h2 className="pb-3">Intraday and F&O trades</h2>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/pricingEquity.svg" style={{ height: "40%" }} />
          <h2 className="pb-3">Free direct MF</h2>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges. Equity Currency Commodity
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
