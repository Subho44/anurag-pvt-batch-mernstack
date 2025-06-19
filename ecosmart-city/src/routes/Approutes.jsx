import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Report from '../pages/Report'
import Adminpanel from '../pages/Adminpanel'
import Navbar from '../components/Navbar'

const Approutes = () => {

  return <>
   <BrowserRouter>
   <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/report' element={<Report/>}></Route>
        <Route path='/admin' element={<Adminpanel/>}></Route>
    </Routes>
   </BrowserRouter>

  </>
}

export default Approutes