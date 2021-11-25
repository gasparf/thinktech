import React from "react";

const Random = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "294px",
        width: "400px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "40px",
        marginTop: "80px",
        left: "10%",
        borderRadius: "15px",
      }}
    >
      <h3>Summary</h3>
      <div style={{ padding: "10px" }}>Total Assets: $87,342.15</div>
      <div style={{ padding: "10px" }}>Spending Last Month: $2,345.56</div>
      <div style={{ padding: "10px" }}>Earning Last Month: $5,000.00</div>
      <div style={{ padding: "10px" }}>GHG Emissions: 432 CO2eq</div>
    </div>
  );
};

export default Random;
