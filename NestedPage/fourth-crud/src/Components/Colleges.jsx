import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import College1 from './College1'


const Colleges = () => {
    const [College,setCollege]=useState([])
    useEffect(()=>{
        getallColleges();
    },[])
    const getallColleges= async()=>{
    let data= await(await fetch("http://localhost:3201/Registrations")).json();
    setCollege(data)
    }
  return (
    <div>
     <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Uiversity:</th>
            <th>Insttute:</th>
            <th>Branch</th>
            <th>Degree</th>
            <th>Status</th>
            <th>Average</th>
            <th>Experience</th>
            <th>website</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
         {College.map((clg,i)=> <College1 clg={clg} key={i} />)}
        </tbody>
      </table>
   

    </div>
  )
}

export default Colleges