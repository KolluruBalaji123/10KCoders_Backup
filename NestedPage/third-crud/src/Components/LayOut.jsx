import React from 'react'
import {Outlet} from "react-router-dom"

const LayOut = () => {
  return (
    <div>
    <h2>Hii welcome to Third Form Crud</h2>
    <Outlet/>
    
    </div>
  )
}

export default LayOut