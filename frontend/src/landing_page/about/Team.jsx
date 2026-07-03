import React from "react";
import TeamProfile from "./TeamProfile";

function Team() {
  return (
    <div className="container mt-5 px-5 pb-5 mb-5">
      <div className="row">
        <div className="col-4">
          <TeamProfile
            imageUrl={"media/images/nithinKamath.jpg"}
            name={"Ankit Bhagat"}
            designation={"Co-founder & CFO"}
          />
        </div>
        <div className="col-4">
          <TeamProfile
            imageUrl={"media/images/nithinKamath.jpg"}
            name={"Adarsh Kumar"}
            designation={"CTO"}
          />
        </div>
        <div className="col-4">
          <TeamProfile
            imageUrl={"media/images/nithinKamath.jpg"}
            name={"Aman Ranjan"}
            designation={"COO"}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <TeamProfile
            imageUrl={"media/images/nithinKamath.jpg"}
            name={"Anmol Bhagat"}
            designation={"Director"}
          />
        </div>
        <div className="col-4">
          <TeamProfile
            imageUrl={"media/images/nithinKamath.jpg"}
            name={"Rajdeep Kumar"}
            designation={"Chief of Education"}
          />
        </div>
        <div className="col-4">
          <TeamProfile
            imageUrl={"media/images/nithinKamath.jpg"}
            name={"Suraj Kumar"}
            designation={"Director Strategy"}
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
