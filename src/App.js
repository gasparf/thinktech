import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./testPages/Home";
import Random from "./testPages/Random";
import Borrowing from "./testPages/Borrowing";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
    return ( 
        <>
        <Router>
                <NavBar/>
                <Routes>
                    <Route path="/" exact component={Home}/>
                    <Route path="/random" exact component={Random}/>
                    <Route path="/borrowing" exact component={Borrowing}/>
                </Routes>
                

        </Router>
           
        </>
         
       
    );
}

export default App;