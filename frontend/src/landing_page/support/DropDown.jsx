// DropDown.jsx
import React from "react";
import "./DropDown.css";

function DropDown({ title, items, icon = "fa-plus" }) {
  return (
    <div className="dropdown-wrapper">
      <details className="dropdown-group">
        <summary className="dropdown-summary">
          <div className="dropdown-icon-box">
            <i className={`fa-solid ${icon} dropdown-icon`}></i>
          </div>
          <h2 className="dropdown-title">{title}</h2>
          <i className="fa-solid fa-chevron-down dropdown-arrow"></i>
        </summary>

        <div className="dropdown-content">
          <ul className="dropdown-list">
            {items.map((item, index) => (
              <li className="dropdown-list-item" key={index}>
                <a className="dropdown-link" href={item.href || "#"}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </details>
    </div>
  );
}

export default DropDown;