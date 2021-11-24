import React from "react";

import { MortgageData, LoanData } from "../Components/CardContainer/CardData";
import CardContainer from "../Components/CardContainer/CardContainer";
import MortgageCalculatorContainer from "./MortgageCalculatorContainer";

const MortgageLoans = () => {
  return (
    <div className="mortgage-loans">
      <MortgageCalculatorContainer>
        <div>Try out our new calculator</div>
      </MortgageCalculatorContainer>
      <div style={{ display: "flex" }}>
        <CardContainer title="M o r t g a g e s" cardsData={MortgageData} />
        <CardContainer title="L o a n s" cardsData={LoanData} />
      </div>
    </div>
  );
};

export default MortgageLoans;
