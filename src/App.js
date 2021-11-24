import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./testPages/Home";
import Accounts from "./testPages/Accounts";
import MortgageLoans from "./MortgageLoans/MortgageLoans";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/accounts" exact element={<Accounts />} />
            <Route path="/borrowing" exact element={<MortgageLoans />} />
          </Routes>

            


        </div>
      </Router>
    </>
  );
}

export default App;
