import { useState } from "react";
import { pricingData } from "./pricingData";
import "./PricingTabs.css";

const TABS = [
  { key: "equity", label: "Equity" },
  { key: "currency", label: "Currency" },
  { key: "commodity", label: "Commodity" },
];

export default function PricingTabs() {
  const [activeTab, setActiveTab] = useState("equity");
  const { headers, rows } = pricingData[activeTab];

  const renderCell = (val, key) => {
    if (Array.isArray(val)) {
      return (
        <ul className="cell-list">
          {val.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }
    return val;
  };

  return (
    <div className="pricing-container">
      <div className="tab-list">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`tab-btn ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <table className="pricing-table">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td className="row-label">{row.label}</td>
              {row.values.map((val, j) => (
                <td key={j}>{renderCell(val, `${i}-${j}`)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}