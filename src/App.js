import logo from "./logo.svg";
import "./App.css";


import FakeComponent from "./FakeComponent";
import NavBar from "./NavBar";

import Borrowing from "./Borrowing";

import {BrowserRouter as Route, Router, Routes} from "react-router-dom";


function App() {
    return ( 
        <>
        <Router>
            <div className = "App">

                <NavBar />
                <Routes>
                    <Route path="/Borrowing" element={<Borrowing />}/>
                </Routes>
                

                <header className = "App-header" >
                    
                    <img src = { logo } className = "App-logo" alt = "logo"/>

                    <p> Edit <code> src /App.js </code> and save to reload. </p> 

                    <a className = "App-link"  href = "https://reactjs.org" target = "_blank" rel = "noopener noreferrer"> 
                    Learn React 
                    </a> 

                    <FakeComponent name = "Candy" colour = "red" />

                </header> 

            </div>
        </Router>
           
        </>
         
       
    );
}

export default App;