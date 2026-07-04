import React from "react";

function KiteConnect() {
  return (
    <div className="container-fluid p-3" style={{ backgroundColor: "#F6FBFF" }}>
      <div className="row pt-3">
        <div className="col-3 text-end">
          <img src="media/images/kc-logo-landing.svg" />
        </div>
        <div className="col-6">
          <p className="text-muted ps-2" style={{ fontSize: "0.89rem" }}>
            Need more? Build your own trading and investing experience with Kite
            Connect, simple HTTP APIs to place orders, stream market data,
            manage your account, and more.{" "}
            <a href="#">
              Explore <i className="fa-solid fa-arrow-right"></i>
            </a>
          </p>
        </div>
        <div className="col-2 pt-2">
          <img
            src="media/images/kc-banner-image.svg"
            style={{ width: "12rem" }}
          />
        </div>
      </div>
    </div>
  );
}

export default KiteConnect;
