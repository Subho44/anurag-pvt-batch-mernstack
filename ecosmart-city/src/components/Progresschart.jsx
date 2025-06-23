import React from 'react'
import { LineChart,Line,XAxis,YAxis,Tooltip,CartesianGrid } from 'recharts'
const Progresschart = ({data}) => {

  return <>
  <LineChart width={600} height={300} data={data}>
    <XAxis dataKey="month" />
    <YAxis/>
    <Tooltip/>
    <CartesianGrid stroke='#ccc'/>
    <Line type="monotone" dataKey="progress"/>
  </LineChart>


  </>
}

export default Progresschart