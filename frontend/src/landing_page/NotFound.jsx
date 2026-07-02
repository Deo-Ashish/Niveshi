import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="display-1 fw-bold">404</h1>
      <h3>Page Not Found</h3>
      <p className="text-muted">The page you are looking for doesn't exist.</p>

      <Link to="/">
        <Button
          sx={{
            textTransform: "none",
            fontSize: "1.2rem",
          }}
          variant="contained"
        >
          Go to Home
        </Button>
      </Link>
    </div>
  );
}

export default NotFound;
