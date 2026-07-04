import React from "react";

function Hero() {
  return (
    <div className="container px-5">
      <div className="row text-center mt-5 pt-5 pb-5">
        <h3>
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h3>
      </div>
      <div className="row mt-5 p-5 border-top text-muted" style={{lineHeight: "1.6"}}>
        <div className="col-6 p-5">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="#">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
        <h3 className="text-center mb-5">People</h3>
      <div className="row px-5 mx-2">
        <div className="col-5 text-center px-5">
          <img
            className="rounded-circle"
            style={{ width: "80%" }}
            src="media/images/nithinKamath.jpg"
          />
          <h5 className="mb-3 mt-4">Deo Ashish Kumar Gupta</h5>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-7 p-4 ps-5 text-muted" style={{lineHeight: "1.6"}}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on Homepage /<a href=""> TradingQnA </a>/
            <a href=""> Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
