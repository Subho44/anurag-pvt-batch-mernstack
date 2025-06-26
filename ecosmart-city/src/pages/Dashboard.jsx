import React from 'react'
import Progresschart from '../components/Progresschart'
import Mapview from '../components/Mapview'

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
    <h4 className='mt-4'>Smart Location Map</h4>
    <Mapview/>
  </>
}

export default Dashboard