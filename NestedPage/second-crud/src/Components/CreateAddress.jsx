import React from 'react'
import { useState } from 'react';
import {useNavigate } from "react-router-dom"
import Userform from './Userform';

const CreateAddress = () => {
  const navigate= useNavigate();
  const [Address,SetAddress]=useState({
    id: "",
    street: "",
    empty: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",

  })
   const handleChange=(e)=>{
    let newAddress={...Address}
    newAddress[e.target.name]=e.target.value
    SetAddress(newAddress)

   }
   const addAddress=()=>{
    console.log(Address)
    fetch(" http://localhost:3201/Address",{
      method:"POST",
      body:JSON.stringify(Address),
      headers:{
        "Content-Type":"application/json"
      }
    }).then(()=>{
      console.log("User Added")
      clearForm();
      navigate("/")
    })

   }
    const clearForm=()=>{
      SetAddress({
        id: "",
        street: "",
        empty: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",

      })
    }
  return (
    <div className='container'>
    <Userform handleChange={handleChange} Address={Address} handleSubmit={addAddress} btnText="createAddress "/>
  
    </div>
  )
}

export default CreateAddress