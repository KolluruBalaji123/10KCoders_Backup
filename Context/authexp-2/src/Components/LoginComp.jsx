import React from 'react'
import { useState } from 'react'
import { useAuth } from './Auth'

const LoginComp = () => {
  const [userName,SetUserName]=useState("")
    const {user,login}=useAuth();
    // console.log(user)
    const handlelogin=()=>{
      login(userName)

    }

  return (
    <div>
    <form>
    <label htmlFor="">Usermail</label>
      <input type="text"  value={userName} onChange={(e)=>{SetUserName(e.target.value)}} />
      {/* <label htmlFor="">password</label>
      <input type="password" name ='pwd' value={userName.pwd} onChange={(e)=>{SetUserName(e.target.value)}} /><br/><br/> */}
      <button type='button' className='btn btn-primary' onClick={handlelogin}>Login</button>
    </form>
      

    </div>
  )
}

export default LoginComp