import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function OpenAccount() {
  return (
    <div className="container  p-5">
      <div className="row p-3 mt-5">
        <div className="row mt-4 text-center mb-3">
          <h3>Open a Zerodha account</h3>
        </div>
        <div className="row text-center mb-4">
          <p className="text-muted">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
        </div>
        <div className="row">
          <Button
            sx={{
              textTransform: "none",
              fontSize: "1.2rem",
              width: "17%",
              margin: "auto",
            }}
            variant="contained"
          >
            Sign up for free
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
