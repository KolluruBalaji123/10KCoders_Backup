import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams, useNavigate} from "react-router-dom"

const DeleteCollege = () => {
  const params=useParams();
  const navigate=useNavigate();
  const[College,setCollege]=useState({})
  useEffect(()=>{
    fetch("http://localhost:3201/Registrations/"+params.id).then((response)=> response.json()).then((data)=>{
      setCollege(data)

    })
  },[])
  const ConfirmDelete=()=>{
    fetch("http://localhost:3201/Registrations/"+params.id,{
      method:"DELETE"

    }).then(()=>{
      navigate("/")
    })
  }
  return (
    <div>
  <ul>
   <li>{College.id}</li>
   <li>{College.university}</li>
   <li>{College.institute}</li>
   <li>{College.Branch}</li>
   <li>{College.Degree}</li>
   <li>{College.statusc}</li>
   <li>{College.Average}</li>
   <li>{College.Experience}</li>
   <li>{College.website}</li>
   </ul>
  <button type='button' onClick={ConfirmDelete} className="btn btn-danger">ConfirmDelete</button>

    </div>
  )
}

export default DeleteCollege