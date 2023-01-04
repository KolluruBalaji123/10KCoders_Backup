import { ADD_PERSON, DELETE_PERSON } from "./ActionTypes"

export  const addUserAction=()=>{
  return {
    type:"ADD_USER",
    payload:"Balu"
  }

 }
  export const deleteUserAction=(user)=>{
  return{
   type:"Delete_User",
   payload:user
  }
 }
 export const addPersonAction = (person)=>{
    return {
      type:ADD_PERSON,
      payload:person
    }
  }
export const  DeletePersonAction =(person)=>{
  return {
    type:DELETE_PERSON,
    payload:person

  }

}