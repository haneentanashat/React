import React from 'react'
import {NavLink } from "react-router-dom";
import './Style.css';

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <NavLink to="/" className="nav-link" >Navbar</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink to="/Home"  className="nav-link">Home</NavLink>

        </li>
        <li class="nav-item">
        <NavLink to="/About"  className="nav-link">About</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/Contact"  className="nav-link" >Contact</NavLink>
        </li>
       </ul> </div>
  </div>
</nav>
  )
}

export default Nav
