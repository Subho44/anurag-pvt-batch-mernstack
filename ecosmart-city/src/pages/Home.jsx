import React from 'react'
import Cardlist from '../components/Cardlist';
const dummydata = [
  {
    title:'Air quality', 
    description:'imporoved by 20%',
    status:'Improved',
    image:'./src/assets/img1.jpg'
  },
    {
    title:'Air quality2', 
    description:'imporoved by 20%',
    status:'Improved',
    image:'./src/assets/img2.jpg'
  },
    {
    title:'Air quality3', 
    description:'imporoved by 20%',
    status:'Improved',
    image:'./src/assets/img3.jpg'
  },
    {
    title:'Air quality4', 
    description:'imporoved by 20%',
    status:'Improved',
    image:'./src/assets/img2.jpg'
  },

];
const Home = () => {
  return <>
    <h2 className='mb-4'>Ecosmart City</h2>
    <Cardlist data={dummydata}/>
  </>
}

export default Home