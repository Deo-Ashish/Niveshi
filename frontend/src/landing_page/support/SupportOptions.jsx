import React from "react";
import DropDown from "./DropDown";

function SupportOptions() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-8">
          <DropDown
            title="Account Opening"
            items={[
              { label: "Resident individual", href: "" },
              { label: "Minor", href: "#" },
              { label: "Non Resident Indian (NRI)", href: "" },
              { label: "Company, Partnership, HUF and LLP", href: "" },
              { label: "Glossary", href: "" },
            ]}
          />

          <DropDown
            title="Your Zerodha Account"
            icon="fa-regular fa-circle-user"
            items={[
              { label: "Your Profile", href: "" },
              { label: "Account Modification", href: "" },
              {
                label:
                  "Client Master Report (CMR) and Depository Participant (DP)",
                href: "",
              },
              { label: "Nomination", href: "" },
              { label: "Transfer and conversion of securities", href: "" },
            ]}
          />
          <DropDown
            title="Kite"
            icon="fa-indian-rupee-sign"
            items={[
              { label: "Brokerage charges", href: "" },
              { label: "Transaction charges", href: "" },
            ]}
          />
          <DropDown
            title="Funds"
            icon="fa-indian-rupee-sign"
            items={[
              { label: "Brokerage charges", href: "" },
              { label: "Transaction charges", href: "" },
            ]}
          />
          <DropDown
            title="Console"
            icon="fa-indian-rupee-sign"
            items={[
              { label: "Brokerage charges", href: "" },
              { label: "Transaction charges", href: "" },
            ]}
          />
          <DropDown
            title="Coin"
            icon="fa-solid fa-coins"
            items={[
              { label: "Brokerage charges", href: "" },
              { label: "Transaction charges", href: "" },
            ]}
          />
        </div>
        <div className="col-4 ps-5">
          <div className="row lh-lg" style={{ backgroundColor: "#FDF4EA" }}>
            <div
              className="col-1"
              style={{
                backgroundColor: "#F09637",
              }}
            ></div>
            <div className="col-10">
              <ul>
                <li>
                  <a href="">Intermittent issue with adding funds on Kite</a>
                </li>
                <li>
                  <a href="">Current Buybacks - July 2026</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row border mt-4">
            <table>
              <thead
                className=""
                style={{ backgroundColor: "#F6F6F6", height: "50px" }}
              >
                <tr>
                  <th>&nbsp; &nbsp;&nbsp;Quick links</th>
                </tr>
              </thead>
              <tbody>
                <ol>
                  <tr>
                    <td>
                      <li className="lh-lg">Track account opening</li>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <li className="lh-lg">Intraday margins</li>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <li className="lh-lg">Kite user manual</li>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <li className="lh-lg">Learn how to create a ticket</li>
                    </td>
                  </tr>
                </ol>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportOptions;
