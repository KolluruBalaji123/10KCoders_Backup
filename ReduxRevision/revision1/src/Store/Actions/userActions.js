import { ADD_USER, DELETE_USER, GET_USERS, UPDATE_USER } from "./ActionTypes"
import axios from "axios"
export const getUsersAsyncAction=()=>{
    axios.get(" http://localhost:3201/newusers").then((response)=>{
        return {
            type:GET_USERS,
            payload:response
        }
    })

}
export const addUserAction=(user)=>{
    return{
        type:ADD_USER,
        payload:user
    }
}
export const deleteUserAction=(user)=>{
    return{
        type:DELETE_USER,
       payload:user
    }
}
export const UpdateUserAction=(user)=>{
    return{
        type:UPDATE_USER,
        payload:user

    }
}