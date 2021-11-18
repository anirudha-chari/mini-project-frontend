import React,{useEffect,useState} from 'react'
// import "./chart.css"
import "../../styles/chart.css"
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart,Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

function Chart({title,dataKey,grid}) {
    const[data2,setData]= useState([]);

    // const getData = async()=>{
    //   const response = await fetch('https://6194599f9b1e780017ca1f28.mockapi.io/catchart');
    //   setData(await response.json());
    // }
      const getData= async()=>{
        axios.get('https://6194599f9b1e780017ca1f28.mockapi.io/catchart').then((res)=>setData(res.data))
      
     }
    

    useEffect(()=>{
      getData();
    },[]);


    return (
        // <div className="chart">
        //     <h3 className="chartTitle">{title}</h3>
        //      <ResponsiveContainer width="100%" aspect={4/1}>
        //      <LineChart data={data}>
        //      <XAxis dataKey="month" strock="#5550bd"/>
        //     <Line type="monotone" dataKey={dataKey} strock="#5550bd"/>
        //       <Tooltip/>
        //       <CartesianGrid stroke="#e0dfdf"/>
        //      </LineChart>
        //      </ResponsiveContainer>
        // </div>

        <div className="chart"> 
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
            <BarChart width={730} height={250} data={data2}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
             <YAxis />
             <Tooltip />
             <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
            </BarChart>
        </ResponsiveContainer>
        </div>
    )
}

export default Chart
