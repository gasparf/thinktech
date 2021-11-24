import React from "react";
import "./Card.css";
import ApplyNowButton from "../Buttons/ApplyNowButton";
import LearnMoreButton from "../Buttons/LearnMoreButton";

const Card = ({ title, text, height, width, onApply, onLearnMore }) => {
  return (
    <div className="card-container" style={{ height: height, width: width }}>
      <div className="card-title">{title}</div>
      <div className="card-text">{text}</div>
      <div className="card-buttons">
        <span className="card-left-button">
          <ApplyNowButton />
        </span>
        <span className="card-right-button">
          <LearnMoreButton />
        </span>
      </div>
    </div>
  );
};
export default Card;
