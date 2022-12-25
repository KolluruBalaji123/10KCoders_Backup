import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import UserForm from './UserForm'
import {useParams,useNavigate} from "react-router-dom"

const EditPerson = () => {
  const navigate=useNavigate();
  const params=useParams()
  const [Person, setPersons] = useState({
    id: "",
    firstname: "",
    lastname: "",
    dateofBirth: "",
    EmailId: "",
    MobileNumber: "",
  });
  const handleChange=(e)=>{
    let newperson={...Person}
    newperson[e.target.name]=e.target.value
    setPersons(newperson)

  }
  const updatePerson=()=>{
    fetch("http://localhost:3201/person/"+params.id,{
      method:"PUT",
      body:JSON.stringify(Person),
      headers:{
        "Content-Type":"application/json"
      }

    }).then(()=>{
      navigate("/")

    })

  }
  useEffect(()=>{
    fetch("http://localhost:3201/person/"+params.id).then((response)=> response.json()).then((data)=>{
      setPersons(data)
    })
  },[])
  return (
    <div className='container'>
    <UserForm  Person={Person} handleChange={handleChange} btnText="updateUser" handlePerson={updatePerson}/>
    </div>
  )
}

export default EditPerson