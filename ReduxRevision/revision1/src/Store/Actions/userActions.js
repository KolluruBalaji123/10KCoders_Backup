import { ADD_USER, DELETE_USER, UPDATE_USER } from "./ActionTypes"

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