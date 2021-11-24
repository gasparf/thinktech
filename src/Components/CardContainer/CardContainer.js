import React from "react";
import "./CardContainer.css";
import Card from "../Card/Card";

const CardContainer = ({ title, cardsData }) => {
  return (
    <div className="cards-container">
      <div className="cards-title">{title}</div>
      <div className="cards">
        {cardsData &&
          cardsData.map((card) => {
            return (
              <Card
                title={card.title}
                text={card.text}
                height="164px"
                width="272px"
              />
            );
          })}
      </div>
    </div>
  );
};

export default CardContainer;
