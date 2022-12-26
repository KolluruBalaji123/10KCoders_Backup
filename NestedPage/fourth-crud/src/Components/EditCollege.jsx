import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams,useNavigate} from "react-router-dom"
import UserForm from './UserForm';

const EditCollege = () => {
  const params=useParams();
  const navigate=useNavigate();
  const [Registrations,setRegistrations]=useState({
    id: 1,
    university: "",
    institute: "",
    Branch: "",
    Degree: "",
    statusc: "",
    Average: "",
    Experience: "",
    website: ""
    
  })
  const handleChange=(e)=>{
    let newcollege={...Registrations}
    newcollege[e.target.name]=e.target.value
    setRegistrations(newcollege)

  }
  useEffect(()=>{
    fetch("http://localhost:3201/Registrations/"+params.id).then((response)=>response.json()).then((data)=>{
      setRegistrations(data)
    })
  },[])
   const updateCollege=()=>{
    fetch("http://localhost:3201/Registrations/"+params.id,{
      method:"PUT",
      body:JSON.stringify(Registrations),
      headers:{
        "Content-Type":"application/json"
      }

    }).then(()=>{
      navigate("/")
    })
   }

  return (
    <div>
    <UserForm handleChange={handleChange} Registrations={Registrations} btnText="updateCollege" handleCollege={updateCollege}/>

    </div>
  )
}

export default EditCollege