import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./testPages/Home";
import Random from "./testPages/Random";
import Borrowing from "./testPages/Borrowing";

import {BrowserRouter as Route, Router, Routes} from "react-router-dom";


function App() {
    return ( 
        <>
        <Router>
            <div className = "App">

                <NavBar />
                <Routes>
                    <Route path="/" exact element={<Home />}/>
                    <Route path="/random" exact element={<Random />}/>
                    <Route path="/borrowing" exact element={<Borrowing />}/>
                </Routes>
                

            </div>
        </Router>
           
        </>
         
       
    );
}

export default App;