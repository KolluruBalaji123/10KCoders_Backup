import { ADD_USER, DELETE_USER, GET_USERS, UPDATE_USER } from "./ActionTypes"
import axios from "axios"
export const getUsersAsyncAction=()=>{
    return (dispatch)=>{
        getUsersFromApi(dispatch)

    }
}
function getUsersFromApi(dispatch){
    axios.get(" http://localhost:3201/newusers").then((response)=>{
     dispatch({
        type:GET_USERS,
        payload:response.data
     })
    })

}

export const addUserAsyncAction =(user)=>{
   return (dispatch)=>{
    axios.post(" http://localhost:3201/newusers",user).then(()=>{
     getUsersFromApi(dispatch)
        
    })

   }
}
export const deleteUserAsyncAction=(user)=>{
    return (dispatch)=>{
        axios.delete("http://localhost:3201/newusers/"+user.id).then(()=>{
            getUsersFromApi(dispatch)
        })
    }

}
export const UpdateUserAsyncAction=(user)=>{
    return(dispatch)=>{
        axios.put("http://localhost:3201/newusers/"+user.id,user).then(()=>{
            getUsersFromApi(dispatch)
        })

    }

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