import React from "react";
import Button from "@mui/material/Button";
import "./Support.css";

function SupportSearch() {
  return (
    <div
      className="container-fluid px-5"
      style={{ backgroundColor: "#F6F6F6" }}
    >
      <div className="row p-5 pb-0 mx-5">
        <div className="col-6 px-0 mb-3">
          <h1>Support Portal</h1>
        </div>
        <div className="col-6 text-end px-0">
          <Button
            sx={{
              textTransform: "none",
              fontSize: "1.1rem",
              width: "20%",
            }}
            variant="contained"
          >
            My tickets
          </Button>
        </div>
        <div
          className="input-group px-0 mb-5"
          style={{ height: "60px", borderRadius: "8px", overflow: "hidden" }}
        >
          <span
            className="input-group-text  bg-white ps-4"
            style={{ border: "1px solid #e0e0e0", borderRight: "none" }}
          >
            <i className="fa-solid fa-magnifying-glass text-muted"></i>
          </span>
          <input
            type="text"
            className="form-control search-input"
            style={{ border: "1px solid #e0e0e0", borderLeft: "none" }}
            placeholder="Eg: How do I open my account, How do I activate F&O..."
          />
        </div>
      </div>
    </div>
  );
}

export default SupportSearch;
