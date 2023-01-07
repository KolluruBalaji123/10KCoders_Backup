import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUserFromServerAction } from '../Store/Actions/userActions';

const Users = () => {
    const dispatch =useDispatch();
    const userDetails =useSelector((state)=>state.users)
    console.log(userDetails)
    useEffect(()=>{
        dispatch(getUserFromServerAction())

    },[])
  return (
    <div>

    </div>
  )
}

export default Users