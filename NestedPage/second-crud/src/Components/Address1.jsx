import React from 'react'
import {useNavigate } from "react-router-dom"
const Address1 = ({myadr}) => {
 
  const navigate=useNavigate()
  const  deleteAddress=(myadr)=>{
    console.log(myadr)
    navigate("/delete/"+myadr.id)
  }
  const handledit=(myadr)=>{
    navigate("/edit/"+myadr.id)

  }
    console.log(myadr)
  return (
    <tr>
      <td>{myadr.id}</td>
      <td>{myadr.street}</td>
      <td>{myadr.empty}</td>
      <td>{myadr.city}</td>
      <td>{myadr.state}</td>
      <td>{myadr.zipcode}</td>
      <td>{myadr.country}</td>
      <td>
        <button type='button' className='btn btn-warning' onClick={()=>{handledit(myadr)}}> EDIT</button>
      </td>
      <td>
        <button type='button' className='btn btn-danger' onClick={()=>{deleteAddress(myadr)}}> DELETE</button>
      </td>
    </tr>
   
  )
}

export default Address1
