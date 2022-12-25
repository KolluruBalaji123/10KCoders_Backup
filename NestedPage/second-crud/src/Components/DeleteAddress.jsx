import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams,useNavigate} from "react-router-dom"
import Address from './Address';

const DeleteAddress = () => {
  const [Address,SetAddress]=useState({})
  const params= useParams();
  const navigate=useNavigate()
  useEffect(()=>{
    fetch("http://localhost:3201/Address/"+params.id).then((response)=>{
      return response.json()
    }).then((data)=>{
      console.log(data)
      SetAddress(data)
    })
  },[])
  const ConfirmDelete=()=>{
    fetch("http://localhost:3201/Address/"+params.id,{
      method:"DELETE"
    }).then(()=>{
      navigate("/")

    })

  }
  return (
    <div>
    <ul>
      <li>{Address.id}</li>
      <li>{Address.street}</li>
      <li>{Address.empty}</li>
      <li>{Address.city}</li>
      <li>{Address.state}</li>
      <li>{Address.zipcode}</li>
      <li>{Address.country}</li>
    </ul>
    <button className='btn btn-danger' onClick={ConfirmDelete}>ConfirmDelete</button>

    </div>
  )
}

export default DeleteAddress