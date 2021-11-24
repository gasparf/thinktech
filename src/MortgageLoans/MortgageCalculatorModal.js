import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const MortgageCalculatorModal = ({ showModal, onHide }) => {
  const [outstandingAmount, setOutstandingAmount] = useState(null);
  const [principleValue, setPrincipleValue] = useState(null);
  const [energyConsumption, setEnergyConsumption] = useState(null);
  const [emissionFactors, setEmissionFactors] = useState(null);
  const [ghg, setGhg] = useState(null);

  const onClickCalculate = () => {
    setGhg(
      (outstandingAmount / principleValue) * energyConsumption * emissionFactors
    );
  };

  const onClose = () => {
    setGhg(null);
    onHide();
  };

  return (
    <Modal size="lg" show={showModal} onHide={onHide} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>Mortgage GHG Calculator</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <label style={{ margin: "8px" }}>
            <div style={{ fontWeight: "bold" }}>Outstanding Amount:</div>
            <input
              style={{ width: "50%", textAlign: "center" }}
              type="text"
              name="outstandingAmount"
              onChange={(e) => setOutstandingAmount(e.target.value)}
            ></input>
          </label>
          <label style={{ margin: "8px" }}>
            <div style={{ fontWeight: "bold" }}>
              Principle Value at Origination:
            </div>
            <input
              style={{ width: "50%", textAlign: "center" }}
              type="text"
              name="principleValue"
              onChange={(e) => setPrincipleValue(e.target.value)}
            ></input>
          </label>
          <label style={{ margin: "8px" }}>
            <div style={{ fontWeight: "bold" }}>Actual Energy Consumption</div>
            <div>(kWh- electricity, GJ-gas):</div>
            <input
              style={{ width: "50%", textAlign: "center" }}
              type="text"
              name="cnergyConsumption"
              onChange={(e) => setEnergyConsumption(e.target.value)}
            ></input>
          </label>
          <label style={{ margin: "8px" }}>
            <div style={{ fontWeight: "bold" }}>Emission Factors</div>
            <div>(kg CO2/kwh):</div>
            <input
              style={{ width: "50%", textAlign: "center" }}
              type="text"
              name="emissionFactors"
              onChange={(e) => setEmissionFactors(e.target.value)}
            ></input>
          </label>
          {ghg && <div>Total Estimated GHG Emissions: {ghg} Co2 kg</div>}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="danger" onClick={onClickCalculate}>
          Calculate
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MortgageCalculatorModal;
