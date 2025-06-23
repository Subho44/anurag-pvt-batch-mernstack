import React from 'react'
import Progresschart from '../components/Progresschart'

const Dashboard = () => {
  const progressdata = [
    {month:'jan', progress:30},
    {month:'Feb', progress:40},
    {month:'Mar', progress:55},
    {month:'Apr', progress:65},
    {month:'May', progress:80},
  ]
  return <>
    <h2>city transformation progress</h2>
    <Progresschart data={progressdata}/>
  </>
}

export default Dashboard