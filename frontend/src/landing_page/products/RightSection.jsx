import React from "react";

function RightSection({
  imageUrl,
  title,
  description,
  demo,
  learn,
  googlePlayImg,
  appStoreImg,
}) {
  return (
    <div className="container p-5 mt-3">
      <div className="row px-5">
        <div className="col-4 my-auto">
          <h3>{title}</h3>

          <p className="mt-4 text-muted" style={{ lineHeight: "1.6" }}>
            {description}
          </p>

          {(demo || learn) && (
            <div className="mb-4">
              {demo && (
                <a href="#" className="pe-5 text-decoration-none">
                  {demo} <i className="fa-solid fa-arrow-right"></i>
                </a>
              )}

              {learn && (
                <a
                  href="#"
                  className={`text-decoration-none ${demo ? "ps-5" : ""}`}
                >
                  {learn} <i className="fa-solid fa-arrow-right"></i>
                </a>
              )}
            </div>
          )}

          {(googlePlayImg || appStoreImg) && (
            <div className="mt-4">
              {googlePlayImg && (
                <img
                  src={googlePlayImg}
                  alt="Google Play"
                  className="me-4"
                  style={{ width: "10rem" }}
                />
              )}

              {appStoreImg && (
                <img
                  src={appStoreImg}
                  alt="App Store"
                  style={{ width: "9rem" }}
                />
              )}
            </div>
          )}
        </div>

        <div className="col-7 ps-5 ms-5">
          <img src={imageUrl} alt={title} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;