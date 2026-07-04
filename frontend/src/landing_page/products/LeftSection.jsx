import React from "react";

function LeftSection({
  imageUrl,
  title,
  description,
  demo,
  learn,
  googlePlayImg,
  appStoreImg,
}) {
  return (
    <div className="container p-5 mt-5">
      <div className="row px-5">
        <div className="col-8">
          <img src={imageUrl} />
        </div>
        <div className="col-4 my-auto">
          <h3>{title}</h3>
          <p className="mt-4 text-muted" style={{ lineHeight: "1.6" }}>
            {description}
          </p>

          {(demo || learn) && (
            <div>
              {demo && (
                <a href="" className="pe-5">
                  {demo} <i className="fa-solid fa-arrow-right"></i>
                </a>
              )}
              {learn && (
                <a className="ps-5" href="">
                  {learn} <i className="fa-solid fa-arrow-right"></i>
                </a>
              )}
            </div>
          )}

          <div className="mt-4">
            <img
              style={{ width: "10rem" }}
              className="me-4"
              src={googlePlayImg}
            />
            <img style={{ width: "9rem" }} src={appStoreImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
