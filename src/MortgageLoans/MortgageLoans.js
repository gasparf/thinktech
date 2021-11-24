import React, { useCallback, useState } from "react";

import { MortgageData, LoanData } from "../Components/CardContainer/CardData";
import CardContainer from "../Components/CardContainer/CardContainer";
import MortgageCalculatorContainer from "./MortgageCalculatorContainer";
import MortgageCalculatorModal from "./MortgageCalculatorModal";

const MortgageLoans = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mortgage-loans">
      <MortgageCalculatorContainer
        onClickCalculator={() => setShowModal(true)}
      />
      <div style={{ display: "flex" }}>
        <CardContainer title="M o r t g a g e s" cardsData={MortgageData} />
        <CardContainer title="L o a n s" cardsData={LoanData} />
      </div>
      <MortgageCalculatorModal
        showModal={showModal}
        onHide={() => setShowModal(false)}
      />
    </div>
  );
};

export default MortgageLoans;
