import React, {useState} from 'react';
import "./Home.css";
import Graph from "../HomeGraph/Graph";
import DataTable from "../HomeTable/DataTable";


const Home = () => {
    return (
        <div className='home'>
            

            {/* add seperate div for the top row? */}
            <div className='rowContainer'>
                <div className='row'>
                    <Graph/>

                </div>
                
                <div className='row'>
                    <DataTable />

                </div>
            </div>

        
        
        </div>




    )
}

export default Home
