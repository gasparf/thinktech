import React, {useState} from 'react';
import "./Home.css";
import Graph from "../HomeGraph/Graph";
import Table from "../HomeTable/Table";


const Home = () => {
    return (
        <div className='home'>
            

            {/* add seperate div for the top row? */}

            <Graph/>
            
            <div className='bottomRow'>
                <Table />
            </div>    
        
        
        </div>




    )
}

export default Home
