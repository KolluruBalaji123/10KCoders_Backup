import React from 'react'
import {Link} from "react-router-dom"
import { useAuth } from './Auth'

const NavBar = () => {
    const{user,login}=useAuth();
    console.log(user)

  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      {/* <a className="navbar-brand" href="#">
      Second Form Application
      </a> */}
      <Link className="navbar-brand" to={'/'}>user</Link>
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
        {user ? <li className='nav-link'>Logout</li>: <li className='nav-link'>Login</li>}
       
     
          {/* <li className="nav-item">
        
          <Link to={"/login"} className="nav-link">Login</Link>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default NavBar