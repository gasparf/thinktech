import "./App.css";


import NavBar from "./NavBar";

import Borrowing from "./borrowing";

import {BrowserRouter as Route, Router, Routes} from "react-router-dom";


function App() {
    return ( 
        <>
        <Router>
            <div className = "App">

                <NavBar />
                <Routes>
                    <Route path="/" element={<App />}/>
                    <Route path="/Borrowing" element={<Borrowing />}/>
                </Routes>
                

            </div>
        </Router>
           
        </>
         
       
    );
}

export default App;