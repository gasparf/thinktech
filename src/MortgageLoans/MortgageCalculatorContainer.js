import React from "react";
import "./MortgageCalculatorContainer.css";
import SdgIcon from "../Images/sdg-icon.png";
import Button from "../Components/Buttons/Button";

const MortgageCalculatorContainer = ({ children }) => {
  return (
    <div className="mortgage-calculator-container">
      <div className="mortgage-calculator-card">
        <img className="sdg-icon" src={SdgIcon} />
        <div className="mortgage-calculator-text">
          <div
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              marginBottom: "16px",
            }}
          >
            Mortgage Calculator
          </div>
          <div>
            Try out Vancity's new GHG Mortgage Calculator to make an ecofriendly
            choice towards home ownership.
          </div>
          <div style={{ marginBottom: "16px" }}>Zero Emissions by 2040</div>
          <Button
            width="200px"
            height="30px"
            borderRadius="6px"
            backgroundColor="#35FF9E"
            textColor="white"
            text="Mortgage GHG Calculator"
            onClick={() => {
              console.log("hi");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculatorContainer;
