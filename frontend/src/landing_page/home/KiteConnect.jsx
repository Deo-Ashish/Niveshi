import React from "react";

function KiteConnect() {
  return (
    <div
      className="container-fluid d-flex align-items-center p-5"
      style={{ backgroundColor: "#F6FBFF", height: "5rem" }}
    >
      <div className="row pt-3 ">
        <div className="col-3 text-end">
          <img src="media/images/kc-logo-landing.svg" />
        </div>
        <div className="col-6">
          <p className="text-muted ps-2" style={{ fontSize: "0.89rem" }}>
            Need more? Build your own trading and investing experience with Kite
            Connect, simple HTTP APIs to place orders, stream market data,
            manage your account, and more.{" "}
            <a href="#" style={{textDecoration: "none"}}>
              Explore <i class="fa-solid fa-arrow-right"></i>
            </a>
          </p>
        </div>
        <div className="col-3 pt-2">
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
