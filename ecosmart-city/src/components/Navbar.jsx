import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {

  return <>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand" to=" ">Ecosmart City</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarScroll">
    <ul class="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style={{maxHeight:"100px"}}>
      <li class="nav-item active">
        <Link class="nav-link" to="">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/dashboard">Dashboard</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/report">Report</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/admin">Admin Panel</Link>
      </li>
      
    </ul>
    <form class="d-flex">
      <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>


  </>
}

export default Navbar