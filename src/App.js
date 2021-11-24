import React from 'react';
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./testPages/Home";
import Accounts from "./testPages/Accounts";
import Borrowing from "./testPages/Borrowing";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
    return ( 
        <>
        <Router>
                <NavBar/>
                <Routes>
                    <Route path="/" exact element={<Home />}/>
                    <Route path="/accounts" exact element={<Accounts />}/>
                    <Route path="/borrowing" exact element={<Borrowing />}/>
                </Routes>
                

        </Router>
           
        </>
         
       
    );
}

export default App;