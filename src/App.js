import logo from "./logo.svg";
import "./App.css";
import ReactDOM from 'react-dom';

import FakeComponent from "./FakeComponent";
import sideBar from "./navbar";

function App() {
    return ( 
    
        < div className = "App" >
        <header className = "App-header" >
            <sidebar />
            <img src = { logo } className = "App-logo" alt = "logo"/>

            <p> Edit <code> src /App.js </code> and save to reload. </p> 

            <a className = "App-link"  href = "https://reactjs.org" target = "_blank" rel = "noopener noreferrer"> 
            Learn React 
            </a> 

            <FakeComponent name = "Candy" colour = "red" />

        </header> 
        </div>
    );
}

export default App;