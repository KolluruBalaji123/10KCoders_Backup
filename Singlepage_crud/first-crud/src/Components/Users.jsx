import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import User from './User';

const Users = () => {
    const [users,setusers]=useState([]);
    useEffect(()=>{
        getAllUsers()
    },[])
    const getAllUsers= async ()=>{
        const data= await (await fetch("http://localhost:3201/users")).json();
        // console.log(data)
        setusers(data)

    }
  return (
    <div>
    <table className="table  mt-3">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>confirm password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
       {users.map((use,i)=>  <User usr={use} key={i}/>)}
          
        </tbody>
      </table>
   
   
    </div>
  )
}

export default Users