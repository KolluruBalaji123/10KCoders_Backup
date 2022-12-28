import React from 'react'
import {Link} from "react-router-dom"
import { useAuth } from './Auth'

const NavBar = () => {
    const{user}=useAuth();
    console.log(user)// 1hr 05 mins  iwas stopped

  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      {/* <a className="navbar-brand" href="#">
      Second Form Application
      </a> */}
      <Link className="navbar-brand" to={'/'}>ThirdForm</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          {/* <Link to={"create"} className="nav-link">CreateAddress</Link> */}
          <Link to={"/login"} className="nav-link">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default NavBar