import React, { useState } from 'react'
import { useEffect } from 'react'
import { json, useNavigate, useParams } from 'react-router-dom'
import Userform from './Userform'

const EditAddress = () => {
  const navigate =useNavigate();
  const params=useParams();
  const [Address,SetAddress]=useState({
    id: "",
    street: "", 
    empty: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",

  })
  useEffect(()=>{
    fetch("http://localhost:3201/Address/"+params.id).then((response)=> response.json()).then((data)=>{
      SetAddress(data)
    })
  },[])
  const handleChange=(e)=>{
    let newAddress={...Address}
    newAddress[e.target.name]=e.target.value
    SetAddress(newAddress)

   }
    const updateAddress=()=>{
      // console.log("update user called")
      fetch("http://localhost:3201/Address/"+params.id,{
        method:"PUT",
        body:JSON.stringify(Address),
        headers:{
          "Content-Type":"application/json"
        }

      }).then(()=>{
        navigate("/")
      })
    }
  return (
    <div className='conatiner'>
    <h2>
      Welcome to edit User
    </h2>
    <Userform Address={Address} handleChange={handleChange} btnText="UpdateAddress" handleSubmit={updateAddress} />

    </div>
  )
}

export default EditAddress