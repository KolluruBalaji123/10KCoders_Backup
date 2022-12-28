import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth'

const LoginComp = () => {
  const navigate=useNavigate();
  const [userName,setUserName]=useState("");
    const {user,login} =useAuth();
    const handleLogin=()=>{
      // console.log(auth)
      login(userName)
      navigate("/products")
      

    }
 
  return (
    <div>
    <form>
    <input type="text" name='username' value={userName} onChange={(e)=>{setUserName(e.target.value)}} /><br/>
    <button type='button' className='btn btn-primary' onClick={handleLogin}>Login</button>

    </form>
   <p style={{color:"red"}}>plaese login to view the products</p>

    </div>
  )
}

export default LoginComp