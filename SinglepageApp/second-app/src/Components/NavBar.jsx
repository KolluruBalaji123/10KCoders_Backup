import React from 'react'
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to={"/"} className="nav-link">
          Home
        </Link>
          
        </li>
        <li class="nav-item">
        <Link to={"/aboutus"} className="nav-link">
          AboutUs
        </Link>
       
        </li>
        <li class="nav-item">
        <Link to={"/contactus"} className="nav-link">
          Contactus
        </Link>
         
        </li>
        <li class="nav-item">
        <Link to={"/login"} className="nav-link">
          Login
        </Link>
         </li>
         <li class="nav-item">
         <Link to={"/register"} className="nav-link">
          Register
         </Link>
         
         </li>
         <li class="nav-item">
         <Link to={"/status"} className="nav-link">
         status
         </Link>
         
         </li>
         
         
    
      </ul>
    </div>
  </div>
</nav>
 

    </div>
  )
}

export default NavBar