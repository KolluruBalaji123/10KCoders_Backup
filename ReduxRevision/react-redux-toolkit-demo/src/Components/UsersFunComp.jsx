import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUserAction, addUserAsyncAction, deleteUserAction, deleteUserAsyncAction, getAllUsersAsyncAction, updateUserAction, UpdateUserASyncAction } from '../Store/slices/UsersSlice'


const UsersFunComp = () => {
   const[user,setUser]= useState({fname:"",lname:"",email:""})
   const [isEdit,setIsEdit]=useState(false)
   const{fname,lname,email}=user
   useEffect(()=>{
    dispatch(getAllUsersAsyncAction())
   })
    //similar to mapstatetoprops
    const users=useSelector((state)=> state.users)
    const dispatch=useDispatch();
    
    const handleSubmit=()=>{
        // console.log(user)
        // dispatch(addUserAction(user))
        dispatch(addUserAsyncAction(user))
        clearForm();

    }
    const handleUpdate=()=>{
        // dispatch(updateUserAction(user))
        dispatch(UpdateUserASyncAction(user))
        clearForm();
        setIsEdit(false)

    }
    const clearForm=()=>{
        setUser({fname:"",lname:"",email:""})
    }
    const handleChange=(e)=>{
        let newUser={...user}
        newUser[e.target.name]=e.target.value
        setUser(newUser)

    }
    const handleEdit=(usr)=>{
        setIsEdit(true)
        setUser(usr)


    }
     const handleDelete=(user)=>{
    //    dispatch(deleteUserAction(user))
    dispatch(deleteUserAsyncAction(user))
      

     }
    
  return (
    <div>
    <form>
    <label htmlFor="fname">FirstName</label>
    <input type="text" name='fname' value={fname} onChange={(e)=>{handleChange(e)}}  /> <br/><br/>
    <label htmlFor="lname">LastName</label>
    <input type="text" name='lname' value={lname} onChange={(e)=>{handleChange(e)}} /> <br/><br/>
    <label htmlFor="email">Email</label>
    <input type="email" name='email' value={email} onChange={(e)=>{handleChange(e)}} disabled={isEdit} /><br/><br/>
    {isEdit ?  <button type='button' onClick={handleUpdate}>updateUSER</button>: <button type='button' onClick={handleSubmit}>ADDUSER</button>
   }
   

    </form>
    <table  border={1}>
    <thead>
      <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {users.users.map((user,i)=> <tr key={i}>
        <td>
        {user.fname}
        </td>
        <td>{user.lname}</td>
        <td>{user.email}</td>
        <td><button type='button'  onClick={()=>{handleEdit(user)}} >Edit</button></td>
        <td><button type='button'  onClick={()=>{handleDelete(user)}}>Delete</button></td>
      </tr>)}
    </tbody>

    </table>
    
    </div>
  )
}

export default UsersFunComp