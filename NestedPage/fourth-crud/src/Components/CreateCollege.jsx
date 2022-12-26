import React from 'react'
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import UserForm from './UserForm';

const CreateCollege = () => {
  const navigate =useNavigate();
  const [Registrations,setRegistrations]=useState({
    id: "",
    university: "",
    institute: "",
    Branch: "",
    Degree: "",
    statusc : "",
    Average: "",
    Experience: "",
    website: "",

  })
   const handleChange=(e)=>{
    let newCollege={...Registrations}
    newCollege[e.target.name]=e.target.value
    setRegistrations(newCollege)

   }
   const addCollege=()=>{
    fetch(" http://localhost:3201/Registrations",{
      method:"POST",
      body:JSON.stringify(Registrations),
      headers:{
        "Content-Type":"application/json"
      }

    }).then(()=>{
      navigate("/")
    })
    

   }
  
    const clearForm=()=>{
      setRegistrations({
        id: "",
        university: "",
        institute: "",
        Branch: "",
        Degree: "",
        statusc: "",
        Average: "",
        Experience: "",
        website: "",

      })
    }
  return (
    <div className='container'>
    <UserForm handleChange={handleChange} Registrations={Registrations} handleCollege={addCollege} btnText="CreateCollege"/>
   
    </div>
  )
}

export default CreateCollege