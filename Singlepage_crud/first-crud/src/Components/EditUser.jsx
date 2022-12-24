import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserForm from './UserForm'

const EditUser = () => {
  const navigate=useNavigate();
  const params=useParams();
  const [users, setusers] = useState(
    {
      id: "",
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    []
  );
  const  handleChange=(e)=>{
    let newuser={...users}
    newuser[e.target.name]=e.target.value
    setusers(newuser);

  }
  useEffect(()=>{
    fetch("http://localhost:3201/users/"+params.id).then((res)=>res.json()).then((data)=>{
      setusers(data)
    })
  },[])
  const updateUser=()=>{
    fetch("http://localhost:3201/users/"+params.id,{
      method:"PUT",
      body:JSON.stringify(users),
      headers:{
        "Content-Type":"application/json"
      }
    }).then(()=>{
      navigate("/")

    })
  }
  return (
    <div className='container'>
    <UserForm users={users} handleChange={handleChange} btnText="UpdateUser" handleSubmit={updateUser}/>
    </div>
  )
}

export default EditUser