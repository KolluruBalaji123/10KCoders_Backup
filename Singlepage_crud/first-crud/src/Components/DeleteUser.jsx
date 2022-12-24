import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import User from './User';

const DeleteUser = () => {
  const[users,setusers]=useState({

  })
  const navigate=useNavigate();

  const params=useParams();
  console.log(params)
  useEffect(()=>{
    fetch("http://localhost:3201/users/"+params.id).then((res)=> res.json()).then((data)=>{
      console.log(data)
      setusers(data)

    })
  },[])
  const confirmDelete=()=>{
    fetch("http://localhost:3201/users/"+params.id,{
      method:"DELETE"
    }).then(()=>{
      navigate("/")

    })
  }
  return (
    <div>
    <ul>
      <li>
        {users.id}
      </li>
      <li>{users.fullname}</li>
      <li>{users.username}</li>
      <li>{users.email}</li>
      <li>{users.password}</li>
      <li>{users.confirmpassword}</li>
    </ul>
    <button className='btn btn-danger' onClick={confirmDelete}>Confirm Delete</button>
    </div>
  )
}

export default DeleteUser