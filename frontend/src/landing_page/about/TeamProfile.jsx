import React from "react";

function TeamProfile({ imageUrl, name, designation }) {
  return (
    <div className="container text-center pb-2 ">
      <img className="rounded-circle mt-5" style={{ width: "65%" }} src={imageUrl} />
      <h5 className="mb2 mt-3">{name}</h5>
      <h6 className="text-muted fw-lighter">{designation}</h6>
    </div>
  );
}

export default TeamProfile;
