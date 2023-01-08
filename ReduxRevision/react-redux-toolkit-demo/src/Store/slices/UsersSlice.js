import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./defaultState";
import axios from "axios"
export const getAllUsersAsyncAction =createAsyncThunk("users/getAllUsersAsyncAction",async ()=>{
   const response = await axios.get("http://localhost:3201/newusers");
   return response.data;

})
   export const deleteUserAsyncAction=createAsyncThunk('users/ deleteUserAsyncAction',async(user)=>{
    const respo =await axios.delete("http://localhost:3201/newusers/"+user.id);
    const response = await axios.get("http://localhost:3201/newusers");
    return  response.data
   })
   export const UpdateUserASyncAction =createAsyncThunk('users/UpdateUserASyncAction',async(user)=>{
    const resp=await axios.put("http://localhost:3201/newusers/"+user.id,user);
    const response = await axios.get("http://localhost:3201/newusers");
    return response.data

   })
   export const  addUserAsyncAction =createAsyncThunk('users/addUserAsyncAction',async(user)=>{
    const resp = axios.post("http://localhost:3201/newusers",user)
    const response = await axios.get("http://localhost:3201/newusers");
    return response.data


   })
export const usersSlice=createSlice({
    name:"users",
    initialState:defaultState,
    reducers:{
        addUserAction:(state,action)=>{
            state.users.push(action.payload)
        },
        deleteUserAction:(state,action)=>{
            console.log(action)
            state.users =state.users.filter((user)=> user.id !==action.payload.id)
        },
        updateUserAction:(state,action)=>{
          state.users.forEach((user,i)=>{
            if(user.email === action.payload.email){
                state.users[i]=action.payload
            }
          })
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllUsersAsyncAction.fulfilled,(state,action)=>{
            state.users =action.payload

        })
        builder.addCase(deleteUserAsyncAction.fulfilled,(state,action)=>{
            state.users =action.payload
        })
        builder.addCase(UpdateUserASyncAction.fulfilled,(state,action)=>{
            state.users =action.payload
        })
        builder.addCase(addUserAsyncAction.fulfilled,(state,action)=>{
            state.users =action.payload
        })

    }
})
export default usersSlice.reducer
export const  {addUserAction,deleteUserAction,updateUserAction} = usersSlice.actions