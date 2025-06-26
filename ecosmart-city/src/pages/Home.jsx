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
    title:'Water quality', 
    description:'imporoved by 20%',
    status:'Improved',
    image:'./src/assets/img2.jpg'
  },
    {
    title:'Dusbin waste', 
    description:'imporoved by 20%',
    status:'Improved',
    image:'./src/assets/img3.jpg'
  },
    {
    title:'tree plan wasted', 
    description:'imporoved by 20%',
    status:'Improved',
    image:'./src/assets/img2.jpg'
  },

];
const Home = ({searchterm}) => {
  const filtereddata = dummydata.filter(x => 
    x.title.toLowerCase().includes(searchterm.toLowerCase())
  )
  return <>
    <h2 className='mb-4'>Ecosmart City</h2>
    <Cardlist data={filtereddata}/>
  </>
}

export default Home