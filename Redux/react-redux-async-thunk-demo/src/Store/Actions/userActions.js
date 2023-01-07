import axios from "axios"
import { GET_USERS } from "./ActionTypes"


export const getUserFromServerAction =()=>{
   return (dispatch)=>{
    axios.get("http://localhost:3201/users").then(response=>{
        console.log(response.data)
        dispatch({
            type:GET_USERS,
            payload:response.data
        })
    })
   }
}