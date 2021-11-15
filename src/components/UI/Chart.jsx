import React from 'react'
// import "./chart.css"
import "../styles/chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart({title,data,dataKey,grid}) {
  

    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
             <ResponsiveContainer width="100%" aspect={4/1}>
             <LineChart data={data}>
             <XAxis dataKey="month" strock="#5550bd"/>
            <Line type="monotone" dataKey={dataKey} strock="#5550bd"/>
              <Tooltip/>
              <CartesianGrid stroke="#e0dfdf"/>
             </LineChart>
             </ResponsiveContainer>
        </div>
    )
}

export default Chart
