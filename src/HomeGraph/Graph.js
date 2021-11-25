import React from 'react';
import './Graph.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Data from './GraphData';

function Graph() {


    return (
        <div className='graph'>
            <h3 className='graph-title'>October Spendings</h3>
            <ResponsiveContainer width='100%' aspect={4/1}>
                <LineChart data={Data}>
                    <XAxis dataKey="date" fontSize='10px' />
                    <Line type="monotone" dataKey="amt" stroke='#e83131'/>
                    <Tooltip wrapperStyle={{fontSize: '12px'}}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Graph
