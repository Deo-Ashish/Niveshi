import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Hero() {
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <img
            src="media/images/landing.svg"
            alt="Hero Image"
            className="mb-4"
            style={{height: "350px", marginTop: "77px"}}
          ></img>
          <h2 className="mt-4">Invest in everything</h2>
          <p className="fs-5 mb-5">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <Button sx={{ textTransform: 'none', fontSize: "1.2rem", width: "17%", margin: "auto"}} variant="contained">Sign up for free</Button>
        </div>
      </div>
    </>
  );
}

export default Hero;
