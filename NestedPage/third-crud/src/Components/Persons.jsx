import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Person from './Person'

const Persons = () => {
  const[Persons,setPersons]=useState([])
  useEffect(()=>{
    getallPersons();

  },[])
  const getallPersons= async()=>{
    let data=await(await fetch("http://localhost:3201/person")).json();
    setPersons(data)
  }
  return (
    <div>
<table className='table mt-3'>
<thead>
  <tr>
    <th>ID</th>
    <th>firstName</th>
    <th>LastName</th>
    <th>dateofBirth</th>
    <th>email</th>
    <th>Mobile</th>
    <th>Edit</th>
    <th>Delete</th>
  </tr>
</thead>
<tbody>
  {Persons.map((pers,i)=> <Person  mypers={pers} key={i}/>  )}
</tbody>

</table>

    
    </div>
  )
}

export default Persons