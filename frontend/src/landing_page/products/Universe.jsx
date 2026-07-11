import React from "react";

function Universe() {
  const partners = [
    {
      image: "media/images/zerodhafundhouse.png",
      description:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      image: "media/images/sensibull-logo.svg",
      description:
        "Options trading platform that lets youcreate strategies, analyze positions, and examinedata points like open interest, FII/DII, and more.",
    },
    {
      image: "media/images/tijori.svg",
      description:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      image: "media/images/streakLogo.png",
      description:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      image: "media/images/smallcaseLogo.png",
      description:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      image: "media/images/dittoLogo.png",
      description:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
  ];

  return (
    <div className="container py-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <p className="text-muted fs-5">
          Want to know more about our technology stack? Check out the{" "}
          <a href="#" className="text-decoration-none">
            Zerodha.tech
          </a>{" "}
          blog.
        </p>

        <h3 className="fw-semibold mt-5">The Zerodha Universe</h3>

        <p className="text-muted mt-3">
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>
      </div>

      {/* Cards */}
      <div className="row text-center px-5">
        {partners.map((partner, index) => (
          <div className="col-lg-4 col-md-6 p-4" key={index}>
            <img
              src={partner.image}
              alt="Partner Logo"
              className="img-fluid"
              style={{
                height: index === 1 ? "38px" : "55px",
                marginBottom: index === 1 ? "18px" : "",
              }}
            />

            <p
              className="text-secondary fw-medium mt-3 px-5"
              style={{ fontSize: "0.8rem", lineHeight: "1.6" }}
            >
              {partner.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Universe;
