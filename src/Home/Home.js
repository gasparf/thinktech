import React, { useState } from "react";
import "./Home.css";
import Graph from "../HomeGraph/Graph";
import DataTable from "../HomeTable/DataTable";
import Accounts from "../Accounts/Accounts";
import { AccountData } from "../Accounts/AccountData";
import Random from "../Random/Random";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="home">
        {/* add seperate div for the top row? */}
        <div className="rowContainer">
          <div className="row">
            <Graph />
          </div>
          <div className="row">
            <DataTable />
          </div>
        </div>
      </div>
      <div>
        <Accounts accounts={AccountData} />
        <Random />
      </div>
    </div>
  );
};

export default Home;
