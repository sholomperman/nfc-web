import React from "react";
import "./portfolio.scss";

const Portfolio = ({ arr }) => {
  return (
    <div className="Portfolio">
      <div className="bg-black">
        <div className="top">
          <h1>{arr?.name}</h1>
          <img src={arr?.avatar} alt="avatar" />
          <h3>{arr?.bio}</h3>
          <span>{arr?.hashtags}</span>
          <a href={arr?.contact}>Save Contact</a>
        </div>
        <div className="bottom">
          <div>
            {arr?.links?.map((item, index) => (
              <a key={item.id} target="_blank" rel="noreferrer" href={item.url}>
                <img src={item.icon} alt="icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
