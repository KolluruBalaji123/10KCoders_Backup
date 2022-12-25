import React from 'react'
import {useNavigate} from "react-router-dom"

const Person = ({mypers}) => {
  
  const navigate=useNavigate();
  
    const deletePerson=(mypers)=>{
      console.log(mypers)
      navigate("/delete/"+mypers.id)
    }
    const handleEdit=(mypers)=>{
      navigate("/edit/"+mypers.id)

    }
  return (
    <tr>
        <td>{mypers.id}</td>
        <td>{mypers.firstname}</td>
        <td>{mypers.lastname}</td>
        <td>{mypers.dateofBirth}</td>
        <td>{mypers.EmailId}</td>
        <td>{mypers.MobileNumber}</td>
        <td>
            <button className='btn btn-warning' onClick={()=>{handleEdit(mypers)}}>Edit</button>
        </td>
        <td>
            <button className='btn btn-danger' onClick={()=>{deletePerson(mypers)}}>Delete</button>
        </td>
    </tr>
  )
}

export default Person