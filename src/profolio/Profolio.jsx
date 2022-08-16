import React from "react";
import "./profolio.scss";

const Profolio = ({ arr }) => {
  return (
    <div className="Profolio">
      <div className="bg-black">
        <div className="top">
          <h1>{arr?.name}</h1>
          <img src={arr?.avator} alt="avator" />
          <h3>{arr?.bio}</h3>
          <span>{arr?.hashtags}</span>
          <a href={arr?.contact}>Save Contact</a>
        </div>
        <div className="bottom">
          <div>
            {arr?.links?.map((i) => (
              <a key={i.id} target="_blank" rel="noreferrer" href={i.url}>
                <img src={i.icon} alt="icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profolio;
