import React from 'react'
import {useNavigate} from "react-router-dom"

const College1 = ({clg}) => {
  const navigate=useNavigate();
   const handleCollege=(clg)=>{
    navigate("/edit/"+clg.id)

   }
   const deleteCollege=(clg)=>{
    navigate("/delete/"+clg.id)



   }
  return (
   <tr>
    <td>{clg.id}</td>
    <td>{clg.university}</td>
    <td>{clg.institute}</td>
    <td>{clg.Branch}</td>
    <td>{clg.Degree}</td>
    <td>{clg.statusc}</td>
    <td>{clg.Average}</td>
    <td>{clg.Experience}</td>
    <td>{clg.website}</td>
    <td>
        <button type='button' className='btn btn-warning' onClick={()=>{handleCollege(clg)}}>Edit</button>
    </td>
    <td>
    <button type='button' className='btn btn-danger'onClick={()=>{deleteCollege(clg)}}>Delete</button>
    </td>
  
   </tr>
  )
}

export default College1